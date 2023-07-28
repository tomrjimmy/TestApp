import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Project } from './project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) {
    debugger;
   }

  getAllProjects() : Observable<Project[]>{
    debugger;
    return this.httpClient.get<Project[]>("/api/projects");
  }

  insertProject(newProject:Project): Observable<Project>{
    return this.httpClient.post<Project>("api/projects", newProject);
  }

}
