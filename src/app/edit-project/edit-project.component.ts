import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})

export class EditProjectComponent implements OnInit{

  @Input() selectedProject;
  @Output() doneSender = new EventEmitter();

  constructor(private ps: ProjectService, private router: Router) { }

  updateSubmit(project){
    this.ps.updateProject(project);
    this.doneSender.emit();
  }

  deleteProject(project){
    if(confirm("Are you sure you want to delete this project from the database?")){
      this.ps.deleteProject(project);
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
    console.log(this.selectedProject)
  }

}
