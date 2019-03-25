import { Injectable } from '@angular/core';
import { Http,  ResponseType } from '@angular/http';
import 'rxjs/add/operator/map';
import {employee} from './app/employeelist/employee';
import {employeelist} from './app/employeelist/employeelist';
import { HttpClient } from '@angular/common/http';
import{ToastModule} from 'ng2-toastr/ng2-toastr'; 
//import { HttpClient } from '@angular/common/http';
import {user} from './app/userprofile/user';
import {UserLogin} from './app/sign-in-page/UserLogin';
import {resetPass} from './app/forgotpass/resetPass';
import { Observable } from "rxjs";
import { observableToBeFn } from 'rxjs/testing/TestScheduler';
@Injectable()
export class empservice {

  employees=[];
  private User:user;
  private UserLogin:UserLogin;
//  private resetPass:resetPass;
  private employeelist:employeelist;
  constructor(private _http:HttpClient) { }
  checkMe:any;
  getEmployees(){
    return this._http.get("http://localhost:8080/")
      .map(res=>{
        this.checkMe = res;
       
       // if(this.checkMe._body !== "0"){
         //  return res.json()
       // }
       
      });
  }
  
  deletedata(i)
 {
  console.log(i);
  
  return this._http.get("http://192.168.2.244:8080/hrmsone/update/"+i+"",i)
  .map(()=>"");
 }
   addEmployee(login){
    console.log(login);
   // this._http.get('http://192.168.2.244:8080/hrmsone/savedata',info).
    //map(()=>"");
   
    return  this._http.post("http://192.168.2.244:8080/employee/add",login)
    .map(()=>"");
  }
  /*saveEmployee(data)
  {

    return this._http.get("http://192.168.2.244/hrmsone/savedata",data).map(()=>"");
  }*/
  
  baseUrl: string='http://192.168.2.244:8080/hrms/employee/list';
  getdata()
  {
     return this._http.get<employeelist[]>(this.baseUrl);
  }
 setter(employeelist:employeelist)
 {
   
 this.employeelist=employeelist;
 }
getter()
{
  console.log(this.employeelist);
  return this.employeelist;
}
baseUrlone: string='http://localhost:8080/hrms/user/forgetpassword';
getdataUserlogin()
{
   return this._http.get<UserLogin>(this.baseUrlone);
}
setterMail(UserLogin:UserLogin)
 {
  
this.UserLogin=UserLogin;
 }
getterMail()
{
  
  console.log(this.UserLogin);
  return this.UserLogin;
}

getsingledata(id)
{
return  this._http.get("http://192.168.2.244:8080/hrmsone/find/"+id+"",id)
  .map(()=>"");
}

public  getLoginData(userName,password):Observable<any>{
//var strLoginId=userName;
  return this._http.get("http://localhost:8080/login/pass/"+userName +'/'+password);
  //this._http.get("http://localhost:8080/hrms/user/forgetpassword/"+strLoginId);
  
}
sendmail(UserLogin) 
  {
  alert("service started");
  console.log(UserLogin);
  
 return this._http.post("http://localhost:8080/hrms/user/forgetpassword",UserLogin).map(()=>"");
  
 }
//public resetPass(password, loginId)
public resetPass(password,token)
{
  //alert(password+" "+loginId);
  alert(token);
  return this._http.get("http://localhost:8080/hrms/user/reset/"+password+'/'+token);
}

}