import { Component, inject, OnInit } from '@angular/core';
import { MyAccountService } from '../services/my-account.service';
import { Author } from '../interfaces/author';
import { baseUrl, getImageUrl } from '../../constants/constants';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-author',
  imports: [],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent implements OnInit {
  private myAccountService = inject(MyAccountService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  author?: Author
  isLoading: boolean = false;
  ngOnInit(): void {
    
    if (this.activatedRoute.routeConfig?.path?.includes('author')) {
      this.getAuthor();
    } else if (this.activatedRoute.routeConfig?.path?.includes('myAccount')){
      this.getAccount();
    } else {
      this.router.navigate(['404'])
    }

  }
  get image() {
   return getImageUrl(this.author?.image);
    
  }

  getAccount() {
    this.isLoading = true;
    this.myAccountService.getAccount().subscribe((value: Author)=>{
      this.isLoading = false;
      this.author = value;
    });
  }

  getAuthor() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id !== null ) {
      this.myAccountService.getAuthor(id)
      .pipe(catchError((_,__)=>{
        this.router.navigate(['/404'])
        return of();
      }))
      .subscribe((value: Author)=>{
        this.isLoading = false;
        this.author = value
        console.log(value)
      })
    }
  }
  
}
