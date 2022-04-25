import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.css', '../../../src/assets/CSS/templatemo-edu-meeting.css']
})
export class NavMenuComponent implements OnInit{
  accessLevel: any;
  id: any;
  isFaculty: any;
  constructor(private route: ActivatedRoute) {

  }

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.accessLevel = params.get('accessLevel');
      this.id = params.get('id');
    });
    if(this.accessLevel === 'faculty') {
      this.isFaculty = true;
    } else {
      this.isFaculty = false;
    }
  }
}
