import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-generator-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  constructor() {
    console.log('about-me compnonent constructed');
  }

  ngOnInit(): void {
    console.log('about-me compnonent inited');
  }
}
