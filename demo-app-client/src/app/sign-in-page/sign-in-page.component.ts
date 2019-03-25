import { Component, OnInit } from '@angular/core';
import {empservice } from '../../emp.service';
import {user}  from "../userprofile/user";
import{ActivatedRoute, Params, Router} from '@angular/router';
import{UserLogin} from './UserLogin';
import { empty } from 'rxjs/Observer';
import { HttpClient } from '@angular/common/http'; 
@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {

  constructor(private myservice: empservice,private router:Router,private http: HttpClient,) { }
  //Usr:user=new user();
   // UserLogin:UserLogin=new UserLogin();
    private UserLogin:UserLogin;
    model = new UserLogin();
   //Sgn:signIn=new signIn();
  ngOnInit() {

  }
  onSubmitNew(userName,password){
  if(userName === undefined)
        alert ("Fields  are required");
  else{
    this.myservice.getLoginData(userName,password).subscribe(data=>{ 
      
     if(data===true)
     {
       alert("login successfully");
      this.router.navigate(['/employeelist']);
     } else
      {
       alert("Username or Password is Wrong");
     }
  
   });
   }
}
mailsend(model){
 
 if(model.strLoginId == undefined)
 {
   alert("Please Enter email id");
 }else{
 this.myservice.sendmail(this.model)
  .subscribe((UserLogin)=>{ console.log(UserLogin); 
    
  });
  
  alert("please check your mail.. and find a link..!!!!!");
}
}

}