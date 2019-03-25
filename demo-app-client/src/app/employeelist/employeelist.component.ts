import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { employee } from './employee';
import {empservice } from '../../emp.service';
//import { ADDRGETNETWORKPARAMS } from 'dns';
import { employeelist } from './employeelist';
import{ActivatedRoute, Params, Router} from '@angular/router';
import { ValueTransformer } from '@angular/compiler/src/util';
import { empty } from 'rxjs/Observer';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {

  constructor(private http: HttpClient,private myservice: empservice,private router:Router, private route: ActivatedRoute) { }
  //model = new employee();
  employees :employeelist[];
  ngOnInit() {
   // debugger  
    this.myservice.getdata()
      .subscribe( login => {
      this.employees = login;
    });
  }
      
       /* this.http.get('http://192.168.2.244:8080/hrmsone/getempdata').
    subscribe((employee : any)=>{
      
      console.log(employee);
    });
  this.model.id=1;
  this.model.username="priya";
  this.model.password="priya";*/
  remove(i)
  {
  //  var obj = jQuery.parseJSON(i);
  //  console.log(i+" employee id");
  //var n=i;
    this.myservice.deletedata(i).subscribe();
    //this.router.navigate(['/employeelist']);
    window.location.reload(true);
     alert("employee Deleted");
   
    //(i)=>{ console.log(i); }
    //this.http.get('http://192.168.2.244:8080/hrmsone/update', i).map(()=>"");
   //console.log(" data updated ");

  }
 
 // id=this.route.snapshot.params['id'];
 model = new employeelist();
 private employeelist:employeelist;
 
  edit(employeelist)
  {
    console.log("testedit");
     this.myservice.setter(employeelist);
      this.router.navigate(['/userprofile']);
  }
  save()
  {
   // this.employeelist==undefined;
   // this.myservice.setter(this.employeelist);
    this.router.navigate(['/userprofile']);
  }
  login()
{
  this.router.navigate(['/signIn']);
}
}
