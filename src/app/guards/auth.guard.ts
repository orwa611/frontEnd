import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { inject } from '@angular/core';

export const authGuardConnected: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  if(tokenService.isTokenExist()) {    
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};

export const authGuardDisconnected: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  if(tokenService.isTokenExist()) {
    router.navigate(['/home']);
    return false;
  } else {
    return true;
  }
};