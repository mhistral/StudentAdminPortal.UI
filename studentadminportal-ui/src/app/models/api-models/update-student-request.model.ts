// these are the fields that are granted to be changed/updated
export interface UpdateStudentRequest {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  mobile: number;
  genderId: string;
  physicalAddress: string;
  postalAddress: string;
}
