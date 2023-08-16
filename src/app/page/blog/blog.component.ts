import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ArticleService} from "../../services/article/article.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit
{

  @ViewChildren('categoryCheckbox') categoryCheckboxes!: QueryList<ElementRef>;

  articles: any[] = [];
  filteredArticles: any[] = [];
  categories: string[] = [];
  searchText: string = '';
  writers: string[] = [];
  selectedWriter: string = '';
  dateFilterType: string = 'recentToOld';

  oldestDate: string = '';
  newestDate: string = '';

  private readonly specificDateId = 'specificDate';
  private readonly startDateId = 'startDate';
  private readonly endDateId = 'endDate';

  constructor(private articleService: ArticleService)
  {
  }

  ngOnInit()
  {
    this.articleService.getAllArticles().subscribe((data: any[]) =>
    {
      this.articles = data;
      this.categories = this.getDistinctCategories(this.articles);
      this.writers = this.getDistinctWriters(this.articles);

      this.oldestDate = this.articles.reduce((min, article) => (article.date < min ? article.date : min),
        this.articles[0].date);

      this.newestDate = this.articles.reduce((max, article) => (article.date > max ? article.date : max),
        this.articles[0].date);

      this.filterArticles();

    });
  }

  getDistinctCategories(articles: any[]): string[]
  {
    const categories = articles.map(article => article.category?.wording);
    return Array.from(new Set(categories.filter(Boolean)));
  }

  getDistinctWriters(articles: any[]): string[]
  {
    const writer = articles.map(article => article.writer?.pseudo);
    return Array.from(new Set(writer.filter((Boolean))));
  }

  filterArticles()
  {

    const filterArticlesByWriter = () =>
    {
      this.filteredArticles = this.articles.filter(article =>
        !this.selectedWriter || article.writer.pseudo.includes(this.selectedWriter)
      );
      filterArticlesByCategory();
    };

    const filterArticlesByCategory = () =>
    {
      const checkedCategories = this.categoryCheckboxes
        .filter(checkbox => checkbox.nativeElement.checked)
        .map(checkbox => checkbox.nativeElement.value);

      this.filteredArticles = this.filteredArticles.filter(article =>
        checkedCategories.length === 0 || checkedCategories.includes(article.category?.wording)
      );
      filterArticlesByName();
    };

    const filterArticlesByName = () =>
    {
      const searchText = this.searchText.toLowerCase().trim();
      this.filteredArticles = this.filteredArticles.filter(article =>
        !searchText || article.title.toLowerCase().includes(searchText)
      );
      filterArticlesByDate();
    };

    const filterArticlesByDate = () =>
    {
      switch (this.dateFilterType)
      {
        case 'recentToOld':
          this.filteredArticles.sort((o, r) => new Date(r.date).getTime() - new Date(o.date).getTime());
          break;

        case 'oldToRecent':
          this.filteredArticles.sort((o, r) => new Date(o.date).getTime() - new Date(r.date).getTime());
          break;

        case 'specificDate':
          const specificDate = this.getElementValue(this.specificDateId);

          if (specificDate)
            this.filteredArticles = this.filteredArticles.filter(article =>
              article.date === specificDate
            );
          break;

        case 'betweenDates':


          const startDate = this.getElementValue(this.startDateId);
          if (startDate)
          {
            this.oldestDate = startDate;
          }
          const endDate = this.getElementValue(this.endDateId);
          if (endDate)
          {
            this.newestDate = endDate;
          }


          if (startDate && endDate)
          {
            this.filteredArticles = this.filteredArticles.filter(article =>
              article.date >= startDate && article.date <= endDate
            );
          } else if (startDate)
          {
            this.filteredArticles = this.filteredArticles.filter(article =>
              article.date >= startDate
            );
          } else if (endDate)
          {
            this.filteredArticles = this.filteredArticles.filter(article =>
              article.date <= endDate
            );
          }
          this.filteredArticles.sort((o, r) => new Date(o.date).getTime() - new Date(r.date).getTime());
          break;
      }
    };
    filterArticlesByWriter();

  }

  private getElementValue(id: string): string | null
  {
    const element = document.querySelector(`#${id}`) as HTMLInputElement;
    return element ? element.value : null;
  }

}
