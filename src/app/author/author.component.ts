import { Component, inject, OnInit } from '@angular/core';
import { MyAccountService } from '../services/my-account.service';
import { Author } from '../interfaces/author';

@Component({
  selector: 'app-author',
  imports: [],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent implements OnInit {
  private myAccountService = inject(MyAccountService);

  author?: Author
  isLoading: boolean = false;
  ngOnInit(): void {
    this.isLoading = true;
    this.myAccountService.getAccount().subscribe((value: Author)=>{
      this.isLoading = false;
      this.author = value;
    });
  }
  
}
