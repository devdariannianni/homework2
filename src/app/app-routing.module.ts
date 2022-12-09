import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CardComponent } from './card/card.component';
import { Homework1Component } from './homework1/homework1.component';
import { MainComponent } from './main/main.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { FormComponent } from './review/form/form.component';
import { ProductComponent } from './shoping-cart/product/product.component';
import { TodoListComponent } from './todo-app/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'register',
    component: SignupComponent
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path: '**',
    component: PagenotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
