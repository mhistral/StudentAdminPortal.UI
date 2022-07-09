import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseApiUrl = "https://localhost:44328"

  constructor(private httpsClient: HttpClient) { }

  getStudent(): Observable<any> {
    return this.httpsClient.get<any>(this.baseApiUrl + '/Students');
  }
}
