using Microsoft.AspNetCore.Mvc;
using Pickle.CVlite.API.Models;
using Pickle.CVlite.API.Services;

namespace Pickle.CVlite.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ResumeController : ControllerBase
{
    private readonly ResumeService _resumeService;
    private readonly PdfService _pdfService;
    
    public ResumeController(ResumeService resumeService, PdfService pdfService)
    {
        _resumeService = resumeService;
        _pdfService = pdfService;
    }

    [HttpGet]
    public async Task<List<Resume>> Get() => await _resumeService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<Resume?> Get(string id) => await _resumeService.GetAsync(id);

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] Resume resume)
    {
        await _resumeService.CreateAsync(resume);
        await _pdfService.CreatePdfFromHtml();
        return CreatedAtAction(nameof(Get), new { id = resume.Id }, resume);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Resume updatedResume)
    {
        var resume = await _resumeService.GetAsync(id);

        if (resume is null)
        {
            return NotFound();
        }

        updatedResume.Id = resume.Id;

        await _resumeService.UpdateAsync(id, updatedResume);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var resume = await _resumeService.GetAsync(id);

        if (resume is null)
        {
            return NotFound();
        }

        await _resumeService.RemoveAsync(id);

        return NoContent();
    }
}