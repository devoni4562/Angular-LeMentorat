import {Component, OnInit} from '@angular/core';
import {ScreenWidthService} from "../../../../services/screen-width/screen-width.service";

@Component({
    selector: 'app-method-content',
    templateUrl: './method-content.component.html',
    styleUrls: ['./method-content.component.css']
})
export class MethodContentComponent implements OnInit
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
