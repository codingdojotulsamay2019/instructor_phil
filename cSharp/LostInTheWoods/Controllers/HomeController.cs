using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LostInTheWoods.Models;
using LostInTheWoods.Factory;

namespace LostInTheWoods.Controllers
{
    public class HomeController : Controller
    {
        private readonly TrailFactory _TrailFactory;

        public HomeController()
        {
            _TrailFactory = new TrailFactory();
        }

        [Route("")]
        [HttpGet]
        public IActionResult Index()
        {
            List<Trail> AllTrails = _TrailFactory.FindAll().ToList();

            return View(AllTrails);
        }

        [Route("trail/new")]
        [HttpGet]
        public IActionResult New()
        {
            return View();
        }

        [Route("trail/{trail_id}")]
        [HttpGet]
        public IActionResult Show(int trail_id)
        {
            Trail Trail = _TrailFactory.FindByID(trail_id);

            return View(Trail);
        }

        [HttpPost("trail")]
        public IActionResult Create(Trail Trail)
        {
            if(ModelState.IsValid != true)
            {
                // failed validations
                return View("New");
            } else {
                // add trail to db
                _TrailFactory.Add(Trail);
                return RedirectToAction("Index");
            }
        }

    }
}
