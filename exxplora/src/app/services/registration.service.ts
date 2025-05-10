import { Injectable } from '@angular/core';
import { ApiResponse } from '../interfaces/api-response';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { RegistrationInfo } from '../interfaces/registrationInfo';

export const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type" : "multipart/form-data",
  }),
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  registerUser(registrationInfo: RegistrationInfo) : Observable<ApiResponse<RegistrationInfo>> {
    return this.http.post<ApiResponse<RegistrationInfo>>(environment.API_ENDPOINT + "registration/user", registrationInfo)
  }

  isEmailExist(email: string) : Observable<ApiResponse<boolean>> {
    return this.http.get<ApiResponse<boolean>>(environment.API_ENDPOINT + `registration/check-email-existance?email=${email}`)
  }
}
