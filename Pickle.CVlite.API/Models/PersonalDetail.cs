using MongoDB.Bson.Serialization.Attributes;

namespace Pickle.CVlite.API.Models;

public class PersonalDetail
{
    [BsonElement("jobTitle")]
    public string JobTitle { get; set; } = string.Empty;
    
    [BsonElement("photo")]
    public string Photo { get; set; }
    
    [BsonElement("firstName")]
    public string FirstName { get; set; }
    
    [BsonElement("lastName")]
    public string LastNAme { get; set; }
    
    [BsonElement("email")]
    public string Email { get; set; }
    
    [BsonElement("phone")]
    public string Phone { get; set; }
    
    [BsonElement("country")]
    public string Country { get; set; }
    
    [BsonElement("city")]
    public string City { get; set; }
    
    [BsonElement("street")]
    public string Street { get; set; }
    
    [BsonElement("postCode")]
    public string PostCode { get; set; }
    
    [BsonElement("nationality")]
    public string Nationality { get; set; }
    
    [BsonElement("dateOfBirth")]
    public DateTime DateOfBirth { get; set; }
    
}