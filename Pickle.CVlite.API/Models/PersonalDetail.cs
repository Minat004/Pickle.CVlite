using MongoDB.Bson.Serialization.Attributes;

namespace Pickle.CVlite.API.Models;

public class PersonalDetail
{
    [BsonElement("jobTitle")]
    public string? JobTitle { get; set; }

    [BsonElement("photo")]
    public string? Photo { get; set; }

    [BsonElement("firstName")]
    public string FirstName { get; set; } = string.Empty;

    [BsonElement("lastName")]
    public string LastName { get; set; } = string.Empty;

    [BsonElement("email")]
    public string Email { get; set; } = string.Empty;

    [BsonElement("phone")]
    public string Phone { get; set; } = string.Empty;
    
    [BsonElement("country")]
    public string? Country { get; set; }
    
    [BsonElement("city")]
    public string? City { get; set; }
    
    [BsonElement("street")]
    public string? Street { get; set; }
    
    [BsonElement("postCode")]
    public string? PostCode { get; set; }
    
    [BsonElement("nationality")]
    public string? Nationality { get; set; }
    
    [BsonElement("dateOfBirth")]
    public DateTime DateOfBirth { get; set; }
    
}