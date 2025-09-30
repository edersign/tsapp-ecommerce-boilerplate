import { Product } from '../types/product';
import { Link } from '@tanstack/react-router';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div>
      <img src={product.image} alt={product.name} width={160} />
      <h2>{product.name}</h2>
      <p>R$ {product.price}</p>
      <Link to={`/product/${product.id}`}>Ver detalhes</Link>
    </div>
  );
}