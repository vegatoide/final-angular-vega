import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, MaxValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor, CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
 userForm!: FormGroup;

 constructor(private formBuilder: FormBuilder) {
  this.userForm = this.formBuilder.group({
    contactEmail: ['', [Validators.required, Validators.email]],
    contactName: ['', Validators.required],
    contactSubject: ['(no subject)', Validators.maxLength(160)],
    contactMessage: ['', [Validators.required, Validators.maxLength(500), Validators.minLength(100)]]
  })
 }


 submitForm() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
 }

}
