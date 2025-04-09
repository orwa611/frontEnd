import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { baseUrl } from '../../constants/constants';
import { map, Observable } from 'rxjs';
import { Author } from '../interfaces/author';
import { Login, LoginResponse } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private registerUrl = baseUrl + "author/register";
  private loginUrl = baseUrl + "author/login";

  constructor() { }

  register(form: FormData): Observable<Author> {
    return this.http.post<Author>(this.registerUrl, form)
  }
  
  login(form: Login): Observable<string> {
    return this.http.post<LoginResponse>(this.loginUrl, form)
          .pipe(map((res)=> res.token))
  }
}
