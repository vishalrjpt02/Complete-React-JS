using System.Text.Json;
using MedichineAPI.MedichineEnity;


namespace MedichineAPI.INFRA_DATA;

public class MedServices : IMedichineService
{
    public List<Medichine> GetAllMeds()
    {
        string localmeds = File.ReadAllText("Uutility/Medichines.json");
        List<Medichine> meds = null;
        if (!string.IsNullOrEmpty(localmeds))
             meds = JsonSerializer.Deserialize<List<Medichine>>(localmeds);
        
        return meds;
    }
}