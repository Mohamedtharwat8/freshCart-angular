import { Routes } from "@angular/router";
import { ProductsDetailesComponent } from './pages/products-detailes/products-detailes.component';

export const PRODUCTS_ROUTES: Routes = [
  { path: "products", loadComponent: () => import('./pages/products/products.component').then((c => c.ProductsComponent)), title: "Products" },
  { path: "product-detials", loadComponent: () => import('./pages/products-detailes/products-detailes.component').then((c => c.ProductsDetailesComponent)), title: "Product-detailes" }
];
