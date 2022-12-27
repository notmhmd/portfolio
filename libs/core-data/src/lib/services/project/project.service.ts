import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '@portfolio-generator/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private httpClient: HttpClient) {}

  getProjects() {
    return this.httpClient.get<Project[]>('');
  }
}
