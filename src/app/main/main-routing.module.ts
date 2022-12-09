import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductComponent } from "../shoping-cart/product/product.component";


const routes: Routes = [
    {
        path: 'products',
        component: ProductComponent
    }
]
@NgModule({
    // declarations: []
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: []
  })
  export class MainRoutingModule { }