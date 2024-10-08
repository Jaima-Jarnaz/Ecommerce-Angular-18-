import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'app',
    loadChildren: () =>
      import('./features/product-management-system/product.routes'),
  },

  //   { path: '**', redirectTo: '/products' },
];
