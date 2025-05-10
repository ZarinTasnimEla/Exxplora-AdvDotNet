import { Injectable } from '@angular/core';
import { ApiResponse } from '../interfaces/api-response';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetInfo } from '../interfaces/get-info';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  getUserData() : Observable<ApiResponse<GetInfo>> {
    return this.http.get<ApiResponse<GetInfo>>(environment.API_ENDPOINT + "user")
  }
}
