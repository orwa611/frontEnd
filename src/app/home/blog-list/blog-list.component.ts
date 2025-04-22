import { Component, Input } from '@angular/core';
import { Article } from '../../interfaces/article';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { getImageUrl } from '../../../constants/constants';

@Component({
  selector: 'app-blog-list',
  imports: [RouterLink, NgFor],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  @Input() articles: Article[] = [];
  
  getImage(image: string): string {
    return getImageUrl(image);
  }
}
