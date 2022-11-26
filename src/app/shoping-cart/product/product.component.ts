import { Component, OnInit } from '@angular/core';
import { ICategoty, IProductCard } from 'src/app/meta-data/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: IProductCard[] = [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: 'men',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      rating: {
        rate: 3.9,
        count: 120
      },
      inStock: true,
      qty: 4,
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts' ,
      price: 22.3,
      description: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
      category: 'men',
      image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      rating: {
        rate: 4.1,
        count: 259
      },
      inStock: false,
      qty: 0,
    },
    {
      id: 3,
      title: 'Mens Cotton Jacket',
      price: 55.99,
      description: 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
      category: 'men',
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      rating: {
        rate: 4.7,
        count: 500
      },
      inStock: true,
      qty: 5,
    },
    {
      id: 15,
      title:  "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      price: 56.99,
      description: 'Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm',
      category: 'women',
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      rating: {
        rate: 2.6,
        count: 235
      },
      inStock: true,
      qty: 2,
    },
    {
      id: 5,
      title: 'John Hardy Women\'s Legends Naga Gold & Silver Dragon Station Chain Bracelet',
      price: 695,
      description: 'From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean\'s pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.',
      category: 'jewelry',
      image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
      rating: {
        rate: 4.6,
        count: 400
      },
      inStock: false,
      qty: 0,
    },
  ];
  constructor() { }

  ngOnInit(): void {
    console.log(this.product);
    
  }
  setClass(category: string): string{
    let className: string ='';
    category = category.toLocaleUpperCase()
    switch(category){
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
    console.log(result);
    
  }
}
