import Link from 'next/link'

export default function HostPage() {
  return (
    <div className="container-responsive py-10">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-bold">Host your own group trip</h1>
          <p className="mt-4 text-gray-600">Monetize your expertise and community by hosting curated group travel experiences.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/host/apply" className="btn-primary">Apply to host</Link>
            <Link href="/host/resources" className="inline-flex items-center px-4 py-2 rounded-md border border-gray-300">Learn more</Link>
          </div>
        </div>
        <div className="h-64 rounded-xl bg-gray-100" />
      </div>
    </div>
  )
}
