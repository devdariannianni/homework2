import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/meta-data/products.service.';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.css'],
  
})
export class RatingStarsComponent implements OnInit {
  @Input() maxNum: number = 0;
  @Output() starRate: EventEmitter<number> = new EventEmitter<number>();

  starMaxNum!: number[];
  rateNum!: number;
  constructor(private _service: ProductService ) { }

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
