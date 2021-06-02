import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductsService} from '../../../core/services/products/products.service';
import {Product} from '../../../product.model';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      // this.product = this.productsService.getProduct(id);
    });
  }

  fetchProduct(id: string): void {
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    }
    );
  }
  createProduct(): void {
    const newProduct: Product = {
      id: '224',
      title: 'Nuevo000',
      image: 'D:/Sergio Naranjo Morales/Platzi/angular/platzi-store/src/assets/images/banner-1.jpg',
      price: 55000,
      description: 'Hola soy un nuevo producto',
    };
    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    }
    );
  }
  updateProduct(): void {
    const updateProduct: Partial<Product> = {
      // image: 'D:/Sergio Naranjo Morales/Platzi/angular/platzi-store/src/assets/images/banner-1.jpg',
      price: 65000,
      description: 'Hola soy una edición producto',
    };
    this.productsService.updateProduct('224', updateProduct)
    .subscribe(product => {
      console.log(product);
    }
    );
  }
  deleteProduct(): void {
    this.productsService.deleteProduct('123')
    .subscribe(rta => {
      console.log(rta);
    }
    );
  }
}
