import { NgIf } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { MyAccountService } from '../../services/my-account.service';
import { Author } from '../../interfaces/author';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  imports: [ReactiveFormsModule, NgIf, FormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm!: FormGroup
  private myAccountService = inject(MyAccountService);
  @Input() author?: Author;

 ngOnInit(): void {
  this.changePasswordForm = new FormGroup({
    currentPassword: new FormControl('', [Validators.required]),
    
  });
}

get currentPassword() {
  return this.changePasswordForm.get('currentPassword')!;
}

  changePassword() {

  }
}
