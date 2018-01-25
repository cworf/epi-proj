import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { masterFirebaseConfig } from './api-keys';
import { Project } from './project.model';

@Injectable()
export class ProjectService {

  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects(){
    return this.projects
  }

  getProjectById(projectId: string){
    return this.database.object('projects/' + projectId);
  }

  addProject(newProject: Project){
    this.projects.push(newProject);
  }
}
