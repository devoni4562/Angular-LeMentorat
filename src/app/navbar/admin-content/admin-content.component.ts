import {Component, OnInit} from '@angular/core';
import {ScreenWidthService} from "../../services/screen-width/screen-width.service";

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.css']
})
export class AdminContentComponent implements OnInit
{
  isLargeScreen: boolean = false;
  artDropdown = false;

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

  artDropdownToggle()
  {
    this.artDropdown = !this.artDropdown;
  }
}
