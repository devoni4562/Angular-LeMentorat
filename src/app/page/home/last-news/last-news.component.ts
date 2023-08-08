import {Component} from '@angular/core';
import {ScreenWidthService} from "../../../services/screen-width/screen-width.service";

@Component({
  selector: 'app-index-last-news',
  templateUrl: './last-news.component.html',
  styleUrls: ['./last-news.component.css'],
})
export class LastNewsComponent
{
  isLargeScreen: boolean = true;

  constructor(private screenWidthService: ScreenWidthService)
  {
    this.screenWidthService.isLargeScreen$.subscribe(isLargeScreen =>
    {
      this.isLargeScreen = isLargeScreen;
    });
  }

}
