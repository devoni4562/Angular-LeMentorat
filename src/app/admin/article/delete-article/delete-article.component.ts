import {Component} from '@angular/core';
import {AdminService} from "../../../services/admin/admin.service";
import {ArticleService} from "../../../services/article/article.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-delete-article',
  templateUrl: './delete-article.component.html',
  styleUrls: ['./delete-article.component.css']
})
export class DeleteArticleComponent
{

  articles: any[] = [];

  constructor(private adminService: AdminService, articleService: ArticleService)
  {
    articleService.getIdAndTitleOfAllArticles().subscribe((data: any[]) =>
      this.articles = data
    );
  }

  deleteArticle(id: number)
  {
    this.adminService.deleteArticle(id).pipe(tap(
      response =>
      {
        const indexToRemove = this.articles.findIndex(item => item.id === id);

        if (indexToRemove !== -1)
        {
          this.articles.splice(indexToRemove, 1);
        }
      }
    ))
      .subscribe(
        {
          error: error =>
          {
            console.error(error);
          }
        }
      );

  }

}
