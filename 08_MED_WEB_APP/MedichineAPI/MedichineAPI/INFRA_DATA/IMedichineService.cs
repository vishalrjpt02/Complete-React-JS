namespace MedichineAPI.INFRA_DATA;
using MedichineAPI.MedichineEnity;
public interface IMedichineService
{
    List<Medichine> GetAllMeds();
}