﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyNS
{
	using System;
	using System.Collections.Generic;
	using System.Threading.Tasks;
	using System.Net.Http;
	using Newtonsoft.Json;


	public partial class ValuesClient
	{

		private System.Net.Http.HttpClient client;

		private System.Uri baseUri;

		public ValuesClient(System.Net.Http.HttpClient client, System.Uri baseUri)
		{
			if (client == null)
				throw new ArgumentNullException("client", "Null HttpClient.");

			if (baseUri == null)
				throw new ArgumentNullException("baseUri", "Null baseUri");

			this.client = client;
			this.baseUri = baseUri;
		}

		/// <summary>
		/// ValuesGet /api/Values
		/// </summary>
		/// <returns>Success</returns>
		public async Task<string[]> ValuesGetAsync()
		{
			var requestUri = new Uri(this.baseUri, "/api/Values");
			var responseMessage = await client.GetAsync(requestUri);
			try
			{
				responseMessage.EnsureSuccessStatusCode();
				var stream = await responseMessage.Content.ReadAsStreamAsync();
				using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
				{
					var serializer = new JsonSerializer();
					return serializer.Deserialize<string[]>(jsonReader);
				}
			}
			finally
			{
				responseMessage.Dispose();
			}
		}

		/// <summary>
		/// ValuesGet /api/Values
		/// </summary>
		/// <returns>Success</returns>
		public string[] ValuesGet()
		{
			var requestUri = new Uri(this.baseUri, "/api/Values");
			var responseMessage = this.client.GetAsync(requestUri).Result;
			try
			{
				responseMessage.EnsureSuccessStatusCode();
				var stream = responseMessage.Content.ReadAsStreamAsync().Result;
				using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
				{
					var serializer = new JsonSerializer();
					return serializer.Deserialize<string[]>(jsonReader);
				}
			}
			finally
			{
				responseMessage.Dispose();
			}
		}

		/// <summary>
		/// ValuesPost /api/Values
		/// </summary>
		/// <returns>Success</returns>
		public async Task<string> ValuesPostAsync(string requestBody)
		{
			var requestUri = new Uri(this.baseUri, "/api/Values");
			using (var requestWriter = new System.IO.StringWriter())
			{
				var requestSerializer = JsonSerializer.Create();
				requestSerializer.Serialize(requestWriter, requestBody);
				var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
				var responseMessage = await client.PostAsync(requestUri, content);
				try
				{
					responseMessage.EnsureSuccessStatusCode();
					var stream = await responseMessage.Content.ReadAsStreamAsync();
					using (System.IO.StreamReader streamReader = new System.IO.StreamReader(stream))
					{
						return streamReader.ReadToEnd(); ;
					}
				}
				finally
				{
					responseMessage.Dispose();
				}
			}
		}

		/// <summary>
		/// ValuesPost /api/Values
		/// </summary>
		/// <returns>Success</returns>
		public string ValuesPost(string requestBody)
		{
			var requestUri = new Uri(this.baseUri, "/api/Values");
			using (var requestWriter = new System.IO.StringWriter())
			{
				var requestSerializer = JsonSerializer.Create();
				requestSerializer.Serialize(requestWriter, requestBody);
				var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
				var responseMessage = this.client.PostAsync(requestUri, content).Result;
				try
				{
					responseMessage.EnsureSuccessStatusCode();
					var stream = responseMessage.Content.ReadAsStreamAsync().Result;
					using (System.IO.StreamReader streamReader = new System.IO.StreamReader(stream))
					{
						return streamReader.ReadToEnd(); ;
					}
				}
				finally
				{
					responseMessage.Dispose();
				}
			}
		}

		/// <summary>
		/// ValuesGetById /api/Values/{id}
		/// </summary>
		/// <returns>Success</returns>
		public async Task<string> ValuesGetByIdAsync(int id)
		{
			var requestUri = new Uri(this.baseUri, "/api/Values/" + id);
			var responseMessage = await client.GetAsync(requestUri);
			try
			{
				responseMessage.EnsureSuccessStatusCode();
				var stream = await responseMessage.Content.ReadAsStreamAsync();
				using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
				{
					return jsonReader.ReadAsString();
				}
			}
			finally
			{
				responseMessage.Dispose();
			}
		}

		/// <summary>
		/// ValuesGetById /api/Values/{id}
		/// </summary>
		/// <returns>Success</returns>
		public string ValuesGetById(int id)
		{
			var requestUri = new Uri(this.baseUri, "/api/Values/" + id);
			var responseMessage = this.client.GetAsync(requestUri).Result;
			try
			{
				responseMessage.EnsureSuccessStatusCode();
				var stream = responseMessage.Content.ReadAsStreamAsync().Result;
				using (JsonReader jsonReader = new JsonTextReader(new System.IO.StreamReader(stream)))
				{
					return jsonReader.ReadAsString();
				}
			}
			finally
			{
				responseMessage.Dispose();
			}
		}

		/// <summary>
		/// ValuesPutById /api/Values/{id}
		/// </summary>
		/// <returns>Success</returns>
		public async Task ValuesPutByIdAsync(int id, string requestBody)
		{
			var requestUri = new Uri(this.baseUri, "/api/Values/" + id);
			using (var requestWriter = new System.IO.StringWriter())
			{
				var requestSerializer = JsonSerializer.Create();
				requestSerializer.Serialize(requestWriter, requestBody);
				var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
				var responseMessage = await client.PutAsync(requestUri, content);
				try
				{
					responseMessage.EnsureSuccessStatusCode();
				}
				finally
				{
					responseMessage.Dispose();
				}
			}
		}

		/// <summary>
		/// ValuesPutById /api/Values/{id}
		/// </summary>
		/// <returns>Success</returns>
		public void ValuesPutById(int id, string requestBody)
		{
			var requestUri = new Uri(this.baseUri, "/api/Values/" + id);
			using (var requestWriter = new System.IO.StringWriter())
			{
				var requestSerializer = JsonSerializer.Create();
				requestSerializer.Serialize(requestWriter, requestBody);
				var content = new StringContent(requestWriter.ToString(), System.Text.Encoding.UTF8, "application/json");
				var responseMessage = this.client.PutAsync(requestUri, content).Result;
				try
				{
					responseMessage.EnsureSuccessStatusCode();
				}
				finally
				{
					responseMessage.Dispose();
				}
			}
		}

		/// <summary>
		/// ValuesDeleteById /api/Values/{id}
		/// </summary>
		/// <returns>Success</returns>
		public async Task ValuesDeleteByIdAsync(int id)
		{
			var requestUri = new Uri(this.baseUri, "/api/Values/" + id);
			var responseMessage = await client.DeleteAsync(requestUri);
			try
			{
				responseMessage.EnsureSuccessStatusCode();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}

		/// <summary>
		/// ValuesDeleteById /api/Values/{id}
		/// </summary>
		/// <returns>Success</returns>
		public void ValuesDeleteById(int id)
		{
			var requestUri = new Uri(this.baseUri, "/api/Values/" + id);
			var responseMessage = this.client.DeleteAsync(requestUri).Result;
			try
			{
				responseMessage.EnsureSuccessStatusCode();
			}
			finally
			{
				responseMessage.Dispose();
			}
		}
	}
}
