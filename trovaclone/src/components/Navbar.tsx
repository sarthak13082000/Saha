"use client"
import Link from 'next/link'
import { useState } from 'react'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-gray-200">
      <div className="container-responsive py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary-700">Trovaclone</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/trips" className="hover:text-primary-700">Trips</Link>
          <Link href="/destinations" className="hover:text-primary-700">Destinations</Link>
          <Link href="/how-it-works" className="hover:text-primary-700">How it works</Link>
          <Link href="/host" className="hover:text-primary-700">Host</Link>
          <Link href="/help" className="hover:text-primary-700">Help</Link>
          <Link href="/blog" className="hover:text-primary-700">Blog</Link>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="text-sm">Log in</Link>
          <Link href="/signup" className="btn-primary text-sm">Sign up</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center p-2 rounded hover:bg-gray-100" aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200">
          <div className="container-responsive py-4 flex flex-col gap-3">
            <Link href="/trips">Trips</Link>
            <Link href="/destinations">Destinations</Link>
            <Link href="/how-it-works">How it works</Link>
            <Link href="/host">Host</Link>
            <Link href="/help">Help</Link>
            <Link href="/blog">Blog</Link>
            <div className="pt-2 flex gap-3">
              <Link href="/login">Log in</Link>
              <Link href="/signup" className="btn-primary">Sign up</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
