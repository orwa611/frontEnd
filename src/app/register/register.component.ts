import { Component, OnInit } from '@angular/core';
import { Author } from '../interfaces/author';
import { NgIf } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {FormGroup, FormControl, ReactiveFormsModule, Validators, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, NgIf, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup 
  
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      about: new FormControl(''),
    });

  }

  constructor(private authService: AuthService, private router: Router) {}

  get name() {
    return this.registerForm.get('name')!;
  }

  get lastname() {
    return this.registerForm.get('lastname')!;
  }

  get email() {
    return this.registerForm.get('email')!;
  }
  
  get password() {
    return this.registerForm.get('password')!;
  }

  get about() {
    return this.registerForm.get('about')!;
  }
 
  image: any;

  select(e:any){
    this.image = e.target.files[0];
  }

  register(){
    if(this.registerForm.valid) {
      let fd = new FormData()
      fd.append('image',this.image)
      fd.append('name', this.name.value)
      fd.append('lastname', this.lastname.value)
      fd.append('email', this.email.value)
      fd.append('password', this.password.value)
      fd.append('about', this.about.value)
      this.authService.register(fd).subscribe((_) =>{
        this.router.navigate(['/login']);
      })
    }
  }

}
