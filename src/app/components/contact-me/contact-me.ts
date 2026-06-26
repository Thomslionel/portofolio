import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactMe } from '../../service/Contact/contact-me';
import { ContactMessage } from '../../models/ContactModel';


@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss'
})
export class ContactMeComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactMe
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    const messagePayload: ContactMessage = this.contactForm.value;

    // Traitement de la Promise retournée par le service
    this.contactService.envoyerMessage(messagePayload)
      .then((response) => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.contactForm.reset();
        console.log('Succès EmailJS :', response.status, response.text);
      })
      .catch((error) => {
        this.isSubmitting = false;
        this.submitError = true;
        console.error('Erreur EmailJS :', error);
      });
  }
}