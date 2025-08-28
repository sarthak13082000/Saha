import { NextResponse } from 'next/server'

const sample = {
  title: 'Sample Trip',
  destination: 'Sample Destination',
  description: 'A wonderful group journey exploring highlights and hidden gems.',
  priceUsd: 2499,
  startDates: ['2025-10-01', '2026-01-15'],
  itinerary: [
    { day: 1, title: 'Arrival & Welcome', description: 'Arrive and meet your group.' },
    { day: 2, title: 'City Highlights', description: 'Guided tour and local cuisine.' },
    { day: 3, title: 'Nature Escape', description: 'Outdoor adventure and relaxation.' },
  ],
}

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const { slug } = params
  return NextResponse.json({ id: slug, ...sample })
}
