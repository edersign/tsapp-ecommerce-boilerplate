import { useCart } from '../store/cart';

export default function CartPage() {
  const { items, removeItem, clearCart } = useCart();

  if (!items.length) return <div>Carrinho vazio</div>;

  return (
    <div>
      <h1>Carrinho</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} width={60} />
            {item.name} - R$ {item.price}
            <button onClick={() => removeItem(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart}>Limpar carrinho</button>
    </div>
  );
}