import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardComponent } from "../card/card.component";
import { Homework1Component } from "../homework1/homework1.component";
import { ProductComponent } from "../shoping-cart/product/product.component";
import { SurveyFormComponent } from "../survey-form/survey-form.component";
import { TodoListComponent } from "../todo-app/todo-list/todo-list.component";
import { MainComponent } from "./main.component";


const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path:'products',
                component: ProductComponent,
                pathMatch: 'full'
            },
            {
                path: 'todo',
                component: TodoListComponent,
            },
            {
                path: 'homework',
                component: Homework1Component
            },
            {
                path: 'home',
                component: CardComponent
            },
            {
                path: 'survey',
                component: SurveyFormComponent
            }
        ]
    }
]
@NgModule({
    // declarations: []
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class MainRoutingModule { }