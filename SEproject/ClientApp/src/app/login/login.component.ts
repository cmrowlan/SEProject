import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { StudentService } from '../data/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', 
  '../../../src/assets/CSS/templatemo-edu-meeting.css']
})
export class LoginComponent implements OnInit {
  logInfo: any = {};
  userLogin: any;
  constructor(private rout: Router, private stud: StudentService) { }

  ngOnInit(): void {
  }

  submit() {
    this.rout.navigateByUrl('/home');

    // this.stud.getStudentByID(this.logInfo.username).subscribe((res: any) => {
    //   this.userLogin = res;
    // })
    // if (this.userLogin != null) {
    //   this.rout.navigateByUrl('/home', this.logInfo.username);
    // } else {
    //   alert("invalid login");
    // }
  }

  faculty() {
    this.rout.navigateByUrl('/facultyLogin');
  }
}
