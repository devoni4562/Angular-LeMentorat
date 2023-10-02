import {Component, OnInit} from '@angular/core';
import {LiveConferenceService} from "../../../services/live-conference/live-conference.service";

@Component({
  selector: 'app-live-conference',
  templateUrl: './live-conference.component.html',
  styleUrls: ['./live-conference.component.css']
})
export class LiveConferenceComponent implements OnInit
{
  link: string = '';

  constructor(private liveConferenceService: LiveConferenceService)
  {
  }

  ngOnInit()
  {
    this.liveConferenceService.getLink().subscribe(link =>
    {
      this.link = link;
    });
  }
}
