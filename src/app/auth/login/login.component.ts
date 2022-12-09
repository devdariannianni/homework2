import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(form.valid){
      console.log('form submited', form.value);
      form.reset()
    }else{

      console.log('not valid');
    }
    
  }
  goToRegister(){
    this._router.navigate(['/register'])
  }
}
