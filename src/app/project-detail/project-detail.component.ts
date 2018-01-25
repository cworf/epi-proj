import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  projectId: string;
  projectToDisplay;
  currentlyEditing: Project;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.projectId = urlParameters['id'];
   });
   this.projectService.getProjectById(this.projectId).subscribe(data => {
     console.log(data);
     this.projectToDisplay = data;
   });

  }

  activateEdit(project){
    this.currentlyEditing = project;
    console.log(this.currentlyEditing)
  }

  clearEdit(){
    this.currentlyEditing = null;
  }
}
