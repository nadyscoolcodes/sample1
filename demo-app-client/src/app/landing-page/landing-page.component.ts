import { Component, OnInit } from '@angular/core';
import {empservice} from '../../emp.service';
import { employeelist } from '../employeelist/employeelist';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import{ActivatedRoute, Params, Router} from '@angular/router';
 
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  emp:employeelist=new employeelist();
  imagePath:string;
  employ:employeelist[];

  constructor(private http:HttpClient,private myserv:empservice,private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.myserv.getdata()
    .subscribe( login => {
    this.employ = login;
  });

  }

 onSelect(emp){
  this.router.navigate(['/EmployeeDetails/basicDetails',emp.lngEmpId,emp.strFst_Name])
 }
 





}
