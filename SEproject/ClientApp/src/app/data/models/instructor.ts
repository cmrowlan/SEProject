export class Instructor {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    position: string;
    major: string;

    constructor(id: string, firstName: string, lastName: string, email: string, position: string, major: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.position = position;
        this.major = major;
    }
}
