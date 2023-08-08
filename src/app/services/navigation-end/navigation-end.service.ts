import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavigationEndService
{

  private navigationEndSubject = new Subject<NavigationEnd>();

  constructor(private router: Router)
  {
    this.router.events.subscribe((event) =>
    {
      if (event instanceof NavigationEnd)
      {
        this.navigationEndSubject.next(event);
      }
    });
  }

  getNavigationEnd(): Observable<NavigationEnd>
  {
    return this.navigationEndSubject.asObservable();
  }

}
