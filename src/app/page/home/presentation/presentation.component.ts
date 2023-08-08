import {Component} from '@angular/core';
import {ScreenWidthService} from "../../../services/screen-width/screen-width.service";

@Component({
  selector: 'app-index-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
})
export class PresentationComponent
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
