import {Component} from '@angular/core';
import {ScreenWidthService} from "../../services/screen-width/screen-width.service";

@Component({
  selector: 'app-reseaux',
  templateUrl: './reseaux.component.html',
  styleUrls: ['./reseaux.component.css']
})
export class ReseauxComponent
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
