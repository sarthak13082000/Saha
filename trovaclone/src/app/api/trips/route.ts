import { NextResponse } from 'next/server'

export async function GET() {
  const trips = [
    { id: 'bali-escape', title: 'Bali Escape', destination: 'Bali, Indonesia', startDate: '2025-11-05', durationDays: 8, priceUsd: 2199 },
    { id: 'iceland-adventure', title: 'Iceland Adventure', destination: 'Iceland', startDate: '2025-09-12', durationDays: 7, priceUsd: 2799 },
    { id: 'japan-discovery', title: 'Japan Discovery', destination: 'Japan', startDate: '2026-03-20', durationDays: 10, priceUsd: 3499 },
  ]
  return NextResponse.json({ trips })
}
