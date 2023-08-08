import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {ArticleService} from "../../../services/article/article.service";


@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent
{

  @Input() bg: string = '';
  @Input() article: any;

  zoom: boolean = false;


  constructor(private router: Router, private articleService: ArticleService)
  {
  }

  redirectToArticleDetails(title: string)
  {
    this.articleService.setSelectedArticle(this.article);
    const encodedTitle = encodeURIComponent(title.replace(' ', '_'));
    this.router.navigate(['/blog', encodedTitle]);
  }
}
