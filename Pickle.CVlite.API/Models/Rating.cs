using MongoDB.Bson.Serialization.Attributes;

namespace Pickle.CVlite.API.Models;

public class Rating
{
    [BsonElement("name")]
    public string? Name { get; set; }

    [BsonElement("level")]
    public string? Level { get; set; }
}