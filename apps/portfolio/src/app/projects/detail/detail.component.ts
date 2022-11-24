import { Component, Input, OnInit } from '@angular/core';
import { Project } from '@portfolio-generator/api-interfaces';

@Component({
  selector: 'portfolio-generator-project-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  styleLeft: any;
  styleTop: any;

  constructor() {
    console.log('projects detail constructed ...');
  }

  @Input() project?: Project;

  ngOnInit(): void {
    console.log('projects detail inited ...');
  }
}
