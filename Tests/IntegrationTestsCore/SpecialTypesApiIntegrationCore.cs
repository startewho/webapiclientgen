﻿using System;
using Xunit;
using Fonlow.Testing;

namespace IntegrationTests
{
	public class SpecialTypesFixture : DefaultHttpClient
	{
		public SpecialTypesFixture()
		{
			httpClient = new System.Net.Http.HttpClient
			{
				BaseAddress = base.BaseUri
			};

			Api = new DemoCoreWeb.Controllers.Client.SpecialTypes(httpClient);
		}

		public DemoCoreWeb.Controllers.Client.SpecialTypes Api { get; private set; }

		readonly System.Net.Http.HttpClient httpClient;

		#region IDisposable pattern
		bool disposed;

		public void Dispose()
		{
			Dispose(true);
			GC.SuppressFinalize(this);
		}

		protected virtual void Dispose(bool disposing)
		{
			if (!disposed)
			{
				if (disposing)
				{
					httpClient.Dispose();
				}

				disposed = true;
			}
		}
		#endregion
	}


	[Collection(TestConstants.LaunchWebApiAndInit)]
	public partial class SpecialTypesApiIntegration : IClassFixture<SpecialTypesFixture>
	{
		public SpecialTypesApiIntegration(SpecialTypesFixture fixture)
		{
			api = fixture.Api;
		}

		readonly DemoCoreWeb.Controllers.Client.SpecialTypes api;

		[Fact]
		public void TestGetAnonymousDynamic()
		{
			var d = api.GetAnonymousDynamic();
			Assert.Equal("12345", d["id"].ToString());
			Assert.Equal("Something", d["name"].ToString());
		}

		[Fact]
		public void TestGetAnonymousObject()
		{
			var d = api.GetAnonymousObject();
			Assert.Equal("12345", d["id"].ToString());
			Assert.Equal("Something", d["name"].ToString());
		}

		[Fact]
		public void TestPostAnonymousObject()
		{
			var d = new Newtonsoft.Json.Linq.JObject
			{
				["Id"] = "12345",
				["Name"] = "Something"
			};
			var r = api.PostAnonymousObject(d);
			Assert.Equal("123451", r["Id"].ToString());
			Assert.Equal("Something1", r["Name"].ToString());

		}

		[Fact]
		public void TestGetAnonymousDynamic2()
		{
			var d = api.GetAnonymousDynamic2();
			Assert.Equal("12345", d["id"].ToString());
			Assert.Equal("Something", d["name"].ToString());
		}

		[Fact]
		public void TestGetAnonymousObject2()
		{
			var d = api.GetAnonymousObject2();
			Assert.Equal("12345", d["id"].ToString());
			Assert.Equal("Something", d["name"].ToString());
		}

		[Fact]
		public void TestPostAnonymousObject2()
		{
			var d = new Newtonsoft.Json.Linq.JObject
			{
				["Id"] = "12345",
				["Name"] = "Something"
			};
			var r = api.PostAnonymousObject2(d);
			Assert.Equal("123451", r["Id"].ToString());
			Assert.Equal("Something1", r["Name"].ToString());

		}

	}
}
