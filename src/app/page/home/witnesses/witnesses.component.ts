import {Component, OnInit} from '@angular/core';
import {WitnessesService} from '../../../services/witnesses/witnesses.service';
import {ScreenWidthService} from "../../../services/screen-width/screen-width.service";

@Component({
  selector: 'app-index-witnesses',
  templateUrl: './witnesses.component.html',
  styleUrls: ['./witnesses.component.css'],
})
export class WitnessesComponent implements OnInit
{
  witnesses: any[] = [];
  isLargeScreen: boolean = true;

  constructor(private screenWidthService: ScreenWidthService, private witnessesService: WitnessesService)
  {
    this.screenWidthService.isLargeScreen$.subscribe(isLargeScreen =>
    {
      this.isLargeScreen = isLargeScreen;
    });
  }

  ngOnInit()
  {
    this.witnessesService.getWitnesses().subscribe((data: any[]) =>
    {
      this.witnesses = this.shuffle(data).slice(0, 4);

      console.log(this.witnesses);
    });
  }

  shuffle(anyArray: any[]): any[]
  {
    let currentIndex = anyArray.length,
      temporaryValue,
      randomIndex;

    while (currentIndex !== 0)
    {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = anyArray[currentIndex];
      anyArray[currentIndex] = anyArray[randomIndex];
      anyArray[randomIndex] = temporaryValue;
    }

    return anyArray;
  }
}
