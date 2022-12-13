import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ageValidator } from './validators/ageValidators';

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
      lastName: new FormControl(null, [Validators.minLength(4), Validators.required]),
      email: new FormControl(null),
      age: new FormControl(null, [Validators.required, ageValidator]),
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
    console.log(this.surveyForms);
    
  }
  onSubmit(){
    if(this.surveyForms.valid){
      alert(JSON.stringify(this.surveyForms.value) )
    }
    // console.log(this.surveyForms);
    
  }
  setDefaultForm(){
    this.surveyForms.setValue({
      firstName:'ani',
      lastName: 'devdariani',
      email: 'blabla',
      age: 21,
      address: {
        country: 'georgia',      
        city: 'tbilisi',
      },
      phone: 456789,      
      gender: 'female',
      pasword: 'duedgiuediu'
    })
  }
  changeGender(){
    this.surveyForms.patchValue({
      age: 29,
      firstName: 'koala',
      gender: 'male'
    })
  }


  get LastNameControl(){
    // (<FormControl>this.surveyForms.get('lastName')).errors
    return this.surveyForms.get('lastName') as FormControl
  }
  get firstNameControl(){
    return this.surveyForms.get('firstName') as FormControl
  }
  get age (){
    return this.surveyForms.get('age') as FormControl
  }
}
