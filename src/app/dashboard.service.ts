import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService 
{
  // constructor() { }
  getTeamMembersSummary(): any[]
  {
    var TeamMembersSummary = [
      { Region: 'East', TeamMembersCount: 4, TemporarilyUnavailableMembers: 2 },
      { Region: 'West', TeamMembersCount: 2, TemporarilyUnavailableMembers: 1 },
      {
        Region: 'North',
        TeamMembersCount: 3,
        TemporarilyUnavailableMembers: 1,
      },
      {
        Region: 'South',
        TeamMembersCount: 2,
        TemporarilyUnavailableMembers: 1,
      },
    ];

    return TeamMembersSummary;
  }
}
