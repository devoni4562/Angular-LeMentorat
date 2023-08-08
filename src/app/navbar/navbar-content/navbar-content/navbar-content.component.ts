import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../../services/authenticator/auth.service";
import {ScreenWidthService} from "../../../services/screen-width/screen-width.service";
import {NavigationEndService} from "../../../services/navigation-end/navigation-end.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-navbar-content',
  templateUrl: './navbar-content.component.html',
  styleUrls: ['./navbar-content.component.css']
})
export class NavbarContentComponent implements OnInit, OnDestroy
{
  mDropdown: boolean = false;
  fcDropdown: boolean = false;
  isLargeScreen: boolean = false;
  adminToggle: boolean = false;

  @Input() givenClass: string = '';

  authService: AuthService;
  private navigationEndSubscription!: Subscription;

  constructor(authService: AuthService, private navigationEndService: NavigationEndService,
              private screenWidthService: ScreenWidthService)
  {
    this.authService = authService;
  }

  ngOnInit()
  {
    this.navigationEndSubscription = this.navigationEndService
      .getNavigationEnd()
      .subscribe((event) =>
      {
        if (this.authService.isLoggedIn)
        {
          this.authService.resetInactivityTimeout();
          console.log('reset');
        }

        if (this.adminToggle)
        {
          this.adminToggle = false;
        }
      });


    this.screenWidthService.isLargeScreen$.subscribe((isLargeScreen) =>
    {
      this.isLargeScreen = isLargeScreen;
    });

  }

  ngOnDestroy()
  {
    this.navigationEndSubscription.unsubscribe();
  }

  toggleAdmin()
  {
    this.adminToggle = !this.adminToggle;
  }

}
