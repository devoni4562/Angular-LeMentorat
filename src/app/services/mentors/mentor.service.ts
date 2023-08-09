import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MentorService
{
  private apiUrl = 'https://api-le-mentorat-fabdab54a40e.herokuapp.com/api/members/mentors';

  constructor(private http: HttpClient)
  {
  }

  getMentors()
  {
    return this.http.get<any[]>(this.apiUrl);
  }
}
