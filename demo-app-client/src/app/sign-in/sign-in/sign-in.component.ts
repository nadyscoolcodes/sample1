import { AfterViewInit, Component, Renderer, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import '../../../assets/js/login-animation.js';
import { HttpErrorResponse } from '@angular/common/http';


const newLocal = '#email';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  authenticationError: boolean;
  email: string;
  password: string;
  isLoginError: boolean;
constructor(
  private router: Router,
  private renderer: Renderer,
  private elementRef: ElementRef
) {}

// tslint:disable-next-line:use-life-cycle-interface
 ngAfterViewInit() {
  (window as any).initialize();
 }
  login() {
      if (this.email === 'saravanan@uniquesystem.co.in' && this.password === '1234') {
          this.router.navigate(['']);
      } else {
        alert('Invalid credentials');
      }
    }
  }
