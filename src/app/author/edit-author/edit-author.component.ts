import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MyAccountService } from '../../services/my-account.service';
import { Author } from '../../interfaces/author';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-author',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './edit-author.component.html',
  styleUrl: './edit-author.component.css'
})
export class EditAuthorComponent implements OnInit {
  
  @Input() author?: Author;
  @Input() image?: string;
  @Output() sendAuthorEvent = new EventEmitter<Author>();
  form!: FormGroup;
  selectedImage: any;
  private myAccountService = inject(MyAccountService)
  imageUrl?: string
  
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.author?.name, Validators.required),
      about: new FormControl(this.author?.about, Validators.required)
    })
  }

  select(e: any){
    this.selectedImage = e.target.files[0];
    let reader = new FileReader();
    reader.onload = (event : any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.selectedImage);
  }

  get name() {
    return this.form.get("name")!;
  }
  get about() {
    return this.form.get("about")!;
  }


  editAuthor() {
    if(this.form.valid) {
      let fd = new FormData()
      fd.append('image',this.selectedImage)
      fd.append('name', this.name.value)
      fd.append('about', this.about.value)
      this.myAccountService.editAuthor(fd).subscribe((value) =>{ 
        this.sendAuthorEvent.emit(value);
      })
    }
  }

}
