﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Mission2.Models;

namespace Mission2.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("GradeCalculator")]

        public IActionResult GradeCalculator()
        {
            return View();
        }

        [HttpPost("GradeCalculator")]

        public IActionResult GradeCalculator (GradeCalculatorModel model)
        {
            return View();
        }

    }
}
