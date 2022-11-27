import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-generator-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  constructor() {
    console.log('education comonent constructed');
  }

  ngOnInit(): void {
    console.log('education comonent inited');
  }
}
