export default function HowItWorksPage() {
  return (
    <div className="container-responsive py-10">
      <h1 className="text-3xl font-bold">How it works</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {[
          { title: 'Discover trips', desc: 'Browse curated group itineraries by trusted hosts.' },
          { title: 'Book with confidence', desc: 'Secure checkout and flexible payment options.' },
          { title: 'Travel together', desc: 'Meet your group and explore amazing places.' },
        ].map((s) => (
          <div key={s.title} className="rounded-lg border p-6">
            <div className="text-lg font-semibold">{s.title}</div>
            <p className="mt-2 text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
