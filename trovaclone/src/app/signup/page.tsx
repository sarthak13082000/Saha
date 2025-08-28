export default function SignupPage() {
  return (
    <div className="container-responsive py-10 max-w-md">
      <h1 className="text-3xl font-bold">Create your account</h1>
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
          <label className="text-sm font-medium">Password</label>
          <input type="password" className="mt-1 w-full border rounded-md px-3 py-2" />
        </div>
        <button className="btn-primary w-full">Sign up</button>
      </form>
    </div>
  )
}
