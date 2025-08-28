export default function AccountPage() {
  return (
    <div className="container-responsive py-10">
      <h1 className="text-3xl font-bold">Your account</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="rounded-lg border p-6">
          <div className="font-semibold">Profile</div>
          <p className="text-gray-600 text-sm">Update your personal details and preferences.</p>
        </div>
        <div className="rounded-lg border p-6">
          <div className="font-semibold">Trips</div>
          <p className="text-gray-600 text-sm">View your upcoming and past trips.</p>
        </div>
        <div className="rounded-lg border p-6">
          <div className="font-semibold">Payments</div>
          <p className="text-gray-600 text-sm">Manage payment methods and invoices.</p>
        </div>
      </div>
    </div>
  )
}
