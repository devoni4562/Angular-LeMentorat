import {Component, OnInit} from '@angular/core';
import {MentorService} from '../../../services/mentors/mentor.service';
import {ScreenWidthService} from "../../../services/screen-width/screen-width.service";

@Component({
  selector: 'app-index-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css'],
})
export class MentorsComponent implements OnInit
{
  mentors: any[] = [];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '',
    nextArrow: '',
    dots: true,
  };
  isLargeScreen: boolean = true;

  constructor(private mentorService: MentorService, private screenWidthService: ScreenWidthService)
  {
    this.screenWidthService.isLargeScreen$.subscribe(isLargeScreen =>
    {
      this.isLargeScreen = isLargeScreen;
    });
  }

  ngOnInit()
  {
    this.mentorService.getMentors().subscribe((data) =>
    {
      this.mentors = data;
    });
  }
}
