import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})

export class EditProjectComponent {

  @Input() selectedProject;

  @Output() doneSender = new EventEmitter();
  constructor(private ps: ProjectService) { }

  editSubmit(){
    this.doneSender.emit()
    console.log(this.selectedProject)
  }

}
