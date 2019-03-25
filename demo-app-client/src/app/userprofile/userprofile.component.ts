import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { user } from './user';
import {empservice } from '../../emp.service';
import {ActivatedRoute, Params, Router, Route} from '@angular/router';
import{ employeelist} from '../employeelist/employeelist';
import { ValueTransformer } from '@angular/compiler/src/util';
import { MatDialogModule } from '@angular/material';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserProfileComponent implements OnInit  {

  constructor(private http: HttpClient,private myservice: empservice,private router:Router) {
       }
 
       private employeelist:employeelist;
       model = new employeelist();
 ngOnInit() {
 // this.employeelist=this.myservice.getter();
 // this.model=this.myservice.getter();
 this.model=this.myservice.getter();
  }
 
   addEmployee(){
    window.location.reload(true);
  
      this.model.strGender='Female';
    this.model.strMaritalStat='single';
    this.model.delete_status='No';
             this.myservice
        .addEmployee(this.model)
        .subscribe((login)=>{ console.log(login); 
        });
        
   alert(" employee added");     
   this.router.navigate(['/employeelist']);
  
  }
 editemp(){
  this.model=this.myservice.getter(); 
 }




 /*
  Onclick() {

  console.log();
    this.http.get('http://192.168.2.244:8080/hrmsone/getempdata').
    subscribe((data)=>{
      console.log(data);
    });
  }*/
  /*  
   model =new user();
   addemployee(info){

console.log(info.f_name);

   this.myservice.addEmployee(this.model).subscribe((data)=>{
    console.log(data);
  });


   }  */

    /* onClick(f : NgForm){

      console.log(f.value);


     }*/
  
}
