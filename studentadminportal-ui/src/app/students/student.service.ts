import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/api-models/student.mode';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseApiUrl = "https://localhost:44328"

  constructor(private httpsClient: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.httpsClient.get<Student[]>(this.baseApiUrl + '/students')
  }

  getStudent(studentId: string): Observable<Student> {
    return this.httpsClient.get<Student>(this.baseApiUrl + '/students/' + studentId)
  }
}
