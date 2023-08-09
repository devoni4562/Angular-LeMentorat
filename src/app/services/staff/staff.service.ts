import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StaffService
{

  private apiUrl = 'https://api-le-mentorat-fabdab54a40e.herokuapp.com/api/members/staff';

  constructor(private http: HttpClient)
  {
  }

  getStaff()
  {
    return this.http.get<any[]>(this.apiUrl);
  }
}
