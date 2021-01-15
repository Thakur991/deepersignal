import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  ROOT_URL = environment.ROOT_URL;


  login(data) {
    console.log(this.ROOT_URL, "his.ROOT_URL")
    return this.http.post<any>(`${this.ROOT_URL}/api/login`, data);
  }

  getListsOfUser() {
    return this.http.get<any>(`${this.ROOT_URL}/api/users`);
  }

  getGraphsData(id) {
    return this.http.get<any>(`${this.ROOT_URL}/api/userassessment/graph?id=${id}`);
  }

  getUserInfo() {
    return this.http.get<any>(`${this.ROOT_URL}/api/userassessments`);
  }
  
}
