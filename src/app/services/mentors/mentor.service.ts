import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MentorService
{
  private apiUrl = 'https://localhost:8000/api/members/mentors';

  constructor(private http: HttpClient)
  {
  }

  getMentors()
  {
    return this.http.get<any[]>(this.apiUrl);
  }
}
