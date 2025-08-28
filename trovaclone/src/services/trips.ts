import { apiFetch } from '@/lib/api'

export type TripSummary = {
  id: string
  title: string
  destination: string
  startDate: string
  durationDays: number
  priceUsd: number
}

export type Trip = {
  id: string
  title: string
  destination: string
  description: string
  itinerary: Array<{ day: number; title: string; description: string }>
  priceUsd: number
  startDates: string[]
}

export async function listTrips(): Promise<TripSummary[]> {
  const data = await apiFetch<{ trips: TripSummary[] }>(`/api/trips`)
  return data.trips
}

export async function getTrip(slug: string): Promise<Trip> {
  return apiFetch<Trip>(`/api/trips/${slug}`)
}
