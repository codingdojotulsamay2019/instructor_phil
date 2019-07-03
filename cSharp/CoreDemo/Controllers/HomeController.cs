using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace CoreDemo
{
    public class HomeController : Controller
    {
        [Route("")]
        [HttpGet]
        public string Index()
        {
            return "Response from Index method in HOme controller";
        }

        [HttpGet("success")]
        public IActionResult Success()
        {
            ViewBag.Name = "Phil";
            return View("SuccessOne");
        }

        [HttpGet("process/{num}")]
        public string Process(int num)
        {
            return $"The number from the route was {num}";
        }

        [HttpGet("json")]
        public JsonResult Json()
        {
            Dictionary<string, string> Response = new Dictionary<string, string>();
            Response["Name"] = "Phil";
            Response["Location"] = "Tulsa";
            return Json(Response);
        }
    }
}