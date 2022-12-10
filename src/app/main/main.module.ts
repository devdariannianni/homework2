import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Homework1Component } from '../homework1/homework1.component';
import { CardComponent } from '../card/card.component';
import { ChildComponent } from '../child/child.component';
import { PipesComponent } from '../pipes/pipes.component';
import { ProductComponent } from '../shoping-cart/product/product.component';
import { TrancateStrPipe } from '../meta-data/trancate-str.pipe';
import { RatingStarsComponent } from '../shoping-cart/rating-stars/rating-stars.component';
import { FormComponent } from '../review/form/form.component';
import { StarsComponent } from '../review/stars/stars.component';
import { ElementHightliter } from '../meta-data/elementBackground.directives';
import { TodoListComponent } from '../todo-app/todo-list/todo-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { SurveyFormComponent } from '../survey-form/survey-form.component';
import { MainComponent } from './main.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    Homework1Component,
    CardComponent,
    ChildComponent,
    PipesComponent,
    ProductComponent,
    TrancateStrPipe,
    RatingStarsComponent,
    FormComponent,
    StarsComponent,
    ElementHightliter,
    TodoListComponent,
    SurveyFormComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    // HeaderComponent,
    // FooterComponent,
    // Homework1Component,
    // CardComponent,
    // ChildComponent,
    // PipesComponent,
    // ProductComponent,
    // TrancateStrPipe,
    // RatingStarsComponent,
    // FormComponent,
    // StarsComponent,
    // ElementHightliter,
    // TodoListComponent,
  ]
})
export class MainModule { }
