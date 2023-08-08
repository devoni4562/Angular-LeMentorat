import {Component, HostListener, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit
{

  title = 'LeMentorat';

  constructor(private router: Router)
  {
  }

  ngOnInit()
  {
    this.router.events.subscribe((event) =>
    {
      if (event instanceof NavigationEnd)
      {
        window.scrollTo(0, 0);
      }
    });
  }
}
