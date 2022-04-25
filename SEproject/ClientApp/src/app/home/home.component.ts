import { HttpParams } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../../src/assets/CSS/templatemo-edu-meeting.css']
})
export class HomeComponent implements OnInit{
  accessLevel: any;
  id: any;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.accessLevel = params.get('accessLevel');
      this.id = params.get('id');
    });
  }
}
