import { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Menú',
};

export async function generateStaticParams() {
  return [{ restaurant: 'restaurante-a' }, { restaurant: 'restaurante-b' }];
}

export default async function RestaurantMenu({ params }: { params: Promise<{ restaurant: string }> }) {
  const { restaurant } = await params;

  const menu = [
    { name: 'Hamburguesa', image: 'https://via.placeholder.com/150', price: 10 },
    { name: 'Pizza', image: 'https://via.placeholder.com/150', price: 12 },
  ];

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Menú de {restaurant}</h1>
      <div className="grid grid-cols-2 gap-4">
        {menu.map((item) => (
          <ProductCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}
