import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService
{


  private apiUrl = 'https://localhost:8000/api/category/';

  constructor(private http: HttpClient)
  {
  }

  getAllCategories()
  {
    return this.http.get<any>(this.apiUrl);
  }
}
