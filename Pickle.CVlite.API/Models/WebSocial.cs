using MongoDB.Bson.Serialization.Attributes;

namespace Pickle.CVlite.API.Models;

public class WebSocial
{
    [BsonElement("label")]
    public string Label { get; set; }

    [BsonElement("link")]
    public string Link { get; set; }
}