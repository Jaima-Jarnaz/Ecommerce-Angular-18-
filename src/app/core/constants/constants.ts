export const Collapsable_Menu_Items = [
  {
    title: 'Home',
    icon: 'home',
    url: '',
  },
  {
    title: 'Products',
    icon: 'product',
    url: '/products',
  },
  {
    title: 'Orders',
    icon: 'shopping',
    url: '',
  },
  {
    title: 'Payments',
    icon: 'money-collect',
    url: '',
  },
  {
    title: 'Reports',
    icon: 'bar-chart',
    url: '',
  },
];

interface TreeNode {
  title: string;
  icon?: string;
  link?: string;
  isActive?: boolean;
  children?: TreeNode[];
}

export const Tree_Data: TreeNode[] = [
  {
    title: 'Home',
    link: '#',
  },
  {
    title: 'Products',
    children: [
      {
        title: 'All Product',
        link: '/app/products',
        children: [
          { title: 'Create ', link: '#' },
          { title: 'Search ', link: '#' },
        ],
      },
      {
        title: 'Category List',
        link: '/app/product-category',
        children: [
          { title: 'Create', link: '/app/register-category' },
          {
            title: 'Shipment',
            children: [{ title: 'Status' }, { title: 'Tracking' }],
          },
          { title: 'Time ' },
        ],
      },
    ],
  },
  {
    title: 'Orders',
    children: [{ title: 'Search' }, { title: 'Graph' }],
  },
];
