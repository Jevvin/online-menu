import Link from 'next/link';

const restaurants = [
  { name: 'Restaurante A', slug: 'restaurante-a' },
  { name: 'Restaurante B', slug: 'restaurante-b' },
];

export default function Home() {
  return (
    <main className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Directorio de Restaurantes</h1>
      <ul className="space-y-2">
        {restaurants.map((r) => (
          <li key={r.slug}>
            <Link className="text-blue-600 hover:underline" href={`/${r.slug}/menu`}>
              {r.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
