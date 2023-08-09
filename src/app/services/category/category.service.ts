import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService
{


  private apiUrl = 'https://api-le-mentorat-fabdab54a40e.herokuapp.com/api/category/';

  constructor(private http: HttpClient)
  {
  }

  getAllCategories()
  {
    return this.http.get<any>(this.apiUrl);
  }
}
