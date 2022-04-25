import { Student } from "../../models/student";
import { Course } from "./course";

export class Enrollment {
    courseID: string;
    studentID: string;
    student: Student;
    course: Course;

  constructor(courseID: string, studentID: string, student: Student, course: Course) {
        this.courseID = courseID;
        this.studentID = studentID;
        this.student = student;
        this.course = course;
    }
}
