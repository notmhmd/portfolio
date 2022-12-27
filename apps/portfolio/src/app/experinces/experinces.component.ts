import { Component, OnInit } from '@angular/core';
import { Experience } from '@portfolio-generator/api-interfaces';
import * as moment from 'moment';

@Component({
  selector: 'portfolio-generator-experinces',
  templateUrl: './experinces.component.html',
  styleUrls: ['./experinces.component.scss'],
})
export class ExperincesComponent implements OnInit {
  experiences: Experience[] = [];
  constructor() {
    console.log('experinces list constructed...');
  }

  ngOnInit(): void {
    console.log('experinces list inited...');
    this.experiences = [
      {
        id: '1',
        description: 'Medan',
        name: 'x-',
        dateFrom: new Date('2022-05-01'),
        dateUntil: new Date(),
        position: 'Backend Engineer',
      },
      {
        id: '2',
        description: '',
        name: 'Ejjer',
        dateFrom: new Date('2021-07-01'),
        dateUntil: new Date(),
        position: 'Backend Engineer',
      },
      {
        id: '3',
        description: '',
        name: 'GLT',
        dateFrom: new Date('2022-03-01'),
        dateUntil: new Date(),
        position: 'Frontend Engineer',
      },
      {
        id: '4',
        description: '',
        name: 'Altkamul Altiqani',
        dateFrom: new Date('2020-01-01'),
        dateUntil: new Date('2022-03-01'),
        position: 'Frontend Engineer',
      },
      {
        id: '5',
        description: '',
        name: 'Horizon Omega',
        dateFrom: new Date('2019-01-01'),
        dateUntil: new Date('2020-01-01'),
        position: 'Junior Software Engineer',
      },
    ];
  }

  dateDiff(dateFrom: Date, dateUntil: Date) {
    const startDate = moment(dateFrom);
    const endDate = moment(dateUntil);

    const yearsDiff = startDate.diff(endDate, 'year');
    endDate.add(yearsDiff, 'years');

    const monthsDiff = startDate.diff(endDate, 'months');
    endDate.add(monthsDiff, 'months');

    if (monthsDiff == 0) return yearsDiff + ' years ';
    if (yearsDiff == 0) return monthsDiff + ' months ';
    return yearsDiff + ' years ' + monthsDiff + ' months ';
  }
}
