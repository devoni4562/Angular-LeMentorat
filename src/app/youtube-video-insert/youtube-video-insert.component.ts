import {Component, Input} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-youtube-video-insert',
  templateUrl: './youtube-video-insert.component.html',
  styleUrls: ['./youtube-video-insert.component.css']
})
export class YoutubeVideoInsertComponent
{
  @Input() link: string = '';
  @Input() id: string = '';
  @Input() title: string = '';
  sanitizedLink: any;

  constructor(private sanitizer: DomSanitizer)
  {
  }

  sanitezeUrl()
  {
    this.sanitizedLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.link);

    return this.sanitizedLink;
  }

}
