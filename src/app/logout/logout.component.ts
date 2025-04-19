import { Component, inject } from '@angular/core';
import { TokenService } from '../services/token.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [NgIf],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  private tokenService = inject(TokenService);
  private router = inject(Router);

  get isLoggedIn(): boolean {
    return this.tokenService.isTokenExist();
  }
  
  logout() {
    this.tokenService.deleteToken();
    this.router.navigate(['/login']);
  }
}
