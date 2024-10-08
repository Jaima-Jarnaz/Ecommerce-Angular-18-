export interface ProductList {
  productId: number;
  productSku: string;
  productName: string;
  productPrice: number;
  productShortName: string;
  productDescription: string;
  createdDate: string; // You can also use Date type if necessary
  deliveryTimeSpan: string;
  categoryId: number;
  productImageUrl: string;
  categoryName: string;
}

export interface CategoryList {
  categoryId: number;
  categoryName: string;
  parentCategoryId: number;
  userId: number | null;
}
