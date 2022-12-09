import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Homework1Component } from './homework1/homework1.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { PipesComponent } from './pipes/pipes.component';
import { ProductComponent } from './shoping-cart/product/product.component';
import { TrancateStrPipe } from './meta-data/trancate-str.pipe';
import { RatingStarsComponent } from './shoping-cart/rating-stars/rating-stars.component';
import { FormComponent } from './review/form/form.component';
import { StarsComponent } from './review/stars/stars.component';
import {ElementHightliter} from './meta-data/elementBackground.directives'
import { ProductService } from './meta-data/products.service.';
import { TodoListComponent } from './todo-app/todo-list/todo-list.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { MainComponent } from './main/main.component';
import { MainModule } from './main/main.module';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PagenotFoundComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
