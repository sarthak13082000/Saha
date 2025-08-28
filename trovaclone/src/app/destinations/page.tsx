import Link from 'next/link'

export default function DestinationsPage() {
  const destinations = ['Bali', 'Japan', 'Italy', 'Peru', 'Iceland', 'Morocco']
  return (
    <div className="container-responsive py-10">
      <h1 className="text-3xl font-bold">Destinations</h1>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {destinations.map((d) => (
          <Link
            key={d}
            href={{ pathname: '/destinations/[slug]', query: { slug: d.toLowerCase() } }}
            className="h-32 rounded-lg bg-gray-100 flex items-center justify-center hover:shadow"
          >
            {d}
          </Link>
        ))}
      </div>
    </div>
  )
}
