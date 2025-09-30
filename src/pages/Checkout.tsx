import { useCart } from '../store/cart';

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const total = items.reduce((sum, item) => sum + item.price, 0);

  if (!items.length) return <div>Adicione produtos ao carrinho para continuar</div>;

  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - R$ {item.price}
          </li>
        ))}
      </ul>
      <strong>Total: R$ {total}</strong>
      <br />
      <button onClick={clearCart}>Finalizar pedido</button>
    </div>
  );
}