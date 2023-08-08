import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-live-conference',
  templateUrl: './live-conference.component.html',
  styleUrls: ['./live-conference.component.css']
})
export class LiveConferenceComponent implements OnInit
{
  link: string = '';
  urlFile: string = 'https://localhost:8000/getConferenceSubscribeLink';

  constructor(private http: HttpClient)
  {
  }

  ngOnInit()
  {
    this.http.get<any>(this.urlFile).subscribe(link =>
    {
      this.link = link;
    });
  }
}
