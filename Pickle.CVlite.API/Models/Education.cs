using MongoDB.Bson.Serialization.Attributes;

namespace Pickle.CVlite.API.Models;

public class Education
{
    [BsonElement("school")]
    public string? School { get; set; }
    
    [BsonElement("degree")]
    public string? Degree { get; set; }
    
    [BsonElement("startDate")]
    public DateTime StartDate { get; set; }
    
    [BsonElement("endDate")]
    public DateTime EndDate { get; set; }
    
    [BsonElement("city")]
    public string? City { get; set; }
    
    [BsonElement("description")]
    public List<string>? Description { get; set; }
}