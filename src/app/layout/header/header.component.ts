import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { NgIf } from '@angular/common';
import { LogoutComponent } from '../../logout/logout.component';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgIf, LogoutComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private tokenService = inject(TokenService);

  get isLoggedIn(): boolean {
    return this.tokenService.isTokenExist();
  }
}
