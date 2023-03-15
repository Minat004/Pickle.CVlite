using MongoDB.Bson.Serialization.Attributes;

namespace Pickle.CVlite.API.Models;

public class EmploymentHistory
{
    [BsonElement("jobTitle")]
    public string? JobTitle { get; set; }
    
    [BsonElement("employer")]
    public string? Employer { get; set; }
    
    [BsonElement("startDate")]
    public DateTime StartDate { get; set; }
    
    [BsonElement("endDate")]
    public DateTime EndDate { get; set; }
    
    [BsonElement("city")]
    public string? City { get; set; }
    
    [BsonElement("description")]
    public List<string>? Description { get; set; }
}