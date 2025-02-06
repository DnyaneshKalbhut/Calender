using Microsoft.AspNetCore.Mvc;

namespace EventSchedular.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
