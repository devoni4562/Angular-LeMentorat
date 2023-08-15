import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../../../services/article/article.service";
import {ViewportScroller} from "@angular/common";
import {ScreenWidthService} from "../../../services/screen-width/screen-width.service";

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent implements OnInit
{

  articleId!: number;
  article: any;
  isLargeScreen: boolean = true;
  showWhiteSection: boolean = false;

  constructor(private articleService: ArticleService,
              private viewportScroller: ViewportScroller,
              private screenWidthService: ScreenWidthService)
  {
  }

  ngOnInit()
  {
    console.log(this.articleService.getSelectedArticle());
    this.articleId = this.articleService.getSelectedArticle();
    this.articleService.getArticleById(this.articleId).subscribe((data: any[]) =>
    {
      this.article = data;
      console.log(this.article);
      if (this.article.video !== null && !this.article.video.includes('null'))
      {
        this.showWhiteSection = true;
      }
      console.log(this.showWhiteSection);
    });

    this.screenWidthService.isLargeScreen$.subscribe(isLargeScreen =>
    {
      this.isLargeScreen = isLargeScreen;
    });

  }

  scrollToAnchor(anchor: string)
  {
    this.viewportScroller.scrollToAnchor(anchor);

    setTimeout(() =>
    {
      const scrollPosition = this.viewportScroller.getScrollPosition();
      const windowsHeigt = window.innerHeight;
      const targetElement = document.getElementById(anchor);

      if (targetElement)
      {
        const elementTop = targetElement.getBoundingClientRect().top;
        const offset = (windowsHeigt - elementTop) / 5;
        this.viewportScroller.scrollToPosition([scrollPosition[0], scrollPosition[1] - offset]);
      }
    }, 0);
  }

}
