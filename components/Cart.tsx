import ProductCard, { ProductCardProps } from './ProductCard';

export default function Cart() {
  const items: ProductCardProps[] = [];


  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Carrito</h2>
      <div className="grid grid-cols-2 gap-2">
        {items.map((item, idx) => (
          <ProductCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
}
