import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { RemovePersonComponent } from './remove-person/remove-person.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ProjectIdeasComponent } from './project-ideas/project-ideas.component';
import { CompletedComponent } from './completed/completed.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    AddPersonComponent,
    RemovePersonComponent,
    AddProjectComponent,
    EditProjectComponent,
    ProjectIdeasComponent,
    CompletedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
