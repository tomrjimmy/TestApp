import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  Designation!: string;
  Username!: string;
  NoOfTeamMembers!: number;
  TotalCostOfAllProjects!: number;
  PendingTasks!: number;
  UpComingProjects!: number;
  ProjectCost!: number;
  CurrentExpenditure!: number;
  AvailableFunds!: number;
  TeamMembersSummary: any = [];
  TeamMembers: any = [];
  Clients!: string[];
  Projects!: string[];
  Years: number[] = [];
  ToDay: Date = new Date();

  constructor(private dashboardService:DashboardService)
  {

  }

  ngOnInit() {
    this.Designation = 'Lead';
    this.Username = 'Sameer';
    this.NoOfTeamMembers = 30;
    this.TotalCostOfAllProjects = 120;
    this.PendingTasks = 2;
    this.UpComingProjects = 0.2;
    this.ProjectCost = 54213;
    this.CurrentExpenditure = 123;
    this.AvailableFunds = 8080;
    this.ToDay = new Date();

    this.Clients = [
      'ABC Infotech Ltd.',
      'DEF Software Solutions',
      'GHI Industries',
    ];

    this.Projects = ['Project A', 'Project B', 'Project C', 'Project D'];

    for (var i = 2019; i >= 2010; i--) {
      this.Years.push(i);
    }

    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();
    // [
    //   { Region: 'East', TeamMembersCount: 4, TemporarilyUnavailableMembers: 2 },
    //   { Region: 'West', TeamMembersCount: 2, TemporarilyUnavailableMembers: 1 },
    //   {
    //     Region: 'North',
    //     TeamMembersCount: 3,
    //     TemporarilyUnavailableMembers: 1,
    //   },
    //   {
    //     Region: 'South',
    //     TeamMembersCount: 2,
    //     TemporarilyUnavailableMembers: 1,
    //   },
    // ];

    this.TeamMembers = [
      {
        Region: 'East',
        Members: [
          { ID: 1, Name: 'Miller', Status: 'Available' },
          { ID: 2, Name: 'John', Status: 'Busy' },
          { ID: 3, Name: 'Tom', Status: 'Available' },
          { ID: 4, Name: 'Maverick', Status: 'Busy' },
        ],
      },
      {
        Region: 'West',
        Members: [
          { ID: 1, Name: 'Fordy', Status: 'Available' },
          { ID: 2, Name: 'Millery', Status: 'Busy' },
        ],
      },
      {
        Region: 'North',
        Members: [
          { ID: 1, Name: 'Johna', Status: 'Available' },
          { ID: 2, Name: 'Toma', Status: 'Available' },
          { ID: 3, Name: 'Millera', Status: 'Busy' },
        ],
      },
      {
        Region: 'South',
        Members: [
          { ID: 1, Name: 'Johnu', Status: 'Busy' },
          { ID: 2, Name: 'Tomu', Status: 'Available' },
        ],
      },
    ];
  }

  onProjectChange($event: any)
  {
    if($event.target.innerHTML == "Project A"){
      this.ProjectCost = 12345;
      this.CurrentExpenditure = 123;
      this.AvailableFunds = 123456;
    }
    else if($event.target.innerHTML == "Project B"){
      this.ProjectCost = 67890;
      this.CurrentExpenditure = 678;
      this.AvailableFunds = 678910;
    }
    else if($event.target.innerHTML == "Project C"){
      this.ProjectCost = 12345;
      this.CurrentExpenditure = 123;
      this.AvailableFunds = 123456;
    }
    else if($event.target.innerHTML == "Project D"){
      this.ProjectCost = 67890;
      this.CurrentExpenditure = 678;
      this.AvailableFunds = 678910;
    }
  }
}
