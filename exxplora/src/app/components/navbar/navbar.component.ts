import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  constructor(private authService: AuthService, private router: Router) {}

  isLoggedin : boolean = false;

  ngOnInit(): void {
    let token = this.authService.getToken()
    if(token) this.isLoggedin = true;
    else this.isLoggedin = false;
  }

  logout() {
    this.authService.removeToken();
    this.router.navigate(['sign-in'])
  }
}
