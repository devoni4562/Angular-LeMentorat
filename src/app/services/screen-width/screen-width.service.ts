import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ScreenWidthService
{
    private isLargeScreenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(window.innerWidth >= 1100);
    public isLargeScreen$: Observable<boolean> = this.isLargeScreenSubject.asObservable();

    constructor()
    {
        window.addEventListener('resize', () =>
        {
            this.isLargeScreenSubject.next(window.innerWidth >= 1100);
        });
    }

}
