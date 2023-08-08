import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WitnessesService
{
  private apiUrl = 'https://localhost:8000/api/members/witnesses';

  constructor(private http: HttpClient)
  {
  }

  getWitnesses()
  {
    return this.http.get<any[]>(this.apiUrl);
  }
}
