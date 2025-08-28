export default function LoginPage() {
  return (
    <div className="container-responsive py-10 max-w-md">
      <h1 className="text-3xl font-bold">Log in</h1>
      <form className="mt-6 space-y-4">
        <div>
          <label className="text-sm font-medium">Email</label>
          <input type="email" className="mt-1 w-full border rounded-md px-3 py-2" />
        </div>
        <div>
          <label className="text-sm font-medium">Password</label>
          <input type="password" className="mt-1 w-full border rounded-md px-3 py-2" />
        </div>
        <button className="btn-primary w-full">Continue</button>
      </form>
    </div>
  )
}
