using System;
using System.Collections.Generic;

namespace SEproject.Data
{
    public partial class Instructor
    {
        public string Id { get; set; } = null!;
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Position { get; set; } = null!;
        public string Major { get; set; } = null!;
    }
}
