import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../../services/registration.service';
import { Signin } from '../../interfaces/signin';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  providers: [MessageService]
})
export class SignInComponent {

  user: Signin = {
    Email: '',
    Password: '',
  };

  constructor(
    private router: Router,
    private registrationService: RegistrationService,
    private authService: AuthService,
    private messageService: MessageService
  ) { }


  async handleSubmit(signInForm: any) {
    if (signInForm.valid) {

      this.authService.signin(this.user).subscribe(
        res => {
          if(res.IsError == false) {
            this.authService.setToken(res.Data);
            this.router.navigate(['/home']);
          }
          else this.messageService.add({ severity: 'error', summary: 'Invalid Credentials', detail: 'Please provide valid infomation' });
        },
        err => {
          this.messageService.add({ severity: 'error', summary: 'Fatal Error', detail: 'Failed to connect with server' });
        }
      )
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Invalid Inputs', detail: 'Please ensure all fields are filled correctly and passwords match' });
    }
  }
}
