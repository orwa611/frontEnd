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
  private totalCount = 0;
  isLoading: boolean = false
  parentArticles: Array<Article> = [];

  loadArticles() {
    this.isLoading = true
    this.articleService.getArticles(this.page).subscribe((value)=>{
      this.page++;
      this.isLoading = false
      value.articles.forEach((elem) => {
        this.parentArticles.push(elem);
      })
      
      this.totalCount = value.totalArticles
      });
  }

  ngOnInit(): void {
    this.isLoading = true
    this.loadArticles()
  }
  @HostListener("window:scroll", [])
  onScroll(): void {
    
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
      if(this.parentArticles.length < this.totalCount && !this.isLoading) {
        this.loadArticles();
      }
    }
    }
    

}

