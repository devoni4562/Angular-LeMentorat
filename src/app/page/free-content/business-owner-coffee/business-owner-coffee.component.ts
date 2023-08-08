import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-business-owner-coffee',
  templateUrl: './business-owner-coffee.component.html',
  styleUrls: ['./business-owner-coffee.component.css']
})
export class BusinessOwnerCoffeeComponent implements OnInit
{
  link: string = '';
  date: string = '';
  place: string = '';
  urlFile: string = 'https://localhost:8000/getCoffeeSubscribeInfo';

  constructor(private http: HttpClient)
  {
  }

  ngOnInit()
  {
    this.http.get<any>(this.urlFile).subscribe((data) =>
    {
      this.link = data['link'];
      this.date = data['date'];
      this.place = data['place'];
    });
  }
}
