import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CaseStudyService
{

  apiURL = 'https://localhost:8000/api/case_study/';

  constructor(private http: HttpClient)
  {
  }

  getAllCaseStudyVideo()
  {
    return this.http.get<any>(this.apiURL);
  }

}
