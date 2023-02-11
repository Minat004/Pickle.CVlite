namespace Pickle.CVlite.API.Models;

public class PersonalDetail
{
    public string JobTitle { get; set; } = string.Empty;
    public string Photo { get; set; }
    public string FirstName { get; set; }
    public string LastNAme { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }
    public string Country { get; set; }
    public string City { get; set; }
    public string Street { get; set; }
    public string PostCode { get; set; }
    public string Nationality { get; set; }
    public DateTime DateOfBirth { get; set; }
}