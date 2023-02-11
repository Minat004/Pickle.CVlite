using Microsoft.AspNetCore.Mvc;
using Pickle.CVlite.API.Models;
using Pickle.CVlite.API.Services;

namespace Pickle.CVlite.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ResumeController : ControllerBase
{
    private readonly ResumesService _resumesService;
    
    public ResumeController(ResumesService resumesService)
    {
        _resumesService = resumesService;
    }

    [HttpGet]
    public async Task<List<Resume>> Get() => await _resumesService.GetAsync();

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] Resume resume)
    {
        await _resumesService.CreateAsync(resume);
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