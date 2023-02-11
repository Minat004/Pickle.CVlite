namespace Pickle.CVlite.API.Models;

public class Education
{
    public string School { get; set; }
    public string Degree { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public string City { get; set; }
    public string? Description { get; set; }
}