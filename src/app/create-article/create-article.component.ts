import { Component, inject, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../interfaces/article';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-create-article',
  imports: [FormsModule, ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.css'
})
export class CreateArticleComponent implements OnInit {
private articleService = inject(ArticleService);
private router = inject(Router);
private activatedRoute = inject(ActivatedRoute);

  articleForm!: FormGroup
  tags: Array<string> = [];
  image: any;
  success: boolean = false;
  error: boolean = false;

  ngOnInit(): void {
    this.articleForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', [Validators.required, Validators.minLength(500)]),
      tag: new FormControl('')
    });
    if(this.isEdit) {
      this.getArticleToEdit()
    }
  }

  get title() {
    return this.articleForm.get('title')!;
  }

  get content() {
    return this.articleForm.get('content')!;
  }

  get tag() {
    return this.articleForm.get('tag')!;
  }

  select(e: any){
    this.image = e.target.files[0];
  }

  addTags() {
    this.tags.push(this.tag.value);
    this.tag.reset();
  }
  removeTag(val: string) {
    this.tags = this.tags.filter((tag) => tag !=  val);
  }
  addArticle() { 
    if (this.articleForm.valid) {
      const fd = new FormData()
      fd.append('image',this.image)
      fd.append('title', this.title.value)
      fd.append('content', this.content.value)
      fd.append('tag', this.tags.toString())
      this.articleService.addArticle(fd)
      .pipe(catchError((error, _) => {
        this.success = false;
        this.error = true;
        return of();
      }))
      .subscribe((value: Article)=>{
        this.articleForm.reset();
        this.image = null;
        this.success = true;
        this.error = false;
      })
    }
  }
  get isEdit(): boolean {
    return this.activatedRoute.routeConfig?.path?.includes('update') == true;
  }
  getArticleToEdit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id !== null) {
      this.articleService.getArticle(id).subscribe((value : Article)=>{
        this.title.setValue(value.title)
        this.tags = value.tags
        this.content.setValue(value.content)
      })
    }
  }
  editArticle() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.articleForm.valid && id !== null) {
      const fd = new FormData()
      fd.append('image',this.image)
      fd.append('title', this.title.value)
      fd.append('content', this.content.value)
      fd.append('tag', this.tags.toString())
     
      this.articleService.editArticle(id, fd)
      .pipe(catchError((error, _) => {
        this.success = false;
        this.error = true;
        return of();
      }))
      .subscribe((value: Article)=>{
        this.articleForm.reset();
        this.image = null;
        this.success = true;
        this.error = false;
      })
    }
  }
}
