using MedichineAPI.INFRA_DATA;
using MedichineAPI.MedichineEnity;
using Microsoft.AspNetCore.Mvc;

namespace MedichineAPI.Controllers;

[ApiController]
[Route("api/[MEDICINE_COLLECTIONS]")]
public class MedichineController : ControllerBase
{
    private readonly ILogger<MedichineController> _logger;
    private IMedichineService  _medichineService = new MedServices();
   
    [HttpGet("/api/Getmedicine")]
    [ProducesResponseType(typeof(Medichine),StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public  IActionResult GetMeds()
    {
        try
        {
            List<Medichine> mediches = _medichineService.GetAllMeds();
            if (mediches == null)
            {
                return NotFound();
            }
            return Ok(mediches);
        }
        catch (Exception e)
        {
            throw new Exception();
        }
    }
}