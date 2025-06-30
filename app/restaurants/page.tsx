import { supabase } from '@/lib/supabase'

interface Restaurant {
  id: number
  name: string
}

export default async function RestaurantsPage() {
  const { data, error } = await supabase
    .from('restaurants')
    .select('id, name')
    .order('name')

  if (error) {
    console.error('Failed to fetch restaurants:', error.message)
    return <p>Unable to load restaurants.</p>
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Restaurants</h1>
      <ul className="list-disc pl-6 space-y-1">
        {data && data.length > 0 ? (
          data.map((restaurant: Restaurant) => (
            <li key={restaurant.id}>{restaurant.name}</li>
          ))
        ) : (
          <li>No restaurants found.</li>
        )}
      </ul>
    </div>
  )
}
