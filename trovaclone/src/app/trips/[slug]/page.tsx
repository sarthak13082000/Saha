import Link from 'next/link'
import { getTrip } from '@/services/trips'

export default async function TripDetailsPage({ params }: { params: { slug: string } }) {
  const trip = await getTrip(params.slug)
  if (!trip) return <div className="container-responsive py-10">Trip not found</div>

  return (
    <div>
      <div className="bg-gray-100">
        <div className="container-responsive py-10">
          <div className="text-sm text-gray-600"><Link href="/trips">Trips</Link> / {trip.title}</div>
          <h1 className="mt-2 text-3xl font-bold">{trip.title}</h1>
          <div className="text-gray-700">{trip.destination}</div>
        </div>
      </div>

      <div className="container-responsive py-10 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="prose max-w-none">
            <p>{trip.description}</p>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Itinerary</h2>
            <ol className="mt-3 space-y-3">
              {trip.itinerary.map((i) => (
                <li key={i.day} className="rounded border p-4">
                  <div className="font-medium">Day {i.day}: {i.title}</div>
                  <div className="text-gray-600 text-sm">{i.description}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <aside className="lg:col-span-1">
          <div className="rounded-lg border p-4 sticky top-4">
            <div className="text-2xl font-bold">${trip.priceUsd}</div>
            <div className="text-sm text-gray-600">per person</div>
            <div className="mt-4">
              <label className="text-sm font-medium">Start date</label>
              <select className="mt-1 w-full border rounded-md px-3 py-2">
                {trip.startDates.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </div>
            <button className="mt-4 btn-primary w-full">Reserve a spot</button>
          </div>
        </aside>
      </div>
    </div>
  )
}
