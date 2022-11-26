import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  numberExample: number = 234.345567;
  title: string = 'Angular pipes';
  constructor() { }
  
  ngOnInit(): void {
  }
  date: Date = new Date()

}
