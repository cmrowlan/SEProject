namespace SEproject.Models
{

    public class Classes
    {
        //intialize Variables

        private String classID;
        private String className;
        private String instructorID;
        private String instructorFirstName;
        private String instructorLastName;
        private String instructorEmail;
        private Instructor instructor;

        //GetSets
        public string GetSetClassID
        {
            get => classID;
            set => classID = value ?? throw new ArgumentNullException(nameof(value));
        }

        public string GetSetClassName
        {
            get => className;
            set => className = value ?? throw new ArgumentNullException(nameof(value));
        }

        private string GetSetInstructorID
        {
            get => instructor.GetSetID;
            set => instructorID = instructor.GetSetID = value ?? throw new ArgumentNullException(nameof(value));
        }

        public string GetSetInstructorFirstName
        {
            get => instructor.GetSetFirstName;
            set => instructor.GetSetFirstName = value ?? throw new ArgumentNullException(nameof(value));
        }

        public string GetSetInstructorLastName
        {
            get => instructor.GetSetLastName;
            set => instructor.GetSetLastName = value ?? throw new ArgumentNullException(nameof(value));
        }

        public string GetSetInstructorEmail
        {
            get => instructor.GetSetEmail;
            set => instructor.GetSetEmail = value ?? throw new ArgumentNullException(nameof(value));
        }

        //Constructor
        public Classes(string classID, string className, string instructorID, string instructorFirstName, string instructorLastName, string instructorEmail)
        {
            this.classID = classID;
            this.className = className;
            this.instructorID = instructorID;
            this.instructorFirstName = instructorFirstName;
            this.instructorLastName = instructorLastName;
            this.instructorEmail = instructorEmail;
        }
    }
}