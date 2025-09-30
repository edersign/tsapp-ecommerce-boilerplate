import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const { data: products } = useProducts();

  return (
    <div>
      <h1>Produtos</h1>
      <div>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}