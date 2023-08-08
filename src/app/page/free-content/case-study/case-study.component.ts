import {Component, OnInit} from '@angular/core';
import {CaseStudyService} from "../../../services/case-study/case-study.service";
import {ScreenWidthService} from "../../../services/screen-width/screen-width.service";

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.css']
})
export class CaseStudyComponent implements OnInit
{

  videoCaseStudy: any[] = [];
  videoGroups: any[] = [];
  isLargeScreen: boolean = false;

  constructor(private caseStudyService: CaseStudyService, private screenWidthService: ScreenWidthService)
  {

  }

  ngOnInit()
  {
    this.caseStudyService.getAllCaseStudyVideo().subscribe((data: any[]) =>
    {

      for (let i = 0; i < data.length; i++)
      {
        const video = data.slice(i, i + 1);
        this.videoCaseStudy.push(video);
      }

      for (let i = 0; i < data.length; i += 2)
      {
        const group = data.slice(i, i + 2);
        this.videoGroups.push(group);
      }

      console.log(this.videoGroups);

    });

    this.screenWidthService.isLargeScreen$.subscribe((isLargeScreen) =>
    {
      this.isLargeScreen = isLargeScreen;
    });

  }

}
