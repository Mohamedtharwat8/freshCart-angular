import { Routes } from '@angular/router';
import { UserLayoutComponent } from '../../layouts/user-layout/user-layout.component';
import { PRODUCTS_ROUTES } from './products/products.routes';


export const USER_ROUTES: Routes = [
  {
    path: "", component: UserLayoutComponent, children: PRODUCTS_ROUTES
  }
];
