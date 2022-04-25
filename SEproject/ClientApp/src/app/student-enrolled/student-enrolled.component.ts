import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { StudentService } from '../data/student.service';
import { CourseService } from '../data/course.service';
import { Course } from '../data/models/course';

@Component({
  selector: 'app-student-enrolled',
  templateUrl: './student-enrolled.component.html',
  styleUrls: ['./student-enrolled.component.css']
})
export class StudentEnrolledComponent implements OnInit {
  studentId: any;
  classes: any[] = [];
  course: any;
  displayCourse: any;
  constructor(private route: ActivatedRoute, private studentS: StudentService, private courseS: CourseService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.studentId = params.get('id');
    });
    this.studentS.getEnrollment(this.studentId).subscribe((res: any[]) => {
      this.classes = res;
    })
  }

  async courseInfo(course: any) {
    this.course = await this.courseS.getCourseByID(course.courseId).toPromise();
    this.displayCourse = this.course;
    console.log(this.course.courseId);
  }

}