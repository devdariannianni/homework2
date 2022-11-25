import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework1',
  templateUrl: './homework1.component.html',
  styleUrls: ['./homework1.component.css']
})
export class Homework1Component implements OnInit {
  title = 'homework2';
  numbers = [1,2,3,4,5,6,7,8];
  isEven(n : number){
    return n % 2 == 0;
   }

   isOdd(n: number){
    return Math.abs(n % 2) == 1;

   }

  ngOnInit(): void {
  }

}
