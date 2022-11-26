import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IPerson } from './person.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit , AfterViewInit{
  @ViewChild('getUser') username!: ElementRef;
  name: string = 'angular project has started'
  student: IPerson;
  userInputName: string = ''
  constructor() { 
  this.student ={
    id: 2,
    name: 'ani devdariani',
    username: 'devdariannianni',
    img: 'https://scontent.ftbs5-2.fna.fbcdn.net/v/t1.6435-9/64261546_117860182777937_44949624481382400_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4o4AopWuz5oAX9aiIdB&_nc_oc=AQklW_mF3q7O_hkWPfc8Fu_gxX0dtKyALqCjm4JszxdUWZD2hx-0q8UKxBzLLRxPhiw&_nc_ht=scontent.ftbs5-2.fna&oh=00_AfCpuI-G7tCTL-hWAahhS7j1K9il93whCyo-HSht06mJHg&oe=63A859F1',
    email:'devdariannianni@gmail.com',
    employed: false,
    salary: 2000,
    phone: '591 64 64 69',
    company: {
      name: 'whatever',
      catchPhrase: 'whatever2'
    }
    
  }
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    console.log(this.username.nativeElement.innerHTML);
    
  }

  getEmployStatus(student: IPerson){
    if(student.employed){
      console.log('employed');
      
    }else{
      console.log('open to work');
      
    }
  }

  setUserName(name: string){
    this.student.name = name
  }
  reciveData(data: boolean){
    console.log(`from child to parent works ${data}`);
    
  }
}
