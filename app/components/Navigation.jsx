'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Navigation() {
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'What we did!', href: '/work' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f7f5f2]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1 text-black">
          <Image
            src="/fdlogo-1.avif"
            alt="Company Logo"
            width={190} // Reduced from 200
            height={80} // Reduced from 50
            className="object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[10px] uppercase tracking-[0.2em] transition-colors ${
                  isActive
                    ? 'text-black font-semibold border-b-2 border-black pb-1'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            )
          })}

          <Link
            href="/contact"
            className="bg-black text-white px-5 py-2.5 rounded-full text-[10px] tracking-[0.2em] uppercase transition-all duration-300 hover:bg-zinc-800"
          >
            Let&apos;s Talk
          </Link>
        </div>

        <button className="md:hidden flex flex-col gap-1.5">
          <span className="w-5 h-[1.5px] bg-black"></span>
          <span className="w-5 h-[1.5px] bg-black"></span>
          <span className="w-5 h-[1.5px] bg-black"></span>
        </button>
      </div>
    </header>
  )
}