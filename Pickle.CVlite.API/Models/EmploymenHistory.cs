namespace Pickle.CVlite.API.Models;

public class EmploymentHistory
{
    public string JobTitle { get; set; }
    public string Employer { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public string City { get; set; }
    public string? Description { get; set; }
}