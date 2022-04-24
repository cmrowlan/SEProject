﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SEproject.Data;

namespace SEproject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnrollmentController : ControllerBase
    {
        private readonly SierraEchoContext _context;

        public EnrollmentController(SierraEchoContext context)
        {
            _context = context;
        }

        // GET: api/Enrollment/SXXXXX
        [HttpGet("{id}")]
        public async Task<IQueryable<Enrollment>> GetEnrollment(string id)
        {
            var query = _context.Enrollments.Where(s => s.StudentId == id);

            return query;

    
        }
    }
    }
