import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { Homework1Component } from './homework1/homework1.component';
import { MainComponent } from './main/main.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { FormComponent } from './review/form/form.component';
import { ProductComponent } from './shoping-cart/product/product.component';
import { TodoListComponent } from './todo-app/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    
  },
  // {
  //   path: 'products',
  //   component: ProductComponent,
    
  // },
  // {
  //   path: 'todo',
  //   component: TodoListComponent
  // },
  // {
  //   path: 'home',
  //   redirectTo: ''
  // },
  // {
  //   path: 'homework.1',
  //   component: Homework1Component
  // },
  {
    path: '**',
    component: PagenotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
