import {Component, OnInit} from '@angular/core';
import {ScreenWidthService} from "../../../../services/screen-width/screen-width.service";

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.css']
})
export class ArticleContentComponent implements OnInit
{
  isLargeScreen: boolean = false;

  constructor(private screenWidthService: ScreenWidthService)
  {
  }

  ngOnInit()
  {
    this.screenWidthService.isLargeScreen$.subscribe((isLargeScreen) =>
    {
      this.isLargeScreen = isLargeScreen;
    });
  }


}
