import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { Homework1Component } from './homework1/homework1.component';
import { FormComponent } from './review/form/form.component';
import { ProductComponent } from './shoping-cart/product/product.component';
import { TodoListComponent } from './todo-app/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: '',
    component: CardComponent,
    
  },
  {
    path: 'products',
    component: ProductComponent,
    
  },
  {
    path: 'todo',
    component: TodoListComponent
  },
  {
    path: 'home',
    redirectTo: ''
  },
  {
    path: 'homework.1',
    component: Homework1Component
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
