import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { masterFirebaseConfig } from './api-keys'

@Injectable()
export class ProjectService {

  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
    console.log(this.projects)
  }

  getProjects(){
    return this.projects
  }

  getProjectById(projectId: string){
    return this.database.object('projects/' + projectId);
  }

}
