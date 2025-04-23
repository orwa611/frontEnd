import { Component, inject, Input } from '@angular/core';
import { Article } from '../../interfaces/article';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { getImageUrl } from '../../../constants/constants';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-blog-list',
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  private activatedRoute = inject(ActivatedRoute)
  private articleService = inject(ArticleService)
  @Input() articles: Article[] = [];
  
  getImage(image: string): string {
    return getImageUrl(image);
  }

  get isActionBtnEnabled(): boolean {
    console.log(this.activatedRoute.routeConfig?.path?.includes('myAccount') == true)
    return this.activatedRoute.routeConfig?.path?.includes('myAccount') == true
  }

  deleteArticle(article: Article) {
    this.articleService.deleteArticle(article._id).subscribe((value : Article)=>{
      this.articles = this.articles.filter((article)=>{
        return article._id != value._id;
      })

    })
  }
}
