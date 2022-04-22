import { Component, OnInit } from '@angular/core';
import { Student } from '../data/models/student';
import { StudentService } from '../data/student.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {

    studentInfo: any = {};
    students: Student[] = [];

  constructor(private studentS: StudentService) { }

    ngOnInit(): void {
        this.getStudents();
    }

    // Benjamin Bowen: submit student details to make a new student
    submit(): void {
        console.log("CREATING STUDENT");
        console.log("studentID: " + this.studentInfo.studentID);
        console.log("firstName: " + this.studentInfo.firstName);
        console.log("lastName: " + this.studentInfo.lastName);
        console.log("email: " + this.studentInfo.email);
        console.log("major: " + this.studentInfo.major);

        const student = {
            studentID: this.studentInfo.studentID,
            firstName: this.studentInfo.firstName,
            lastName: this.studentInfo.lastName,
            email: this.studentInfo.email,
            major: this.studentInfo.major,
        };

        this.studentS.postStudent(student).subscribe(res => {});
    }

    // Benjamin Bowen: update student details based on ID
    update(): void {
        console.log("UPDATING STUDENT BY ID");
        console.log("studentID: " + this.studentInfo.studentID);
        console.log("firstName: " + this.studentInfo.firstName);
        console.log("lastName: " + this.studentInfo.lastName);
        console.log("email: " + this.studentInfo.email);
        console.log("major: " + this.studentInfo.major);

        const student = {
            studentID: this.studentInfo.studentID,
            firstName: this.studentInfo.firstName,
            lastName: this.studentInfo.lastName,
            email: this.studentInfo.email,
            major: this.studentInfo.major,
        };

        this.studentS.updateStudent(student.studentID, student).subscribe(res => {});
    }

    // Benjamin Bowen: delete student by ID
    delete(): void {
        console.log("DELETING STUDENT BY ID");
        console.log("studentID: " + this.studentInfo.studentID);
        console.log("firstName: " + this.studentInfo.firstName);
        console.log("lastName: " + this.studentInfo.lastName);
        console.log("email: " + this.studentInfo.email);
        console.log("major: " + this.studentInfo.major);

        const student = {
            studentID: this.studentInfo.studentID,
            firstName: this.studentInfo.firstName,
            lastName: this.studentInfo.lastName,
            email: this.studentInfo.email,
            major: this.studentInfo.major,
        };

        this.studentS.deleteStudent(student.studentID).subscribe(res => { });
    }

    // Benjamin Bowen: get all students
    getStudents(): void {
        this.studentS.getStudents().subscribe(students => this.students = students);
    }

    // TODO - Benjamin Bowen: get a specific student by ID
}
