export default function HostApplyPage() {
  return (
    <div className="container-responsive py-10 max-w-2xl">
      <h1 className="text-3xl font-bold">Apply to host</h1>
      <p className="mt-2 text-gray-600">Tell us about your audience and expertise.</p>
      <form className="mt-6 space-y-4">
        <div>
          <label className="text-sm font-medium">Name</label>
          <input className="mt-1 w-full border rounded-md px-3 py-2" />
        </div>
        <div>
          <label className="text-sm font-medium">Email</label>
          <input type="email" className="mt-1 w-full border rounded-md px-3 py-2" />
        </div>
        <div>
          <label className="text-sm font-medium">Audience size</label>
          <input className="mt-1 w-full border rounded-md px-3 py-2" />
        </div>
        <button className="btn-primary">Submit application</button>
      </form>
    </div>
  )
}
