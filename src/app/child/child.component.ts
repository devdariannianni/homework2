import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { ICompany } from '../card/person.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() companyData: ICompany ;
  @Output() sentDataToParent: EventEmitter<boolean> = new EventEmitter(false)
  newValue: string = ''
  constructor() { 
    this.companyData = {
      name: '',
      catchPhrase: ''
    }
  }

  ngOnInit(): void {
    console.log('child component initialised');
    console.log(this.sentDataToParent);
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }
  changeValue(){
    console.log(this.newValue);
    this.companyData.name = this.newValue
    this.sentDataToParent.emit(true)
  }

}
