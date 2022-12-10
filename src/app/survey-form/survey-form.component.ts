import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {
  
  surveyForms: FormGroup;

  constructor() { 
    this.surveyForms = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.minLength(4)),
      email: new FormControl(null),
      age: new FormControl(null, Validators.min(18)),
      address: new FormGroup({
        country: new FormControl(null),      
        city: new FormControl(null),
      }),
      phone: new FormControl(null),      
      gender: new FormControl(null),
      pasword: new FormControl(null),
    })
  }

  ngOnInit(): void {
    // console.log(this.surveyForms);
    
  }
  onSubmit(){
    console.log(this.surveyForms);
    
  }
  get LastNameControl(){
    // (<FormControl>this.surveyForms.get('lastName')).errors
    return this.surveyForms.get('lastName') as FormControl
  }
}
