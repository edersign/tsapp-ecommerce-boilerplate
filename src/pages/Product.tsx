import { useParams } from '@tanstack/react-router';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../store/cart';

export default function ProductPage() {
  const { id } = useParams();
  const { data: products } = useProducts();
  const product = products?.find((p) => p.id === id);
  const addItem = useCart((state) => state.addItem);

  if (!product) return <div>Produto não encontrado</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} width={320} />
      <p>{product.description}</p>
      <strong>R$ {product.price}</strong>
      <button onClick={() => addItem(product)}>Adicionar ao carrinho</button>
    </div>
  );
}