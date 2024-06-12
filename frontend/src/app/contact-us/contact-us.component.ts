import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }


  sendEmail() {
    if (this.contactForm.valid) {
      this.http.post('http://localhost:8080/api/send-email', this.contactForm.value).subscribe(
        response => {
          this.contactForm.reset();
        },
        error => {
          alert('Email sent successfully!');
          this.contactForm.reset();
        }
      );
    } else {
      alert('Please fill out the form correctly.');
    }
  }

}
