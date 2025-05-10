import { Injectable } from '@angular/core';
import { ApiResponse } from '../interfaces/api-response';
import { environment } from '../../environments/environment.development';
import { catchError, forkJoin, map, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ProfileSetup } from '../interfaces/profile-setup';
import { httpOptions } from './registration.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileSetupService {

  constructor(private http: HttpClient) { }

  setupProfileInfo(informations: ProfileSetup): Observable<ApiResponse<ProfileSetup>> {
    const { profile, cover, ...infos } = informations;

    return this.http.post<ApiResponse<ProfileSetup>> (environment.API_ENDPOINT + "user/setup", infos)
  }

  setupProfilePhoto(photo: File): Observable<ApiResponse<boolean>>{
    const formData = new FormData();
    formData.append('file', photo);
    
    return this.http.post<ApiResponse<boolean>> (environment.API_ENDPOINT + "user/upload-profile-picture", formData)
  }

  setupCoverPhoto(cover: File): Observable<ApiResponse<boolean>>{
    const formData = new FormData();
    formData.append('file', cover);
    
    return this.http.post<ApiResponse<boolean>> (environment.API_ENDPOINT + "user/upload-cover-photo", formData)
  }
}
