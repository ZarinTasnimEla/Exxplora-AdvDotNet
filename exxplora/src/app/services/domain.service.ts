import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../interfaces/api-response';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Domain } from '../interfaces/domain';
import { ProjectInfo } from '../interfaces/project-info';

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  constructor(private http: HttpClient) { }


  getAllDomains() : Observable<ApiResponse<Domain[]>> {
    return this.http.get<ApiResponse<Domain[]>>(environment.API_ENDPOINT + "domain")
  }

  getProjectsCountByDomainId(id: number) : Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(environment.API_ENDPOINT + "domain/projects/count/" + id)
  }

}
