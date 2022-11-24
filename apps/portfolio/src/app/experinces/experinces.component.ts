import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-generator-experinces',
  templateUrl: './experinces.component.html',
  styleUrls: ['./experinces.component.scss'],
})
export class ExperincesComponent implements OnInit {
  constructor() {
    console.log('experinces list constructed...');
  }

  ngOnInit(): void {
    console.log('experinces list inited...');
  }
}
