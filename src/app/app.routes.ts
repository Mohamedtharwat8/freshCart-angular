import { Routes } from '@angular/router';
import { AUTH_ROUTES } from './modules/auth/auth.routes';
import { USER_ROUTES } from './modules/user/user.routes';

export const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.routes').then(m => m.AUTH_ROUTES) },
  { path: 'user', loadChildren: () => import('./modules/user/user.routes').then(m => m.USER_ROUTES) },
];
