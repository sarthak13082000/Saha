import Link from 'next/link'
import { listTrips } from '@/services/trips'

export default async function TripsPage() {
  const trips = await listTrips()

  return (
    <div className="container-responsive py-10">
      <h1 className="text-3xl font-bold">Trips</h1>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trips.map((t) => (
          <Link key={t.id} href={`/trips/${t.id}`} className="block rounded-lg border p-4 hover:shadow">
            <div className="h-40 bg-gray-100 rounded mb-3" />
            <div className="text-lg font-semibold">{t.title}</div>
            <div className="text-sm text-gray-600">{t.destination}</div>
            <div className="mt-2 text-sm">{t.durationDays} days · From ${t.priceUsd}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
