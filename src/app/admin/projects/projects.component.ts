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
  editProject: Project = new Project();
  editIndex: number = null;
  deleteProject: Project = new Project();
  deleteIndex: number = null;
  searchBy: string = "ProjectName";
  searchText: string = "";

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
    this.projectService.insertProject(this.newProject).subscribe(
      (response)=>{
        var p: Project = new Project();
        p.projectId = response.projectId;
        p.projectName = response.projectName;
        p.startDate = response.startDate;
        p.teamSize = response.teamSize;
        this.projects.push(p);

        //clear textboxes
        this.newProject.projectId = null;
        this.newProject.projectName = null;
        this.newProject.startDate = null;
        this.newProject.teamSize = null;
    }, (error)=>{
      console.log(error);
    });
  }

  onEditClick(event: any, index: number){
    this.editProject.projectId = this.projects[index].projectId; 
    this.editProject.projectName = this.projects[index].projectName; 
    this.editProject.startDate = this.projects[index].startDate; 
    this.editProject.teamSize = this.projects[index].teamSize; 
    this.editIndex = index;
    console.log(this.projects[index].startDate);
    console.log(this.editProject.startDate);
  }

  onUpdateClick(){
    this.projectService.updateProject(this.editProject)
    .subscribe((response: Project)=> 
    {
      var p: Project = new Project();
      p.projectId = response.projectId;
      p.projectName = response.projectName;
      p.startDate = response.startDate;
      p.teamSize = response.teamSize;
      this.projects[this.editIndex] = p;

      //clear textboxes
      this.editProject.projectId = null;
      this.editProject.projectName = null;
      this.editProject.startDate = null;
      this.editProject.teamSize = null;
    },
    (error)=>
    {
      console.log(error);
    });
  }

  onDeleteClick(event, index:number){
    this.deleteIndex = index;
    this.deleteProject.projectId = this.projects[index].projectId;
    this.deleteProject.projectName = this.projects[index].projectName;
    this.deleteProject.startDate = this.projects[index].startDate;
    this.deleteProject.teamSize = this.projects[index].teamSize;
  }

  onDeleteConfirmClick(){
    this.projectService.deleteProject(this.deleteProject.projectId)
    .subscribe(
      (response)=>{
        this.projects.splice(this.deleteIndex,1);
        this.deleteProject.projectId = null;
        this.deleteProject.projectName = null;
        this.deleteProject.startDate = null;
        this.deleteProject.teamSize = null;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  onSearchClick()
  {
    this.projectService.searchProjects(this.searchBy, this.searchText).subscribe(
      (response: Project[])=>
      {
        this.projects = response;
      },
      (error)=> 
      {
        console.log(error);
      }
    );
  }
}
