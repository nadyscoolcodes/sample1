import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SignInComponent, ForgetpassComponent],
  exports:[
    SignInComponent,
    ForgetpassComponent
  ]
})
export class SignInModule { }
