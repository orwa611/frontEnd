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

  isTokenExist(): boolean {
   let value = localStorage.getItem(this.key)
    return value != null && value != "";
  }
  
  deleteToken(): void {
    localStorage.removeItem(this.key);
  }
  getToken(): string | null {
   return localStorage.getItem(this.key);
  }
}
