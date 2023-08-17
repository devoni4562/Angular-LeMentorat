import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArticleService
{

  private apiUrl = 'https://api-le-mentorat-fabdab54a40e.herokuapp.com/api/article/';
  private apiUrllh = 'https://localhost:8000/api/article/';
  private selectedArticleId!: number;

  constructor(private http: HttpClient)
  {
    const storedArticleId = localStorage.getItem('selectedArticleId');
    this.selectedArticleId = storedArticleId ? parseInt(storedArticleId, 10) : 0;
  }

  setSelectedArticle(article: any)
  {
    this.selectedArticleId = article.id;
    localStorage.setItem('selectedArticleId', this.selectedArticleId.toString());
  }

  getSelectedArticle(): number
  {
    return this.selectedArticleId;
  }

  getAllArticles()
  {
    return this.http.get<any[]>(this.apiUrl);
  }

  getIdAndTitleOfAllArticles()
  {
    return this.http.get<any[]>(this.apiUrllh + 'IdAndTitle');
  }

  getArticleById(id: number)
  {
    return this.http.get<any[]>(this.apiUrl + 'getArticle/' + id);
  }
}
