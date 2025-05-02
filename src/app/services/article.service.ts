import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { baseUrl } from '../../constants/constants';
import { Observable } from 'rxjs';
import { Article } from '../interfaces/article';
import { ArticlesResponse } from '../interfaces/articles-response';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private http = inject(HttpClient);

  private addArticleUrl = baseUrl + "article/add";
  private getArticleUrl = baseUrl + "article/getbyid/";
  private getArticlesUrl = baseUrl + "article/all";
  private getArticlesByAuthorUrl = baseUrl + "article/author/";
  private deleteArticleUrl = baseUrl + "article/delete/";
  private updateArticleUrl = baseUrl + "article/update/"
  



  constructor() { }

  addArticle(form: FormData): Observable<Article>  {
    return this.http.post<Article>(this.addArticleUrl, form)
  }

  getArticle(id: string): Observable<Article> {
    return this.http.get<Article>(this.getArticleUrl + id);
  }
  
  getArticles(p: number, l: number = 10): Observable<ArticlesResponse> {
    return this.http.get<ArticlesResponse>(this.getArticlesUrl+'?page=' + p + '&limit=' + l);
  }

  getArticlesByAuthorId(id: string): Observable<Article[]> {
    return this.http.get<Article[]>(this.getArticlesByAuthorUrl + id);
  }
  
  deleteArticle(id: string): Observable<Article> {
    return this.http.delete<Article>(this.deleteArticleUrl + id);
  }

  editArticle(id: string, form: FormData): Observable<Article> {
    return this.http.put<Article>(this.updateArticleUrl + id, form);
  }
}
