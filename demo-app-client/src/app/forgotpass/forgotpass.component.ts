import { Component, OnInit } from '@angular/core';
import{ActivatedRoute, Params, Router} from '@angular/router';
import { SignInPageComponent } from '../sign-in-page/sign-in-page.component';
import {UserLogin} from 'app/sign-in-page/UserLogin';
import {empservice } from '../../emp.service';
import { HttpClient } from '@angular/common/http';
import{resetPass} from './resetPass';
@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.scss']
})
export class ForgotpassComponent implements OnInit {

  constructor(private myservice: empservice,private router:Router,private http: HttpClient,private activatedRoute: ActivatedRoute) { }
  private resetPass:resetPass;
  model = new resetPass();
 

  
 // private UserLogin:UserLogin;
 //  modelone = new UserLogin();
   
  ngOnInit() {
    //this.modelone=this.myservice.getterMail();
    this.activatedRoute.queryParams.subscribe(params => { 
      //let token=params['token'];
      this.model.strToken=params['token'];
      //console.log(token);
     });
  }
 
          //let date = params['token'];
          //console.log(date); // Print the parameter to the console. 
    
//  }
  Resetpass(model)
  {
    if(model.strCpassword === model.strPassword)
    {
      alert("entered");
      //this.modelone=this.myservice.getterMail();
      //alert(this.modelone);
    // this.model.strMailId=this.modelone.strLoginId;
     //alert(this.modelone.strLoginId);
    //this.myservice.resetPass(this.model.strPassword,this.modelone.strLoginId).subscribe();
    this.myservice.resetPass(this.model.strPassword,this.model.strToken).subscribe();
    this.router.navigate(['/singnIn']);
  }else{
    alert("password and confirm password not match");
  }
}
}
