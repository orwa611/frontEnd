import { Component, inject, Input } from '@angular/core';
import { Article } from '../../interfaces/article';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { getImageUrl } from '../../../constants/constants';

@Component({
  selector: 'app-blog-list',
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  private activatedRoute = inject(ActivatedRoute)
  @Input() articles: Article[] = [];
  
  getImage(image: string): string {
    return getImageUrl(image);
  }

  get isActionBtnEnabled(): boolean {
    console.log(this.activatedRoute.routeConfig?.path?.includes('myAccount') == true)
    return this.activatedRoute.routeConfig?.path?.includes('myAccount') == true
  }
}
