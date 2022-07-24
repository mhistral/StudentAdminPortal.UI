import { UpdateStudentRequest } from './../models/api-models/update-student-request.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/api-models/student.mode';

@Injectable({
  providedIn: 'root',
})

// this is where we call the API in visual studio
// this is like the file being called by the ajax
export class StudentService {
  private baseApiUrl = 'https://localhost:44328';

  constructor(private httpsClient: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.httpsClient.get<Student[]>(this.baseApiUrl + '/students');
  }

  getStudent(studentId: string): Observable<Student> {
    return this.httpsClient.get<Student>(
      this.baseApiUrl + '/students/' + studentId
    );
  }

  updateStudent(
    studentId: string,
    studentRequest: Student
  ): Observable<Student> {
    const UpdateStudentRequest: UpdateStudentRequest = {
      firstName: studentRequest.firstName,
      lastName: studentRequest.lastName,
      dateOfBirth: studentRequest.dateOfBirth,
      email: studentRequest.email,
      mobile: studentRequest.mobile,
      genderId: studentRequest.genderId,
      physicalAddress: studentRequest.address.physicalAddress,
      postalAddress: studentRequest.address.postalAddress,
    };

    // return a type of student
    return this.httpsClient.put<Student>(
      this.baseApiUrl + '/students/' + studentId,
      UpdateStudentRequest
    );
  }
}
