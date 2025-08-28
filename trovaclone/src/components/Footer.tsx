import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="container-responsive py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div className="col-span-2 sm:col-span-1">
          <div className="text-lg font-bold text-primary-700">Trovaclone</div>
          <p className="mt-2 text-gray-600">Discover and host group trips worldwide.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Company</div>
          <ul className="space-y-1 text-gray-600">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/press">Press</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Explore</div>
          <ul className="space-y-1 text-gray-600">
            <li><Link href="/trips">Trips</Link></li>
            <li><Link href="/destinations">Destinations</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Support</div>
          <ul className="space-y-1 text-gray-600">
            <li><Link href="/help">Help Center</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/terms">Terms</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Host</div>
          <ul className="space-y-1 text-gray-600">
            <li><Link href="/host">Become a host</Link></li>
            <li><Link href="/host/resources">Resources</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="container-responsive py-4 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-gray-500">
          <div>© {new Date().getFullYear()} Trovaclone, Inc.</div>
          <div className="flex gap-4">
            <Link href="/privacy">Privacy</Link>
            <Link href="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
