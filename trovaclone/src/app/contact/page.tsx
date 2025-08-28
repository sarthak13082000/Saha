export default function ContactPage() {
  return (
    <div className="container-responsive py-10 max-w-xl">
      <h1 className="text-3xl font-bold">Contact</h1>
      <form className="mt-6 space-y-4">
        <div>
          <label className="text-sm font-medium">Email</label>
          <input type="email" className="mt-1 w-full border rounded-md px-3 py-2" />
        </div>
        <div>
          <label className="text-sm font-medium">Message</label>
          <textarea className="mt-1 w-full border rounded-md px-3 py-2" rows={4} />
        </div>
        <button className="btn-primary">Send</button>
      </form>
    </div>
  )
}
