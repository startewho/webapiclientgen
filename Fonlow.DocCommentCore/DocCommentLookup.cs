﻿using System;
using System.Linq;
using System.Xml.Serialization;
using System.Diagnostics;
using System.IO;
using System.Reflection;

namespace Fonlow.DocComment
{
    /// <summary>
    /// Lookup doc comment stored in an XML file.
    /// The xml parser is generated through xsd.exe xmldocument.xsd /language:C# /namespace:Fonlow.DocComment /classes
    /// </summary>
    public class DocCommentLookup
    {
        private DocCommentLookup()
        {

        }

        public doc XmlDoc { get; private set; }

        bool Load(string filePath)
        {
            XmlSerializer serializer = new XmlSerializer(typeof(doc));
            try
            {
                using (var fs = new System.IO.FileStream(filePath, System.IO.FileMode.Open, System.IO.FileAccess.Read))
                {
                    XmlDoc = serializer.Deserialize(fs) as doc;
                    return XmlDoc != null;
                }

            }
            catch (Exception ex) when (ex is ArgumentException || ex is System.IO.IOException || ex is System.Security.SecurityException)
            {
                Trace.TraceWarning("Cannot locate the doc xml of the assembly: "+ ex.ToString());
                return false;
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="name">Fully qualified member name of doc comment XML. Like T:DemoWebApi.Areas.HelpPage.HelpPageSampleKey</param>
        /// <returns></returns>
        public docMember GetMember(string name)
        {
            return XmlDoc.members.SingleOrDefault(d => d.name == name);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="filePath">XML file of doc comment.</param>
        /// <returns></returns>
        public static DocCommentLookup Create(string filePath)
        {
            var lookup = new DocCommentLookup();
            var r = lookup.Load(filePath);
            if (r)
            {
                return lookup;
            }

            return null;
        }

        /// <summary>
        /// Get doc comment xml of the assembly
        /// </summary>
        /// <param name="assembly"></param>
        /// <returns></returns>
        public static string GetXmlPath(Assembly assembly)
        {
            var assemblyName = assembly.GetName().Name;
            var dirName = GetAssemblyDirectory(assembly);
            return Path.Combine(dirName, assemblyName + ".xml");
        }

        static string GetAssemblyDirectory(Assembly assembly)
        {
            string codeBase = assembly.Location;
            UriBuilder uri = new UriBuilder(codeBase);
            string path = Uri.UnescapeDataString(uri.Path);
            return Path.GetDirectoryName(path);
        }


    }
}
