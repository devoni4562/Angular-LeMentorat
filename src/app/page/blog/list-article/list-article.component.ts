import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ArticleService} from "../../../services/article/article.service";


@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit
{

  @Input() bg: string = '';
  @Input() article: any;

  zoom: boolean = false;


  constructor(private router: Router, private articleService: ArticleService)
  {
  }

  ngOnInit()
  {
    console.log(this.article);
    this.article = this.getFormatedArticle();
  }

  redirectToArticleDetails(title: string)
  {
    this.articleService.setSelectedArticle(this.article);
    const encodedTitle = encodeURIComponent(title.replace(' ', '_'));
    this.router.navigate(['/blog', encodedTitle]);
  }

  getFormatedArticle()
  {
    console.log(this.article);
    return {
      'id': this.article.id,
      'date': this.article.date,
      'image': this.article.image,
      'title': this.article.title,
      'summary': this.article.summary,
      'writerPseudo': this.article.writer[0].pseudo,
      'writerAvatar': this.article.writer[0].avatar,
      'writerEmail': this.article.writer[0].email,
      'writerJob': this.article.writer[0].job.name,
    };
  }
}
