import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Domain } from '../../interfaces/domain';
import { DomainService } from '../../services/domain.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements AfterViewInit, OnInit {
  @ViewChild('cardContainer') cardContainer!: ElementRef;

  constructor(
    private domainService: DomainService,
    private router: Router,
  ) {}

  toCreateProject() {
    this.router.navigate(['/create-project']);
  }

  backgroundImage:string = '../../assets/images/domaincard.png';

  domainCards: Domain[] = []

  ngAfterViewInit() {
    this.cardContainer.nativeElement.addEventListener('wheel', (event: WheelEvent) => {
      if (event.deltaY !== 0) {
        event.preventDefault();
        const scrollAmount = event.deltaY > 0 ? 100 : -100;
        this.cardContainer.nativeElement.scrollLeft += scrollAmount;
      }
    });
  }

  ngOnInit(): void {
    this.domainService.getAllDomains().subscribe(
      res => {
        if(!res.IsError){
          this.domainCards = res.Data;
          console.log(res.Data)
        }
      }
    )
  }
}
