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
    this.checkForUser();
  }

  faculty() {
    this.rout.navigateByUrl('/facultyLogin', );
  }

  async checkForUser() {
    this.userLogin = await this.stud.getStudentByID(this.logInfo.username).toPromise();
    if (this.userLogin != null) {
      console.log(this.userLogin);
      this.rout.navigateByUrl('/home/student/' + this.logInfo.username);
    } else if (this.userLogin == null) {
      alert("invalid login");
    }
  }
}
