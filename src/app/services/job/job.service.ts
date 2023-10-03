import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JobService
{

  apiURL = 'https://api-le-mentorat-fabdab54a40e.herokuapp.com/api/role/';

  constructor(private http: HttpClient)
  {
  }

  getAllJobs()
  {
    return this.http.get<any>(this.apiURL);
  }

  getOneJob(id: number)
  {
    return this.http.get<any>(this.apiURL + id);
  }
}
