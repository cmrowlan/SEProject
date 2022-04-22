import { HttpParams } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../../src/assets/CSS/templatemo-edu-meeting.css']
})
export class HomeComponent implements OnInit{
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    let accessLevel: string;
    this.route.queryParams.subscribe(params => {
      console.log(params);
    });
  }
}
