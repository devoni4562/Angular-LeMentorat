import {Component} from '@angular/core';
import {ScreenWidthService} from "../../../services/screen-width/screen-width.service";

@Component({
  selector: 'app-mentorat-method',
  templateUrl: './mentorat-method.component.html',
  styleUrls: ['./mentorat-method.component.css']
})
export class MentoratMethodComponent
{
  isLargeScreen: boolean = true;

  constructor(private screenWidthService: ScreenWidthService)
  {
    screenWidthService.isLargeScreen$.subscribe(isLargeScreen =>
    {
      this.isLargeScreen = isLargeScreen;
    });
  }
}
