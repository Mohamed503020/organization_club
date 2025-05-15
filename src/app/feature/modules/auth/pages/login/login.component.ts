// login.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading: boolean = false;
  showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: [false]
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      Object.keys(this.loginForm.controls).forEach(key => {
        const control = this.loginForm.get(key);
        control?.markAsTouched();
      });
      return;
    }

    this.loading = true;

    // Simulate authentication API call
    setTimeout(() => {
      // For demo purposes, any login attempt works
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Login successful! Redirecting to dashboard...'
      });

      setTimeout(() => {
        // Navigate to dashboard after successful login
        // this.router.navigate(['/dashboard']);
        this.loading = false;
      }, 1500);
    }, 1500);
  }

  onForgotPassword() {
    // For demo purposes, show a message
    this.messageService.add({
      severity: 'info',
      summary: 'Password Reset',
      detail: 'A password reset link has been sent to your email if it exists in our system.'
    });
  }
}
