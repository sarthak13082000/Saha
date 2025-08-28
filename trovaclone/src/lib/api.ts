export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export async function apiFetch<T>(path: string, init?: RequestInit & { method?: HttpMethod }) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || ''
  const res = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
    cache: 'no-store',
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`API error ${res.status}: ${text}`)
  }
  try {
    return (await res.json()) as T
  } catch {
    return undefined as unknown as T
  }
}
