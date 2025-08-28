export default function HelpPage() {
  return (
    <div className="container-responsive py-10">
      <h1 className="text-3xl font-bold">Help Center</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="rounded-lg border p-6">
          <div className="font-semibold">Booking & Payments</div>
          <p className="text-gray-600 mt-1">Refunds, installments, and payment methods.</p>
        </div>
        <div className="rounded-lg border p-6">
          <div className="font-semibold">Trip Logistics</div>
          <p className="text-gray-600 mt-1">Flights, packing lists, and travel insurance.</p>
        </div>
        <div className="rounded-lg border p-6">
          <div className="font-semibold">Hosting</div>
          <p className="text-gray-600 mt-1">Applications, requirements, and best practices.</p>
        </div>
        <div className="rounded-lg border p-6">
          <div className="font-semibold">Account</div>
          <p className="text-gray-600 mt-1">Profiles, notifications, and privacy.</p>
        </div>
      </div>
    </div>
  )
}
