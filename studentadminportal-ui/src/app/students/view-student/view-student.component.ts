import { MatSnackBar } from '@angular/material/snack-bar';
import { Gender } from './../../models/ui.models/gender.model';
import { GenderService } from './../../services/gender.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/ui.models/student.model';
import { StudentService } from '../student.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css'],
})
export class ViewStudentComponent implements OnInit {
  studentId: string | null | undefined;
  student: Student = {
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    mobile: 0,
    genderId: '',
    profileImageUrl: '',
    gender: {
      id: '',
      description: '',
    },
    address: {
      id: '',
      physicalAddress: '',
      postalAddress: '',
    },
  };

  isNewStudent = false;
  header = '';

  genderList: Gender[] = [];

  constructor(
    private readonly studentService: StudentService,
    private readonly route: ActivatedRoute,
    private readonly genderService: GenderService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.studentId = params.get('id');

      if (this.studentId) {
        // if the route contains the 'Add'

        if (this.studentId.toLowerCase() === 'Add'.toLowerCase()) {
          //-> new Student Functionality
          this.isNewStudent = true;
          this.header = 'Add New Student';
        } else {
          //-> exisiting student functionality
          this.isNewStudent = false;
          this.header = 'Edit Student';
        }

        this.studentService
          .getStudent(this.studentId)
          .subscribe((successResponse) => {
            // console.log(successResponse);
            this.student = successResponse;
          });

        /**
         * the file that is being called by this is the gender.services.ts
         * this is like an ajax
         * to use the connection, we need to subscribe
         */
        this.genderService.getGenderList().subscribe((successResponse) => {
          // console.log(successResponse);
          this.genderList = successResponse;
        });
      }
    });
  }

  // this part is where the ajax calles the API
  onUpdate(): void {
    // Call student service to update Student
    this.studentService.updateStudent(this.student.id, this.student).subscribe(
      (successResponse) => {
        console.log(successResponse);
        // show a notification
        this.snackbar.open('Student Saved Succesfully', undefined, {
          duration: 2000,
          verticalPosition: 'top',
        });
      },
      (error) => {
        // log or console
      }
    );
  }

  // this part is where the ajax calles the API
  onDelete(): void {
    // Call student service to delete Student
    this.studentService.deleteStudent(this.student.id).subscribe(
      (successResponse) => {
        // show a notification
        this.snackbar.open('Student Deleted Succesfully', undefined, {
          duration: 2000,
          verticalPosition: 'top',
        });

        setTimeout(() => {
          this.router.navigateByUrl('students');
        }, 2000);
      },
      (error) => {
        // log or console
      }
    );
  }

  // this part is where the ajax calles the API
  onAdd(): void {
    // Call student service to update Student
    this.studentService.updateStudent(this.student.id, this.student).subscribe(
      (successResponse) => {
        console.log(successResponse);
        // show a notification
        this.snackbar.open('Student Saved Succesfully', undefined, {
          duration: 2000,
          verticalPosition: 'top',
        });
      },
      (error) => {
        // log or console
      }
    );
  }
}
