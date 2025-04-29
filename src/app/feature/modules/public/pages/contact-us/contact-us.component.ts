import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  contactForm: FormGroup;
  submitted = false;
  submitSuccess = false;
  submitError = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    // Any additional initialization code
    this.initializeMapIfNeeded();
  }

  // Convenience getter for easy access to form fields
  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    // Simulate API call
    this.submitContactForm(this.contactForm.value);
  }

  submitContactForm(formData: any): void {
    // Here you would normally make an HTTP call to your backend API
    // For demonstration, we'll simulate an API call with setTimeout

    console.log('Form data to submit:', formData);

    setTimeout(() => {
      // Simulate successful submission
      this.submitSuccess = true;
      this.submitted = false;
      this.contactForm.reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    }, 1500);
  }

  private initializeMapIfNeeded(): void {
    // Initialize a map service like Google Maps here
    // This would typically involve loading the Maps API and setting up the map
    console.log('Map initialization would happen here');

    // Example of how you might initialize Google Maps (pseudo-code)
    /*
    if (typeof google !== 'undefined') {
      const mapOptions = {
        center: { lat: 53.4084, lng: -2.9916 }, // Liverpool coordinates
        zoom: 15
      };
      const map = new google.maps.Map(
        document.getElementById('contact-map'),
        mapOptions
      );

      // Add a marker for the location
      new google.maps.Marker({
        position: { lat: 53.4084, lng: -2.9916 },
        map: map,
        title: 'Our Location'
      });
    }
    */
  }

  // Method to handle form field errors
  hasError(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return control ? control.invalid && (control.dirty || control.touched || this.submitted) : false;
  }

  // Method to get error message for display
  getErrorMessage(controlName: string): string {
    const control = this.contactForm.get(controlName);

    if (!control) return '';

    if (control.errors?.['required']) {
      return 'This field is required';
    }

    if (controlName === 'email' && control.errors?.['email']) {
      return 'Please enter a valid email address';
    }

    if (controlName === 'message' && control.errors?.['minlength']) {
      return 'Message must be at least 10 characters';
    }

    return '';
  }
}
