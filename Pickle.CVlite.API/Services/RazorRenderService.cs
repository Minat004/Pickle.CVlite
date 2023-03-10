using Pickle.CVlite.API.Models;
using Razor.Templating.Core;

namespace Pickle.CVlite.API.Services;

public class RazorRenderService
{
    private const string Input = @"./Assets/Input/inputRazor.cshtml";
    private const string Output = @"/Assets/Output/outputRazor.html";

    private readonly ResumeService _resumeService;

    public RazorRenderService(ResumeService resumeService)
    {
        _resumeService = resumeService;
    }
    
    public async Task GenerateHtml()
    {
        var model = _resumeService.GetAsync("63e76d576b63a2cfca532a5b").Result;

        var html = await RazorTemplateEngine.RenderAsync(Input, model);
        
        await File.WriteAllTextAsync(Directory.GetCurrentDirectory() + Output, html);
    }
}