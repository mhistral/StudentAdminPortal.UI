import { Component, OnInit } from '@angular/core';
import { Student } from '../models/ui.models/student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  student: Student[] = []

  constructor(private studentsService: StudentService) { }

  ngOnInit(): void {
    // Fetch the Students
    this.studentsService.getStudent()
    .subscribe(
      (successResponse) => {
        this.student = successResponse;
      },
      (errorResponse) => {
        console.log(errorResponse)
      }
    );
  }

}
