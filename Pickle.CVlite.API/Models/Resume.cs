using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Pickle.CVlite.API.Models;

public class Resume
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("personalDetail")]
    public PersonalDetail PersonalDetail { get; set; }

    public string? ProFile { get; set; }
    
    [BsonElement("employmentHistories")]
    public List<EmploymentHistory>? EmploymentHistories { get; set; }
    
    [BsonElement("educations")]
    public List<Education> Educations { get; set; }
    
    [BsonElement("links")]
    public List<WebSocial> Links { get; set; }
    
    [BsonElement("skills")]
    public List<Rating> Skills { get; set; }
    
    [BsonElement("languages")]
    public List<Rating> Languages { get; set; }
    
    [BsonElement("hobbies")]
    public string Hobbies { get; set; }
}