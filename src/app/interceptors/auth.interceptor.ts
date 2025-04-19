import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../services/token.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  if (tokenService.isTokenExist()) {
    const newReq = req.clone({
      headers: req.headers.append('authorization', 'bearer ' + tokenService.getToken())
    })
    return next(newReq);
  } else {
    return next(req);
  }
  
};
