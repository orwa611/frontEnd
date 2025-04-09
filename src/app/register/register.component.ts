import { Component, OnInit } from '@angular/core';
import { Author } from '../interfaces/author';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
   
  }

  constructor(private authService: AuthService, private router: Router) {}

  author: Author = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    about: undefined,
  };
 
  image : any;

  select(e:any){
    this.image = e.target.files[0];
  }

  register(){
    let fd = new FormData()
    fd.append('image',this.image)
    fd.append('name', this.author.name)
    fd.append('lastname', this.author.lastname)
    fd.append('email', this.author.email)
    fd.append('password', this.author.password)
    fd.append('about', this.author.about ?? "")
    this.authService.register(fd).subscribe((value) =>{
      this.router.navigate(['/login']);
    })
  
  }

}
