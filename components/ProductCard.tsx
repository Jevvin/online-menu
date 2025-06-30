import Image from 'next/image';

export interface ProductCardProps {
  name: string;
  image: string;
  price: number;
}

export default function ProductCard({ name, image, price }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center space-y-2">
      <Image
        src={image}
        alt={name}
        width={128}
        height={128}
        className="w-32 h-32 object-cover rounded"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm font-medium">${price.toFixed(2)}</p>
    </div>
  );
}
