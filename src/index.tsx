import { createRouter } from '@tanstack/react-router';
import HomePage from '../pages/Home';
import ProductPage from '../pages/Product';
import CartPage from '../pages/Cart';
import CheckoutPage from '../pages/Checkout';

export const router = createRouter({
  routeTree: {
    children: [
      {
        path: '/',
        component: HomePage,
      },
      {
        path: '/product/:id',
        component: ProductPage,
      },
      {
        path: '/cart',
        component: CartPage,
      },
      {
        path: '/checkout',
        component: CheckoutPage,
      },
    ],
  },
});