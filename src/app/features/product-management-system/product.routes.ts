import { Route } from '@angular/router';

export default [
  //   {
  //     path: 'products',
  //     component: ProductManagementSystemComponent,

  //     // children: [
  //     //   {
  //     //     path: 'welcome',
  //     //     loadChildren: () =>
  //     //       import('../../../../features/welcome/welcome.routes').then(
  //     //         (m) => m.WELCOME_ROUTES
  //     //       ),
  //     //   },

  //     // ],
  //   },
  {
    path: 'products',
    title: 'products',
    loadComponent: () =>
      import('./product-management-system.component').then(
        (c) => c.ProductManagementSystemComponent
      ),
  },
  {
    path: 'create-product',
    title: 'create-product',
    loadComponent: () =>
      import('./create-product/create-product.component').then(
        (c) => c.CreateProductComponent
      ),
  },
  {
    path: 'product-category',
    title: 'product-category',
    loadComponent: () =>
      import('./product-category/product-category.component').then(
        (c) => c.ProductCategoryComponent
      ),
  },
  {
    path: 'register-category',
    title: 'register-category',
    loadComponent: () =>
      import('./register-category/register-category.component').then(
        (c) => c.RegisterCategoryComponent
      ),
  },
] as Route[];
