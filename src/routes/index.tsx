import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />, 
  },
  {
    path: '/product',
    element: <Product />, 
  },
  {
    path: '/cart',
    element: <Cart />, 
  },
  {
    path: '/checkout',
    element: <Checkout />, 
  },
]);

export default router;