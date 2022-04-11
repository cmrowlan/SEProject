using System;
using System.Collections.Generic;

namespace SEproject.Data
{
    public partial class Course
    {
        public string CourseId { get; set; } = null!;
        public string CourseName { get; set; } = null!;
        public string? InstructorId { get; set; }
        public string? InstructorFirst { get; set; }
        public string? InstructorLast { get; set; }
        public string? InstructorEmail { get; set; }
    }
}
