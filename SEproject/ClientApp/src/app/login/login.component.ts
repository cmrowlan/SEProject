import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', 
  '../../../src/assets/CSS/templatemo-edu-meeting.css']
})
export class LoginComponent implements OnInit {
  logInfo: any = {};
  constructor(private rout: Router) { }

  ngOnInit(): void {
  }

  submit() {
    console.log("username: " + this.logInfo.username);
    console.log("password: " + this.logInfo.password);
    this.rout.navigateByUrl('/home');
  }
}
