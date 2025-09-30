import { Product } from '../types/product';

export async function fetchProducts(): Promise<Product[]> {
  // Exemplo: busca de produtos mock
  return [
    {
      id: '1',
      name: 'Produto Exemplo',
      description: 'Descrição do produto',
      price: 199.9,
      image: '/product.png',
    },
  ];
}