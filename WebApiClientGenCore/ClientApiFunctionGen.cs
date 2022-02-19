﻿using System;
using System.CodeDom;
using System.Linq;
using System.Diagnostics;
using Fonlow.Reflection;
using Fonlow.Web.Meta;

namespace Fonlow.CodeDom.Web.Cs
{
	/// <summary>
	/// Generate a client function upon ApiDescription for C#
	/// </summary>
	internal class ClientApiFunctionGen
	{
		readonly WebApiDescription description;
		readonly string methodName;
		protected Type returnType;
		readonly bool returnTypeIsStream;
		readonly bool returnTypeIsDynamicObject;
		CodeMemberMethod method;
		readonly Poco2Client.Poco2CsGen poco2CsGen;
		readonly bool forAsync;
		readonly bool stringAsString;
		readonly string statementOfEnsureSuccessStatusCode;
		readonly CodeGenOutputs settings;

		public ClientApiFunctionGen(WebApiDescription description, Poco2Client.Poco2CsGen poco2CsGen, CodeGenOutputs settings, bool forAsync)
		{
			this.description = description;
			//this.sharedContext = sharedContext;
			this.poco2CsGen = poco2CsGen;
			this.settings = settings;
			this.forAsync = forAsync;
			this.stringAsString = settings.StringAsString;
			//this.diFriendly = settings.DIFriendly;
			statementOfEnsureSuccessStatusCode = settings.UseEnsureSuccessStatusCodeEx ? "EnsureSuccessStatusCodeEx" : "EnsureSuccessStatusCode";
			methodName = description.ActionDescriptor.ActionName;
			if (methodName.EndsWith("Async"))
				methodName = methodName.Substring(0, methodName.Length - 5);

			returnType = description.ResponseDescription?.ResponseType ?? description.ActionDescriptor.ReturnType;
			returnTypeIsStream = returnType != null && ((returnType.FullName == typeNameOfHttpResponseMessage)
				|| (returnType.FullName == typeOfIHttpActionResult)
				|| (returnType.FullName == typeOfIActionResult)
				|| (returnType.FullName == typeOfActionResult)
				|| (returnType.FullName.StartsWith("System.Threading.Tasks.Task`1[[Microsoft.AspNetCore.Mvc.IActionResult")) // .net core is not translating Task<IActionResult> properly.
				|| (returnType.FullName.StartsWith("System.Threading.Tasks.Task`1[[Microsoft.AspNetCore.Mvc.IHttpActionResult"))
				|| (returnType.FullName.StartsWith("System.Threading.Tasks.Task`1[[Microsoft.AspNetCore.Mvc.ActionResult"))
				);

			returnTypeIsDynamicObject = returnType != null && returnType.FullName != null && returnType.FullName.StartsWith("System.Threading.Tasks.Task`1[[System.Object");
		}

		const string typeOfIHttpActionResult = "System.Web.Http.IHttpActionResult";
		const string typeOfIActionResult = "Microsoft.AspNetCore.Mvc.IActionResult"; //for .net core 2.1. I did not need this for .net core 2.0
		const string typeOfActionResult = "Microsoft.AspNetCore.Mvc.ActionResult"; //for .net core 2.1. I did not need this for .net core 2.0

		static readonly Type typeOfChar = typeof(char);

		public static CodeMemberMethod Create(WebApiDescription description, Poco2Client.Poco2CsGen poco2CsGen, CodeGenOutputs settings, bool forAsync)
		{
			var gen = new ClientApiFunctionGen(description, poco2CsGen, settings, forAsync);
			return gen.CreateApiFunction();
		}

		public CodeMemberMethod CreateApiFunction()
		{
			//create method
			method = forAsync ? CreateMethodBasicForAsync() : CreateMethodBasic();

			CreateDocComments();
			System.Globalization.TextInfo textInfo = new System.Globalization.CultureInfo("en-US", false).TextInfo;
			switch (description.HttpMethod)
			{
				case "GET":
				case "DELETE":
					RenderGetOrDeleteImplementation(textInfo.ToTitleCase(description.HttpMethod.ToLower()), forAsync);
					break;
				case "POST":
				case "PUT":
				case "PATCH":
					RenderPostOrPutImplementation(textInfo.ToTitleCase(description.HttpMethod.ToLower()), forAsync);
					break;
				default:
					Trace.TraceWarning("This HTTP method {0} is not yet supported", description.HttpMethod);
					break;
			}

			return method;
		}

		CodeMemberMethod CreateMethodBasic()
		{
			return new CodeMemberMethod()
			{
				Attributes = MemberAttributes.Public | MemberAttributes.Final,
				Name = methodName,
				ReturnType = poco2CsGen.TranslateToClientTypeReference(returnType),
			};
		}

		CodeMemberMethod CreateMethodBasicForAsync()
		{
			return new CodeMemberMethod()
			{
				Attributes = MemberAttributes.Public | MemberAttributes.Final,
				Name = methodName + "Async",
				ReturnType = returnType == null ? new CodeTypeReference("async Task")
				: new CodeTypeReference("async Task", poco2CsGen.TranslateToClientTypeReference(returnType)),
			};
		}

		void CreateDocComments()
		{
			void CreateDocComment(string elementName, string doc)
			{
				if (string.IsNullOrWhiteSpace(doc))
					return;

				method.Comments.Add(new CodeCommentStatement("<" + elementName + ">" + doc + "</" + elementName + ">", true));
			}

			void CreateParamDocComment(string paramName, string doc)
			{
				if (String.IsNullOrWhiteSpace(doc))
					return;

				method.Comments.Add(new CodeCommentStatement("<param name=\"" + paramName + "\">" + doc + "</param>", true));
			}

			method.Comments.Add(new CodeCommentStatement("<summary>", true));
			var noIndent = Fonlow.DocComment.StringFunctions.TrimIndentedMultiLineTextToArray(description.Documentation);
			if (noIndent != null)
			{
				foreach (var item in noIndent)
				{
					method.Comments.Add(new CodeCommentStatement(item, true));
				}
			}

			method.Comments.Add(new CodeCommentStatement(description.HttpMethod + " " + description.RelativePath, true));
			method.Comments.Add(new CodeCommentStatement("</summary>", true));
			foreach (var item in description.ParameterDescriptions)
			{
				CreateParamDocComment(item.Name, item.Documentation);
			}
			CreateDocComment("returns", description.ResponseDescription.Documentation);
		}

		/// <summary>
		/// 
		/// </summary>
		/// <param name="httpMethod">GET, DELETE, POST, PUT</param>
		/// <param name="forAsync"></param>
		void RenderGetOrDeleteImplementation(string httpMethod, bool forAsync)
		{
			CodeParameterDeclarationExpression[] parameters = description.ParameterDescriptions.Where(p => p.ParameterDescriptor.ParameterBinder == ParameterBinder.FromUri
			|| p.ParameterDescriptor.ParameterBinder == ParameterBinder.FromQuery || p.ParameterDescriptor.ParameterBinder == ParameterBinder.None)
				.Select(d =>
				new CodeParameterDeclarationExpression(poco2CsGen.TranslateToClientTypeReference(d.ParameterDescriptor.ParameterType), d.Name))
				.ToArray();
			method.Parameters.AddRange(parameters);

			if (settings.HandleHttpRequestHeaders)
			{
				method.Parameters.Add(new CodeParameterDeclarationExpression(
					"Action<System.Net.Http.Headers.HttpRequestHeaders>", "handleHeaders = null"));
			}

			var jsUriQuery = UriQueryHelper.CreateUriQuery(description.RelativePath, description.ParameterDescriptions);
			string uriText = jsUriQuery == null ? $"\"{description.RelativePath}\"" : RemoveTrialEmptyString($"\"{jsUriQuery}\"");


			method.Statements.Add(new CodeVariableDeclarationStatement(
				new CodeTypeReference("var"), "requestUri",
				new CodeSnippetExpression(uriText)));

			method.Statements.Add(new CodeSnippetStatement(
			$@"			using (var httpRequestMessage = new HttpRequestMessage(HttpMethod.{httpMethod}, requestUri))
			{{"
			));

			if (settings.HandleHttpRequestHeaders)
			{
				method.Statements.Add(new CodeSnippetStatement(
				$@"			if (handleHeaders != null)
			{{
				handleHeaders(httpRequestMessage.Headers);
			}}
"
				));
			}

			method.Statements.Add(new CodeVariableDeclarationStatement(
				new CodeTypeReference("var"), "responseMessage", forAsync ? new CodeSnippetExpression("await client.SendAsync(httpRequestMessage)") : new CodeSnippetExpression("client.SendAsync(httpRequestMessage).Result")));


			CodeVariableReferenceExpression resultReference = new CodeVariableReferenceExpression("responseMessage");

			//Statement: result.EnsureSuccessStatusCode();
			if (returnTypeIsStream)
			{
				method.Statements.Add(new CodeMethodInvokeExpression(resultReference, statementOfEnsureSuccessStatusCode));

				if (returnType != null)
				{
					//Debug.Assert(!returnType.FullName.Contains("JObject"));
					AddReturnStatement(method.Statements);
				}

				Add3TEndBacket(method);
			}
			else
			{
				CodeTryCatchFinallyStatement try1 = new CodeTryCatchFinallyStatement();
				try1.TryStatements.Add(new CodeMethodInvokeExpression(resultReference, statementOfEnsureSuccessStatusCode));
				method.Statements.Add(try1);

				//Statement: return something;
				if (returnType != null)
				{
					//Debug.Assert(!returnType.FullName.Contains("JObject"));
					AddReturnStatement(try1.TryStatements);
				}

				try1.FinallyStatements.Add(new CodeMethodInvokeExpression(resultReference, "Dispose"));
				Add3TEndBacket(method);
			}
		}

		void Add3TEndBacket(CodeMemberMethod method)
		{
			method.Statements.Add(new CodeSnippetStatement("\t\t\t}"));
		}

		void RenderPostOrPutImplementation(string httpMethod, bool forAsync)
		{
			//Create function parameters in prototype
			var parameters = description.ParameterDescriptions.Where(p => p.ParameterDescriptor.ParameterBinder == ParameterBinder.FromUri
			|| p.ParameterDescriptor.ParameterBinder == ParameterBinder.FromQuery || p.ParameterDescriptor.ParameterBinder == ParameterBinder.FromBody 
			|| p.ParameterDescriptor.ParameterBinder == ParameterBinder.None).Select(d => new CodeParameterDeclarationExpression()
			{
				Name = d.Name,
				Type = poco2CsGen.TranslateToClientTypeReference(d.ParameterDescriptor.ParameterType),

			}).ToArray();
			method.Parameters.AddRange(parameters);

			if (settings.HandleHttpRequestHeaders)
			{
				method.Parameters.Add(new CodeParameterDeclarationExpression(
				"Action<System.Net.Http.Headers.HttpRequestHeaders>", "handleHeaders = null"));
			}

			var fromBodyParameterDescriptions = description.ParameterDescriptions.Where(d => d.ParameterDescriptor.ParameterBinder == ParameterBinder.FromBody
				|| (TypeHelper.IsComplexType(d.ParameterDescriptor.ParameterType) && (!(d.ParameterDescriptor.ParameterBinder == ParameterBinder.FromUri) || (d.ParameterDescriptor.ParameterBinder == ParameterBinder.None)))).ToArray();
			if (fromBodyParameterDescriptions.Length > 1)
			{
				throw new CodeGenException("Bad Api Definition")
				{
					Description = String.Format("This API function {0} has more than 1 FromBody bindings in parameters", description.ActionDescriptor.ActionName)
				};
			}

			var singleFromBodyParameterDescription = fromBodyParameterDescriptions.FirstOrDefault();

			void AddRequestUriWithQueryAssignmentStatement()
			{

				var jsUriQuery = UriQueryHelper.CreateUriQuery(description.RelativePath, description.ParameterDescriptions);
				string uriText = jsUriQuery == null ? $"\"{description.RelativePath}\"" : RemoveTrialEmptyString($"\"{jsUriQuery}\"");

				method.Statements.Add(new CodeVariableDeclarationStatement(
					new CodeTypeReference("var"), "requestUri",
					new CodeSnippetExpression(uriText)));
			}

			AddRequestUriWithQueryAssignmentStatement();

			method.Statements.Add(new CodeSnippetStatement(
				$@"			using (var httpRequestMessage = new HttpRequestMessage(HttpMethod.{httpMethod}, requestUri))
			{{"
				));

			if (singleFromBodyParameterDescription != null)
			{
				method.Statements.Add(new CodeSnippetStatement(
@"			using (var requestWriter = new System.IO.StringWriter())
			{
			var requestSerializer = JsonSerializer.Create(jsonSerializerSettings);"
));
				method.Statements.Add(new CodeMethodInvokeExpression(new CodeSnippetExpression("requestSerializer"), "Serialize",
					new CodeSnippetExpression("requestWriter"),
					new CodeSnippetExpression(singleFromBodyParameterDescription.ParameterDescriptor.ParameterName)));


				method.Statements.Add(new CodeSnippetStatement(
@"			var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, ""application/json"");"
					));

				method.Statements.Add(new CodeSnippetStatement(@"			httpRequestMessage.Content = content;"));
				if (settings.HandleHttpRequestHeaders)
				{
					method.Statements.Add(new CodeSnippetStatement(@"			if (handleHeaders != null)
			{
				handleHeaders(httpRequestMessage.Headers);
			}
"));
				}

				method.Statements.Add(new CodeVariableDeclarationStatement(
					new CodeTypeReference("var"), "responseMessage", forAsync ? new CodeSnippetExpression("await client.SendAsync(httpRequestMessage)") : new CodeSnippetExpression("client.SendAsync(httpRequestMessage).Result")));
			}
			else
			{
				method.Statements.Add(new CodeVariableDeclarationStatement(
					new CodeTypeReference("var"), "responseMessage", forAsync ? new CodeSnippetExpression("await client.SendAsync(httpRequestMessage)") : new CodeSnippetExpression("client.SendAsync(httpRequestMessage).Result")));
			}

			var resultReference = new CodeVariableReferenceExpression("responseMessage");

			if (returnTypeIsStream)
			{
				method.Statements.Add(new CodeMethodInvokeExpression(resultReference, statementOfEnsureSuccessStatusCode));

				//Statement: return something;
				if (returnType != null)
				{
					AddReturnStatement(method.Statements);
				}
			}
			else
			{
				CodeTryCatchFinallyStatement try1 = new CodeTryCatchFinallyStatement();
				method.Statements.Add(try1);
				try1.TryStatements.Add(new CodeMethodInvokeExpression(resultReference, statementOfEnsureSuccessStatusCode));

				//Statement: return something;
				if (returnType != null)
				{
					AddReturnStatement(try1.TryStatements);
				}

				try1.FinallyStatements.Add(new CodeMethodInvokeExpression(resultReference, "Dispose"));
			}

			if (singleFromBodyParameterDescription != null)
			{
				Add3TEndBacket(method);
			}

			Add3TEndBacket(method);
		}

		static void Add4TEndBacket(CodeStatementCollection statementCollection)
		{
			statementCollection.Add(new CodeSnippetStatement("\t\t\t\t}"));
		}

		static void Add4TStartBacket(CodeStatementCollection statementCollection)
		{
			statementCollection.Add(new CodeSnippetStatement("\t\t\t\t{"));
		}

		static void AddNewtonSoftJsonTextReader(CodeStatementCollection statementCollection)
		{
			statementCollection.Add(new CodeSnippetStatement("\t\t\t\tusing (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))"));
		}

		static void AddNewtonSoftJsonSerializer(CodeStatementCollection statementCollection)
		{
			statementCollection.Add(new CodeVariableDeclarationStatement(
				new CodeTypeReference("var"), "serializer", new CodeSnippetExpression("JsonSerializer.Create(jsonSerializerSettings)")));
		}

		const string typeNameOfHttpResponseMessage = "System.Net.Http.HttpResponseMessage";

		void AddReturnStatement(CodeStatementCollection statementCollection)
		{
			if (returnTypeIsStream)
			{
				statementCollection.Add(new CodeMethodReturnStatement(new CodeSnippetExpression("responseMessage")));
				return;
			}
			else if (returnTypeIsDynamicObject) // .NET Core ApiExplorer could get return type out of Task<> in most cases, however, not for dynamic and anynomous, while .NET Framework ApiExplorer is fine.
			{
				statementCollection.Add(new CodeSnippetStatement(forAsync ?
					"\t\t\t\tvar stream = await responseMessage.Content.ReadAsStreamAsync();"
					: "\t\t\t\tvar stream = responseMessage.Content.ReadAsStreamAsync().Result;"));
				AddNewtonSoftJsonTextReader(statementCollection);
				Add4TStartBacket(statementCollection);
				AddNewtonSoftJsonSerializer(statementCollection);
				statementCollection.Add(new CodeMethodReturnStatement(new CodeMethodInvokeExpression(
					new CodeMethodReferenceExpression(new CodeVariableReferenceExpression("serializer"), "Deserialize", poco2CsGen.TranslateToClientTypeReference(returnType)),
						new CodeSnippetExpression("jsonReader"))));
				Add4TEndBacket(statementCollection);

				return;
			}
			else if (returnType.IsGenericType)
			{
				Type genericTypeDefinition = returnType.GetGenericTypeDefinition();
				if (genericTypeDefinition == typeof(System.Threading.Tasks.Task<>))
				{
					statementCollection.Add(new CodeMethodReturnStatement(new CodeSnippetExpression("responseMessage")));
					Trace.TraceWarning("There could be something to improve: " + returnType.GenericTypeArguments[0].ToString());
					return;
				}
			}

			statementCollection.Add(new CodeSnippetStatement(forAsync ?
				"\t\t\t\tvar stream = await responseMessage.Content.ReadAsStreamAsync();"
				: "\t\t\t\tvar stream = responseMessage.Content.ReadAsStreamAsync().Result;"));
			//  statementCollection.Add(new CodeSnippetStatement("            using (System.IO.StreamReader reader = new System.IO.StreamReader(stream))"));

			if (returnType != null && TypeHelper.IsStringType(returnType))
			{
				if (this.stringAsString)
				{
					statementCollection.Add(new CodeSnippetStatement("\t\t\t\tusing (System.IO.StreamReader streamReader = new System.IO.StreamReader(stream))"));
					Add4TStartBacket(statementCollection); 
					statementCollection.Add(new CodeMethodReturnStatement(new CodeSnippetExpression("streamReader.ReadToEnd();")));
				}
				else
				{
					AddNewtonSoftJsonTextReader(statementCollection);
					Add4TStartBacket(statementCollection);
					statementCollection.Add(new CodeMethodReturnStatement(new CodeSnippetExpression("jsonReader.ReadAsString()")));
				}
			}
			else if (returnType == typeOfChar)
			{
				AddNewtonSoftJsonTextReader(statementCollection);
				Add4TStartBacket(statementCollection);
				AddNewtonSoftJsonSerializer(statementCollection);
				statementCollection.Add(new CodeMethodReturnStatement(new CodeSnippetExpression("serializer.Deserialize<char>(jsonReader)")));
			}
			else if (returnType.IsPrimitive)
			{
				AddNewtonSoftJsonTextReader(statementCollection);
				Add4TStartBacket(statementCollection);
				statementCollection.Add(new CodeMethodReturnStatement(new CodeSnippetExpression(String.Format("{0}.Parse(jsonReader.ReadAsString())", returnType.FullName))));
			}
			else if (returnType.IsGenericType)
			{
				AddNewtonSoftJsonTextReader(statementCollection);
				Add4TStartBacket(statementCollection);
				AddNewtonSoftJsonSerializer(statementCollection);
				statementCollection.Add(new CodeMethodReturnStatement(new CodeMethodInvokeExpression(
					new CodeMethodReferenceExpression(new CodeVariableReferenceExpression("serializer"), "Deserialize", poco2CsGen.TranslateToClientTypeReference(returnType)),
						new CodeSnippetExpression("jsonReader"))));
			}
			else if (TypeHelper.IsComplexType(returnType))
			{
				AddNewtonSoftJsonTextReader(statementCollection);
				Add4TStartBacket(statementCollection);
				AddNewtonSoftJsonSerializer(statementCollection);
				statementCollection.Add(new CodeMethodReturnStatement(new CodeMethodInvokeExpression(
					new CodeMethodReferenceExpression(new CodeVariableReferenceExpression("serializer"), "Deserialize", poco2CsGen.TranslateToClientTypeReference(returnType)),
						new CodeSnippetExpression("jsonReader"))));
			}
			else if (returnType.IsEnum)
			{
				AddNewtonSoftJsonTextReader(statementCollection);
				Add4TStartBacket(statementCollection);
				AddNewtonSoftJsonSerializer(statementCollection);
				statementCollection.Add(new CodeMethodReturnStatement(new CodeMethodInvokeExpression(
					new CodeMethodReferenceExpression(new CodeVariableReferenceExpression("serializer"), "Deserialize", poco2CsGen.TranslateToClientTypeReference(returnType)),
						new CodeSnippetExpression("jsonReader"))));

			}
			else
			{
				Trace.TraceWarning("This type is not yet supported: {0}", returnType.FullName);
			}

			Add4TEndBacket(statementCollection);
		}

		private static string RemoveTrialEmptyString(string s)
		{
			var p = s.IndexOf("+\"\"");
			if (p >= 0)
			{
				return s.Remove(p, 3);
			}

			var p2 = s.IndexOf("))\"");
			if (p2 >= 0)
			{
				return s.Remove(p2 + 2, 1);
			}

			return s;
		}

	}

}
