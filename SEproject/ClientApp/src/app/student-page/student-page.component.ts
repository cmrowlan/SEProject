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

  constructor(private studentS: StudentService) { }

    ngOnInit(): void {
        
    }

    submit(): void {
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

}
