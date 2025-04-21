import { Component, inject } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../interfaces/article';
import { ActivatedRoute, Router } from '@angular/router';
import { getImageUrl } from '../../constants/constants';
import { NgFor } from '@angular/common';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-detail',
  imports: [NgFor],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  private articleService = inject(ArticleService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  article?: Article;

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id != null) {
      this.articleService.getArticle(id)
      .pipe(catchError((__, _) => {
        this.redirectTo404();
        return of();
      }))
      .subscribe((value: Article)=>{
        console.warn(value)
        this.article = value;
      });
    } else{
      this.redirectTo404();
    }
   
  }

  get imageUrl() {
    return getImageUrl(this.article?.image);
  }

  get authorImageUrl() {
    return getImageUrl(this.article?.author.image);
  }

  redirectTo404() {
    this.router.navigate(["404"]);
  }
}
