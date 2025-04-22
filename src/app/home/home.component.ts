import { Component, HostListener, inject } from '@angular/core';
import { CoverComponent } from './cover/cover.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { ArticleService } from '../services/article.service';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-home',
  imports: [CoverComponent, BlogListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private page = 1;
  private articleService = inject(ArticleService)
  isLoading: boolean = false
  parentArticles: Array<Article> = [];

  ngOnInit(): void {
    this.isLoading = true
    this.articleService.getArticles(this.page).subscribe((value)=>{
      this.isLoading = false
      this.parentArticles = value.articles;
      });
  }


}

