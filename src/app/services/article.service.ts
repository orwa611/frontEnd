import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { baseUrl } from '../../constants/constants';
import { Observable } from 'rxjs';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private http = inject(HttpClient);

  private addArticleUrl = baseUrl + "article/add";
  private getArticleUrl = baseUrl + "article/getbyid/";



  constructor() { }

  addArticle(form: FormData): Observable<Article>  {
    return this.http.post<Article>(this.addArticleUrl, form)
  }

  getArticle(id: string): Observable<Article> {
    return this.http.get<Article>(this.getArticleUrl + id);
  }
}
