import { AfterViewInit, Component, OnInit } from '@angular/core';
import '../../../assets/js/login-animation.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent {
  email: string;

  constructor(private router:Router) { }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    (window as any).initialize();
   }
  resetpassword() {
  }
}
