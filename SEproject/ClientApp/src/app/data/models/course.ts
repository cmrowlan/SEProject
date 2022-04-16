export class Course {
    courseID: string;
    courseName: string;
    instructorID: string;
    instructorEmail: string;
    instructorFirst: string;
    instructorLast: string;

    constructor(id: string, courseName: string, instructorID: string, instructorFirst: string, instructorLast: string, instructorEmail: string) {
        this.courseID = id;
        this.courseName = courseName;
        this.instructorID = instructorID;
        this.instructorFirst = instructorFirst;
        this.instructorLast = instructorLast;
        this.instructorEmail = instructorEmail;
    }
}
