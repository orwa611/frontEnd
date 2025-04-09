import { Component } from '@angular/core';
import { CoverComponent } from './cover/cover.component';
import { BlogListComponent } from './blog-list/blog-list.component';

@Component({
  selector: 'app-home',
  imports: [CoverComponent, BlogListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
