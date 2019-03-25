import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule} from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
 
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './userprofile/userprofile.component';

import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import {MatCardModule} from '@angular/material/card';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SignInModule } from './sign-in/sign-in.module';
import { empservice } from '../emp.service';
import {EmployeelistComponent } from './employeelist/employeelist.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { LoginoneComponent } from './loginone/loginone.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import { SampleformComponent } from './sampleform/sampleform.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { SubmitFlagFormComponent } from './submit-flag-form/submit-flag-form.component';
import { ValidateFieldsSubmitFormComponent } from './validate-fields-submit-form/validate-fields-submit-form.component';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatCardModule,
   
    SignInModule,
       AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SignInPageComponent,
    LogInComponent,
    LoginoneComponent,
    ForgotpassComponent,
    LandingPageComponent,
    SampleformComponent,
    SimpleFormComponent,
    SubmitFlagFormComponent,
    ValidateFieldsSubmitFormComponent,
    FieldErrorDisplayComponent,
    
  ],
  providers: [empservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
