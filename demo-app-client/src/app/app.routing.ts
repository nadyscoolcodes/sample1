import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SignInComponent } from './sign-in/sign-in/sign-in.component';
import { ForgetpassComponent } from './sign-in/forgetpass/forgetpass.component';
import { UserProfileComponent } from './userprofile/userprofile.component';
import {EmployeelistComponent } from './employeelist/employeelist.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { LoginoneComponent } from './loginone/loginone.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {SampleformComponent} from './sampleform/sampleform.component';
import { SubmitFlagFormComponent } from './submit-flag-form/submit-flag-form.component';
import { ValidateFieldsSubmitFormComponent } from './validate-fields-submit-form/validate-fields-submit-form.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
const routes: Routes =[
  {
    path:'', 
    redirectTo:'employeelist',
    pathMatch:'full',

  },
  { path: 'simpleForm', component: SimpleFormComponent },
  { path: 'validateSubmit', component: ValidateFieldsSubmitFormComponent },
  { path: 'submitFlag', component: SubmitFlagFormComponent },
 {
   path:'sampleform',
   component:SampleformComponent,
 },
  { 
    path: '',
    redirectTo: 'userprofile',
    pathMatch: 'full',
  }, 
  {
   path:'forgotpass',
   component:ForgotpassComponent,
  },

  {
    path:'loginPage',
    component:LogInComponent,
  },
  {
    path:'loginOne',
    component:LoginoneComponent,
  },
   {
  path:'signIn',
  component:SignInPageComponent,
  },
  {
    path: 'login',
    component: SignInComponent,
  },
  {
    path:'land',
    component:LandingPageComponent,
   
   },
  {                                             
    path:'forgetpass',
    component: ForgetpassComponent,
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]}
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
    // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
