import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../../src/assets/CSS/templatemo-edu-meeting.css']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    console.log("passed value: " );
  }
}
