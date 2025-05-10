import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../interfaces/api-response';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Signin } from '../interfaces/signin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private readonly tokenKey: string = "JwtAccessToken"

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  signin(signin: Signin) : Observable<ApiResponse<string>>{
    return this.http.post<ApiResponse<string>>(environment.API_ENDPOINT + "authenticate", signin);
  }


}
