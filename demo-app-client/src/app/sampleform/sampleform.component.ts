import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-sampleform',
  templateUrl: './sampleform.component.html',
  styleUrls: ['./sampleform.component.scss']
})
export class SampleformComponent implements OnInit {

  
   
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    
  }

}
