import { Component, Input } from '@angular/core';
import { Author } from '../../interfaces/author';

@Component({
  selector: 'app-info-author',
  imports: [],
  templateUrl: './info-author.component.html',
  styleUrl: './info-author.component.css'
})
export class InfoAuthorComponent {
  @Input() author?: Author;
  @Input() image?: string;
}
