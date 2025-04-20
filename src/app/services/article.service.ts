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

  constructor() { }

  addArticle(form: FormData): Observable<Article>  {
    return this.http.post<Article>(this.addArticleUrl, form)
  }
}
