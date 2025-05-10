import { Component, Input, OnInit } from '@angular/core';
import { DomainService } from '../../services/domain.service';

@Component({
  selector: 'app-domain-card',
  templateUrl: './domain-card.component.html',
  styleUrl: './domain-card.component.css'
})
export class DomainCardComponent implements OnInit{
  constructor(private domainService: DomainService){}

  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() backgroundImage: string = '';
  projectCount: number = 0;

  ngOnInit(): void {
    this.domainService.getProjectsCountByDomainId(this.id).subscribe(
      res => {
        this.projectCount = res.Data
      }
    )
  }
}
