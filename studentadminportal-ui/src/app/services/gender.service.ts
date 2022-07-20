import { Observable } from 'rxjs';
import { Gender } from './../models/ui.models/gender.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// this is like the file being called by the ajax
export class GenderService {

  private baseApiUrl = "https://localhost:44328"

  constructor(private HttpClient: HttpClient) { }

  getGenderList(): Observable<Gender[]> {
    return this.HttpClient.get<Gender[]>(this.baseApiUrl + '/genders');
  }
}
