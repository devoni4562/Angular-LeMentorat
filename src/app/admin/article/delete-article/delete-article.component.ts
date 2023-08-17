import {Component} from '@angular/core';
import {AdminService} from "../../../services/admin/admin.service";
import {ArticleService} from "../../../services/article/article.service";

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
    this.adminService.deleteArticle(id).subscribe(
      response =>
      {
        console.log(response);
      }
    );
  }

}
