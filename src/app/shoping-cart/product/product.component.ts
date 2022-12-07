import { Component, OnInit } from '@angular/core';
import { ICategoty, IProductCard } from 'src/app/meta-data/product.interface';
import { ProductService } from 'src/app/meta-data/products.service.';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: IProductCard[] = [];
  constructor(private _service: ProductService) {
    this.product = this._service.getProductList()
   }

  ngOnInit(): void {
    // console.log(this.product);
    
  }
  setClass(cat: string): string{
    let className: string ='';
    cat = cat.toLocaleUpperCase()
    switch(cat){
      case ICategoty.MEN:
        className = 'man';
        break
      case ICategoty.WOMAN:
        className = 'woman';
        break
      case ICategoty.JEWELRY:
        className = 'jew'  
        break
      default:
        className = ''
      
    }
    return className
  }
  getRating(result: number){
    // console.log(result);
    
  }
}
