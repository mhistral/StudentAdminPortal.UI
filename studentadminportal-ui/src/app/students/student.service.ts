import { AddStudentRequest } from './../models/api-models/add-student-request.model';
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
    const updateStudentRequest: UpdateStudentRequest = {
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
      updateStudentRequest
    );
  }

  // the return type of this student will be observable with of type Student
  deleteStudent(studentId: string): Observable<Student> {
    return this.httpsClient.delete<Student>(
      this.baseApiUrl + '/students/' + studentId
    );
  }

  /**
   * this will receive an object request model of type student
   * @param studentRequest
   * @returns this will return Observable of type Student
   */

  addStudent(studentRequest: Student): Observable<Student> {
    //destination
    const addStudentRequest: AddStudentRequest = {
      firstName: studentRequest.firstName,
      lastName: studentRequest.lastName,
      dateOfBirth: studentRequest.dateOfBirth,
      email: studentRequest.email,
      mobile: studentRequest.mobile,
      genderId: studentRequest.genderId,
      physicalAddress: studentRequest.address.physicalAddress,
      postalAddress: studentRequest.address.postalAddress,
    };

    //in return we are getting a response type of Student Class which is of API Student
    return this.httpsClient.post<Student>(
      this.baseApiUrl + '/students/add',
      addStudentRequest
    );
  }
}
