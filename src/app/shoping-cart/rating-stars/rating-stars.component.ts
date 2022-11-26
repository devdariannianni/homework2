import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.css']
})
export class RatingStarsComponent implements OnInit {
  @Input() maxNum: number = 0;
  @Output() starRate: EventEmitter<number> = new EventEmitter<number>();

  starMaxNum!: number[];
  rateNum!: number;
  constructor() { }

  ngOnInit(): void {
    this.starMaxNum = []
    for(let i = 0;  i < this.maxNum; i++){
      this.starMaxNum.push(i + 1)
    }
  }
  getRateNumber(num: number){
    if(this.rateNum == num){
      this.rateNum = 0
    }else{
      this.rateNum = num
    }
    this.starRate.emit(this.rateNum)
  }
}
