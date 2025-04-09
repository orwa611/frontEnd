import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Login } from '../interfaces/login';
import { FormsModule } from '@angular/forms';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router, private tokenService: TokenService) {}
  
  login : Login = {
    email: "",
    password: ""
  }

  loginAction(){
    this.authService.login(this.login).subscribe((value) =>{
      this.tokenService.saveToken(value);
      this.router.navigate(['/home']);
    });
  }
}
