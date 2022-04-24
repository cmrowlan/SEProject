export class Enrollment {
    courseID: string;
    studentID: string;
    student: string;
    course: string;

    constructor(courseID: string, studentID: string, student: string, course: string) {
        this.courseID = courseID;
        this.studentID = studentID;
        this.student = student;
        this.course = course;
    }
}
