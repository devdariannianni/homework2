import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework2';
  numbers = [1,2,3,4,5,6,7,8]

   isEven(n : number){
    return n % 2 == 0;
   }

   isOdd(n: number){
    return Math.abs(n % 2) == 1;

   }
}
