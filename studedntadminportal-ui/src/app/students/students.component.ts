import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private studentsService: StudentService) { }

  ngOnInit(): void {
    // Fetch the Students
    this.studentsService.getStudent()
    .subscribe(
      (successResponse) => {
          console.log(successResponse[0].firstName)
          console.log(successResponse[0].lastName)
      },
      (errorResponse) => {
        console.log(errorResponse)
      }
    );
  }

}
