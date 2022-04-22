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
  // private test: Student = new Student("test");
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

  deleteCourse(selectedItem: any): void {
    this.courseS.deleteCourse(selectedItem.courseId);
    window.location.reload();
  }
  
  updateCourse(selectedCourse: any, courseId: string, courseName: string, courseInsID: string, courseInsF: string, courseInsL: string, courseInsEm: string): void {
    let updatedCourse = new Course(courseId, courseName, courseInsID, courseInsF, courseInsL, courseInsEm);
    let holder: any;
    this.courseS.updateCourse(selectedCourse.courseId, updatedCourse).subscribe((res: any) => {holder = res;});
    window.location.reload();
  }

  deleteProf(selectedItem: any): void {
    this.instructorS.deleteInstructor(selectedItem.id);
    window.location.reload();
  }

  updateProf(selectProf: any, id: string, firstName: string, lastName: string, email: string, position: string, major: string): void {
    let updatedProf = new Instructor(id, firstName, lastName, email, position, major);
    this.instructorS.updateInstructor(selectProf.id, updatedProf);
    window.location.reload();
  }

  deleteStu(selectedItem: any): void {
    this.studentS.deleteStudent(selectedItem.studentId);
    window.location.reload();
  }

  updateStu(selectedStu: any, id: string, first: string, last: string, email: string, major: string): void {
    let updatedStu = new Student(id, first, last, email, major);
    this.studentS.updateStudent(selectedStu.studentId, updatedStu);
    window.location.reload();
  }

}
