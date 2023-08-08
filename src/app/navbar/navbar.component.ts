import {Component, OnDestroy, OnInit} from '@angular/core';
import {ScreenWidthService} from "../services/screen-width/screen-width.service";
import {NavigationEndService} from "../services/navigation-end/navigation-end.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy
{

  burgerToggle = false;
  isLargedScreen = false;
  private navigationEndSubscription!: Subscription;

  constructor(private screenWidthService: ScreenWidthService, private navigationEndService: NavigationEndService)
  {
  }


  ngOnInit()
  {
    this.navigationEndSubscription = this.navigationEndService
      .getNavigationEnd()
      .subscribe((event) =>
      {
        if (this.burgerToggle)
        {
          this.burgerToggle = false;
        }
      });


    this.screenWidthService.isLargeScreen$.subscribe((isLargeScreen) =>
    {
      this.isLargedScreen = isLargeScreen;

      if (this.isLargedScreen && this.burgerToggle)
      {
        this.toggleNavbar();
      }
    });
  }

  ngOnDestroy()
  {
    this.navigationEndSubscription.unsubscribe();
  }

  toggleNavbar()
  {

    this.burgerToggle = !this.burgerToggle;
    console.log(this.burgerToggle);
  }

}
