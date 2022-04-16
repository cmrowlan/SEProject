export class Student {
    studentID: string;
    firstName: string;
    lastName: string;
    email: string;
    major: string;

    constructor(id: string, firstName: string, lastName: string, email: string, major: string) {
        this.studentID = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.major = major;
    }
}
