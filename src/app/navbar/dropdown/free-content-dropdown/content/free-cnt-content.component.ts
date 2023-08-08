import {Component, OnInit} from '@angular/core';
import {ScreenWidthService} from "../../../../services/screen-width/screen-width.service";

@Component({
    selector: 'app-free-cnt-content',
    templateUrl: './free-cnt-content.component.html',
    styleUrls: ['./free-cnt-content.component.css']
})
export class FreeCntContentComponent implements OnInit
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
