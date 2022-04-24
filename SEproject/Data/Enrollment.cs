using System;
using System.Collections.Generic;

namespace SEproject.Data
{
    public partial class Enrollment
    {
        public string StudentId { get; set; } = null!;
        public string CourseId { get; set; } = null!;

        public virtual Course Course { get; set; } = null!;
        public virtual Student Student { get; set; } = null!;
    }
}
