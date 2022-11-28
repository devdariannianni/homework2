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

@NgModule({
  declarations: [
    AppComponent,
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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
