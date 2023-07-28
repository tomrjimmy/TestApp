import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AboutComponent } from './admin/about/about.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { WizardFinishedComponent } from './wizard-finished/wizard-finished.component';
import { ProjectsComponent } from './admin/projects/projects.component';

const routes: Routes = [
  {path: "", redirectTo: "dashboard", pathMatch:"full"},
  {path: "welcome", component: WelcomeComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "about", component: AboutComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "step-1", component: PersonalDetailsComponent},
  {path: "step-2", component: ContactDetailsComponent},
  {path: "step-3", component: SkillsComponent},
  {path: "step-4", component: WorkExperienceComponent},
  {path: "wizard-finished", component: WizardFinishedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
