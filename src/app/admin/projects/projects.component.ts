import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';
import { ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})

export class ProjectsComponent implements OnInit {
  projects!: Project[];
  newProject: Project = new Project();
  constructor(private projectService: ProjectsService){
  }

  ngOnInit(){
    debugger;
    this.projectService.getAllProjects().subscribe(
      (response:Project[]) => {
        this.projects = response;
      }
    );
  }

  onSaveClick(){
    this.projectService.insertProject(this.newProject)
    .subscribe((response)=>{
      this.projects.push(this.newProject);
    }, (errors)=>{
      console.log(errors);
    });
  }
}
