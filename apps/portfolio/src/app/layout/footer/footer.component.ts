import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-generator-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {
    console.log('footer component constructed');
  }

  ngOnInit(): void {
    console.log('footer component inited');
  }
}
