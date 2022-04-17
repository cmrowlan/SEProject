import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseService } from '../data/course.service';
import { InstructorService } from '../data/instructor.service';
import { StudentService } from '../data/student.service';
import { OnInit } from '@angular/core';
import { Course } from '../data/models/course';
import { Instructor } from '../data/models/instructor';
import { Student } from '../data/models/student';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['../../../src/assets/CSS/templatemo-edu-meeting.css'],
})
export class FetchDataComponent implements OnInit{
  studentsArray: any[] = [];
  professorArray: any[] = [];
  courseArray: any[] = [];

  constructor (private courseS: CourseService, private instructorS: InstructorService, private studentS: StudentService) {

  }

  ngOnInit(): void {
    this.courseS.getCourses().subscribe((res: any[]) => 
      {this.courseArray = res;});
    console.log("after get courses");
    this.instructorS.getIntructors().subscribe((res2: any[]) => {
      this.professorArray = res2;
    })
    console.log("after get instructors");
    this.studentS.getStudents().subscribe((res3: any[]) => {
      this.studentsArray = res3;
    })
    console.log("after get students");
  }
  
}
