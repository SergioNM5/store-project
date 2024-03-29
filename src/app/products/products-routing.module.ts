import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { ProductsContainer } from './containers/products/products.container';

const routes: Routes = [
    {
        path: '',
        component: ProductsContainer
    },
    {
        path: ':id',
        component: ProductDetailComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ]
})

export class ProductsRoutingModule {

}
