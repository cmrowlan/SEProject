import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CourseService } from '../data/course.service';
import { Enrollment } from '../data/models/enrollment';
import { StudentService } from '../data/student.service';
import { Course } from '../models/course';
import { Student } from '../models/student';

@Component({
  selector: 'app-new-enrollment',
  templateUrl: './new-enrollment.component.html',
  styleUrls: ['./new-enrollment.component.css']
})
export class NewEnrollmentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private studentS: StudentService, private courseS: CourseService) { }

  emptyStudent: Student = new Student()
  emptyCourse: Course = new Course()

  studentID: any
  courseID: any
  allCourses: any

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.studentID = params.get('id');
    });
    this.courseS.getCourses().subscribe(res => {
      this.allCourses = res
    })

  }
  enrollCourse(courseID: any) {
    const enroll = new Enrollment(courseID, this.studentID, this.emptyStudent, this.emptyCourse)
    console.log(enroll)

    this.studentS.postEnrollment(enroll).subscribe(res => { })
    alert(this.studentID + ' has been enrolled in: ' + courseID)
  }

}
