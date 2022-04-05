namespace SEproject.Models;

public class Instructor
{
    //Intialize Variables
    private String instructorID;
    private String firstName;
    private String lastName;
    private String email;
    private String position;
    private String major;

    //GetSets
    public string GetSetID
    {
        get => instructorID;
        set => instructorID = value ?? throw new ArgumentNullException(nameof(value));
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

    public string GetSetPosition
    {
        get => position;
        set => position = value ?? throw new ArgumentNullException(nameof(value));
    }

    public string GetSetMajor
    {
        get => major;
        set => major = value ?? throw new ArgumentNullException(nameof(value));
    }

    //Constructor
    public Instructor(string instructorId, string firstName, string lastName, string email, string position, string major)
    {
        instructorID = instructorId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.position = position;
        this.major = major;
    }
}