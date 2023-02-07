import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [
    {
      product_id: 1,
      product_name: 'Apple iPhone',
      price: 999.99,
      description:
        'The latest iPhone with cutting-edge technology and sleek design.',
    },
    {
      product_id: 2,
      product_name: 'Samsung Galaxy',
      price: 899.99,
      description:
        'A high-performance smartphone from Samsung with a large display and long battery life.',
    },
    {
      product_id: 3,
      product_name: 'Google Pixel',
      price: 799.99,
      description:
        'A premium smartphone from Google with an outstanding camera and intuitive software.',
    },
  ];

  share() {
    window.alert('The product has been shared!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
