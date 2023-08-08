import {Component} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {ScreenWidthService} from "../services/screen-width/screen-width.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent
{
  showLegalMention = false;
  showCGVModal = false;
  CGVLink: any;
  legalMentionLink: any;
  isLargeScreen: boolean = true;
  showReseaux = false;

  constructor(sanitizer: DomSanitizer, private screenWidthService: ScreenWidthService)
  {
    this.CGVLink = sanitizer.bypassSecurityTrustResourceUrl('https://localhost:8000/res/pdf/CGV.pdf');
    this.legalMentionLink = sanitizer.bypassSecurityTrustResourceUrl(
      'https://localhost:8000/res/pdf/mentions_legales.pdf');

    this.screenWidthService.isLargeScreen$.subscribe(isLargeScreen =>
    {
      this.isLargeScreen = isLargeScreen;
      if (this.isLargeScreen && this.showReseaux)
      {
        this.toggleReseaux();
      }
    });
  }

  toggleReseaux()
  {
    this.showReseaux = !this.showReseaux;
  }

}
