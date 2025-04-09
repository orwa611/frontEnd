import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private key: string = "token";
  constructor() { }

  saveToken(token: string) {
    localStorage.setItem(this.key, token);
  }
}
