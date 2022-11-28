import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue!: number ;
  name: string = '';
  review: string = '';
 
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm ){
    if(form.valid){
    console.log('form submited sucssesful', form.value , this.stars)
    alert('Your reviw submited sucssesfuly, thank you.')
    form.reset()
    this.name = form.value.usserName;
    this.review = form.value.review;
  } else{
    console.log('not valid ');
    
  }
  }

  countStar(star: any) {
    this.selectedValue = star;
    console.log(star);
    
  }


}
