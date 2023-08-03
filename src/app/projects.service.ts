import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Project } from './project';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) {
    debugger;
   }

  getAllProjects() : Observable<Project[]>{
    debugger;
    return this.httpClient.get<Project[]>("/api/projects", {responseType: "json"})
    //RxJS Map
    .pipe(map(
      (data:Project[])=>{
        for(let i=0;i<data.length;i++)
        {
          data[i].teamSize=data[i].teamSize * 100;
        }

        return data;
      }
    ));
  }

  getProjectById() : Observable<Project>{
    return this.httpClient.get<Project>("/api/projects", {responseType: "json"});
  }

  insertProject(newProject:Project): Observable<Project>{
    return this.httpClient.post<Project>("/api/projects", newProject, {responseType: "json"});
  }

  updateProject(existingProject:Project): Observable<Project>{
    return this.httpClient.put<Project>("/api/projects", existingProject, {responseType: "json"});
  }

  deleteProject(projectId: number): Observable<string>{
    return this.httpClient.delete<string>("/api/projects?ProjectId=" + projectId);
  }

  searchProjects(searchBy: string, searchText: string): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>("/api/projects/search/" + searchBy + "/" + searchText, { responseType: "json" });
  }

}
