import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Login } from '../interfaces/login';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TokenService } from '../services/token.service';
import { NgIf } from '@angular/common';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgIf, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  errorMessage: string = "";

  constructor(private authService: AuthService, private router: Router, private tokenService: TokenService) {}
  ngOnInit(): void {
   this.loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required)
   });
  }

  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  login?: Login

  loginAction() {
    this.errorMessage = "";
    this.login = {
      email: this.email.value,
      password: this.password.value
    }
    if (this.loginForm.valid) {
      this.authService.login(this.login)
      .pipe(
        catchError((errorRes, _) => {
          this.errorMessage = errorRes.error.message

          return of();
        })
      )
      .subscribe((value) =>{
        this.tokenService.saveToken(value);
        this.router.navigate(['/home']);
      });
    }
    
  }
}
