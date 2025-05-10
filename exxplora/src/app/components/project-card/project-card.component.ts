import { ProjectService } from './../../services/project.service';
import { Component, OnInit } from '@angular/core';
import { ProjectInfo } from '../../interfaces/project-info';
import { MessageService } from 'primeng/api';
import { DomainService } from '../../services/domain.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
  providers: [MessageService]
})
export class ProjectCardComponent implements OnInit {
  projects: ProjectInfo[] = []

  constructor(private projectService: ProjectService, private messageService: MessageService) {}

  ngOnInit() {
    this.projectService.getAllProject().subscribe(
      res => {
        if(!res.IsError) {
          this.projects = res.Data.reverse();
          console.log(this.projects);
        }
        this.messageService.add({ severity: 'error', summary: 'Project fetch failed', detail: "Failed to fetch project" });
      },
      err => {
        this.messageService.add({ severity: 'error', summary: 'Server Error', detail: "Failed to connect with the server" });
      }
    )
  }
}
