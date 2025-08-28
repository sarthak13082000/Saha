import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-primary-50 to-white">
        <div className="container-responsive py-16 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary-800">Travel together, made simple</h1>
            <p className="mt-4 text-lg text-gray-600">Discover curated group trips hosted by creators and experts around the world.</p>
            <div className="mt-6 flex gap-3">
              <Link href="/trips" className="btn-primary">Explore trips</Link>
              <Link href="/host" className="inline-flex items-center px-4 py-2 rounded-md border border-gray-300">Become a host</Link>
            </div>
          </div>
          <div className="mt-10 bg-white/70 backdrop-blur rounded-xl shadow p-4 sm:p-6">
            <form className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <input className="border rounded-md px-3 py-2" placeholder="Where to?" />
              <input className="border rounded-md px-3 py-2" placeholder="When" />
              <input className="border rounded-md px-3 py-2" placeholder="Duration" />
              <button className="btn-primary">Search</button>
            </form>
          </div>
        </div>
      </section>

      <section className="container-responsive py-14">
        <h2 className="text-2xl font-semibold">Popular destinations</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {['Bali', 'Iceland', 'Japan', 'Peru', 'Italy', 'Morocco', 'Costa Rica', 'Greece'].map((d) => (
            <Link key={d} href={`/destinations/${d.toLowerCase()}`} className="relative h-32 rounded-lg bg-gray-100 flex items-center justify-center text-primary-700 font-medium hover:shadow">
              {d}
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="container-responsive py-14">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <div className="mt-6 grid sm:grid-cols-3 gap-6">
            {[
              { title: 'Find a trip', desc: 'Browse curated group itineraries by trusted hosts.' },
              { title: 'Reserve your spot', desc: 'Secure your seat with flexible payments.' },
              { title: 'Travel together', desc: 'Meet new people and explore amazing places.' },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-lg shadow p-6">
                <div className="text-lg font-semibold">{s.title}</div>
                <p className="mt-2 text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
