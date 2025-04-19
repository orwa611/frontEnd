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
  constructor() { }

  getAccount(): Observable<Author> {
    return this.http.get<Author>(this.accountUrl);
  }
}
