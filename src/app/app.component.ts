import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'carrental';
  user: string = 'Kerem Candangil';
  product = {
    productId: 1,
    productName: 'bardak',
    categoryId: 1,
    unitPrice: 5,
  };
  product2 = {
    productId: 2,
    productName: 'laptop',
    categoryId: 1,
    unitPrice: 5,
  };
  product3 = {
    productId: 3,
    productName: 'mouse',
    categoryId: 1,
    unitPrice: 5,
  };
  product4 = {
    productId: 4,
    productName: 'keyboard',
    categoryId: 1,
    unitPrice: 5,
  };
  product5 = {
    productId: 5,
    productName: 'kamera',
    categoryId: 1,
    unitPrice: 5,
  };

  products = [
    this.product,
    this.product2,
    this.product3,
    this.product4,
    this.product5,
  ];
}
