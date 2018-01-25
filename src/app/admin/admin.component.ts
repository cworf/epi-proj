import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {

  constructor(private ps: ProjectService) { }

  ngOnInit() {
  }

  submitForm(title: string, creator: string, description: string, course: string){
    const newProject = new Project(title, creator, course, "Idea", description, [], "0");
    this.ps.addProject(newProject);
  }


}
