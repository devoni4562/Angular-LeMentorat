import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LiveConferenceService
{
  urlFile: string = 'https://api-le-mentorat-fabdab54a40e.herokuapp.com/getConferenceSubscribeLink';

  constructor(private http: HttpClient)
  {
  }

  getLink()
  {
    return this.http.get<any>(this.urlFile);
  }

}
