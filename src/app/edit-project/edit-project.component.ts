import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})

export class EditProjectComponent implements OnInit{

  @Input() selectedProject;
  @Output() doneSender = new EventEmitter();

  constructor(private ps: ProjectService) { }

  updateSubmit(project){
    this.ps.updateProject(project);
    this.doneSender.emit();
  }

  ngOnInit() {
    console.log(this.selectedProject)
  }

}
