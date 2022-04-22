import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstructorService } from '../data/instructor.service';

@Component({
  selector: 'app-faculty-login',
  templateUrl: './faculty-login.component.html',
  styleUrls: ['./faculty-login.component.css']
})
export class FacultyLoginComponent implements OnInit {
    userLogin: any;
    logInfo: any = {};
    constructor(private rout: Router, private inService: InstructorService) { }

    ngOnInit(): void {

  }

  submit() {
    this.rout.navigateByUrl('/home/faculty');
    // this.checkForUser();
  }

  async checkForUser() {
    this.userLogin = await this.inService.getInstructorByID(this.logInfo.username).toPromise();
    if (this.userLogin != null) {
      console.log(this.userLogin);
      this.rout.navigateByUrl('/home/faculty');
    } else if (this.userLogin == null) {
      alert("invalid login");
    }
  }
}
