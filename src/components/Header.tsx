import { Link } from '@tanstack/react-router';
import { useCart } from '../store/cart';

export default function Header() {
  const { items } = useCart();
  return (
    <header style={{display: 'flex', gap: 16, alignItems: 'center', padding: '16px 0'}}>
      <Link to="/">Home</Link>
      <Link to="/cart">Carrinho ({items.length})</Link>
      <Link to="/checkout">Checkout</Link>
    </header>
  );
}