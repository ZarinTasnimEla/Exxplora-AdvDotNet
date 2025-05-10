import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { GetInfo } from '../../interfaces/get-info';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css',
  providers: [MessageService]
})
export class ProfileCardComponent implements OnInit {
  constructor (private userService:  UserService, private messageService: MessageService) {}

  userDetails: GetInfo = {
    Id: 0, 
    FirstName: '',
    LastName: '',
    OrganizationName: '',
    Location: '',
    ProfilePicUrl: '',
    CoverPicUrl: ''
  };


  ngOnInit(): void {
    this.userService.getUserData().subscribe(
      res => {
        console.log(res);
        if(!res.IsError){
          this.userDetails = res.Data;
        }
        else this.messageService.add({ severity: 'error', summary: 'Server Error', detail: "Failed to load data" });
      },
      err => {
        this.messageService.add({ severity: 'error', summary: 'Server Error', detail: "Failed to load data" });
      }
    )
  } 
}
