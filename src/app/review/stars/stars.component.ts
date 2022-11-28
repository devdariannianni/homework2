import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue!: number ;

  constructor() { }
  
  ngOnInit() {
  }
  
  countStar(star: any) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }
}
