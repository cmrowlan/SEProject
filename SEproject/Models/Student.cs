namespace SEproject.Models
{
    public class Student
    {
        //Intialize Variables
        private String studentID;
        private String firstName;
        private String lastName;
        private String email;
        private String major;

        //GetSets
        public string GetSetID
        {
            get => studentID;
            set => studentID = value ?? throw new ArgumentNullException(nameof(value));
        }
        
        public string GetSetFirstName
        {
            get => firstName;
            set => firstName = value ?? throw new ArgumentNullException(nameof(value));
        }

        public string GetSetLastName
        {
            get => lastName;
            set => lastName = value ?? throw new ArgumentNullException(nameof(value));
        }

        public string GetSetEmail
        {
            get => email;
            set => email = value ?? throw new ArgumentNullException(nameof(value));
        }

        public string GetSetMajor
        {
            get => major;
            set => major = value ?? throw new ArgumentNullException(nameof(value));
        }

        //Constructor
        public Student(string studentID, string firstName, string lastName, string email, string major)
        {
            this.studentID = studentID;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.major = major;
        }
    }
}
