namespace Pickle.CVlite.API.Models;

public class Resume
{
    public PersonalDetail PersonalDetail { get; set; }
    public List<EmploymentHistory> EmploymentHistories { get; set; }
    public List<Education> Educations { get; set; }
    public List<WebSocial> Links { get; set; }
    public List<Rating> Skills { get; set; }
    public List<Rating> Languages { get; set; }
    public List<string> Hobbies { get; set; }
}