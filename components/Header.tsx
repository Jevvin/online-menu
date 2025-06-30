'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow-md">
      <h1 className="text-xl font-bold">Online Menu</h1>
      <nav className="flex gap-4">
        <Link href="/signup" className="text-blue-600 hover:underline">
          Sign Up
        </Link>
        <Link href="/login" className="text-blue-600 hover:underline">
          Log In
        </Link>
      </nav>
    </header>
  )
}
