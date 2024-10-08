// import { Routes } from '@angular/router';

// export const routes: Routes = [
//   { path: '', redirectTo: '', pathMatch: 'full' },
//   {
//     path: 'page',
//     loadChildren: () =>import('./features/product-management-system/product-management-system.component'),
//   },

//   //   { path: '**', redirectTo: '/products' },
// ];

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'app',
    loadChildren: () =>
      import('./features/product-management-system/product.routes'),
  },

  // { path: '**', redirectTo: '/auth/login' },
];
