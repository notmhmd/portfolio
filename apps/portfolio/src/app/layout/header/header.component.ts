import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-generator-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {
    console.log('header constructed ...');
  }

  ngOnInit(): void {
    console.log('init header ...');
  }
}
