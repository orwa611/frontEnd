import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../interfaces/author';
import { baseUrl } from '../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class MyAccountService {
  private http = inject(HttpClient);
  private accountUrl = baseUrl + "author/account";
  private authorUrl = baseUrl + "author/id/";
  private editAuthorUrl = baseUrl + "author/update/"
  constructor() { }

  getAccount(): Observable<Author> {
    return this.http.get<Author>(this.accountUrl);
  }

  getAuthor(id: string): Observable<Author> {
    return this.http.get<Author>(this.authorUrl + id);
  }
  
  editAuthor(fd: FormData): Observable<Author> {
    return this.http.put<Author>(this.editAuthorUrl, fd);
  }
}
