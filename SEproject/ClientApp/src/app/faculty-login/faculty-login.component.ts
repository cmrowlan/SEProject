import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../data/course.service';

@Component({
  selector: 'app-faculty-login',
  templateUrl: './faculty-login.component.html',
  styleUrls: ['./faculty-login.component.css']
})
export class FacultyLoginComponent implements OnInit {

    logInfo: any = {};
    constructor(private rout: Router, private courseServ: CourseService) { }

    ngOnInit(): void {

  }

  submit() {
    console.log("username: " + this.logInfo.username);
    console.log("password: " + this.logInfo.password);
    this.rout.navigateByUrl('/home');
  }
}
