using Microsoft.AspNetCore.Mvc;
using Pickle.CVlite.API.Models;
using Pickle.CVlite.API.Services;

namespace Pickle.CVlite.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ResumeController : ControllerBase
{
    private readonly ResumesService _resumesService;
    private readonly PdfService _pdfService;
    
    public ResumeController(ResumesService resumesService, PdfService pdfService)
    {
        _resumesService = resumesService;
        _pdfService = pdfService;
    }

    [HttpGet]
    public async Task<List<Resume>> Get() => await _resumesService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<Resume?> Get(string id) => await _resumesService.GetAsync(id);

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] Resume resume)
    {
        await _resumesService.CreateAsync(resume);
        await _pdfService.CreatePdfFromHtml();
        return CreatedAtAction(nameof(Get), new { id = resume.Id }, resume);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Resume updatedResume)
    {
        var resume = await _resumesService.GetAsync(id);

        if (resume is null)
        {
            return NotFound();
        }

        updatedResume.Id = resume.Id;

        await _resumesService.UpdateAsync(id, updatedResume);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var resume = await _resumesService.GetAsync(id);

        if (resume is null)
        {
            return NotFound();
        }

        await _resumesService.RemoveAsync(id);

        return NoContent();
    }
}