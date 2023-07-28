import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { WizardFinishedComponent } from './wizard-finished/wizard-finished.component';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    ContactDetailsComponent,
    WelcomeComponent,
    SkillsComponent,
    WorkExperienceComponent,
    WizardFinishedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
