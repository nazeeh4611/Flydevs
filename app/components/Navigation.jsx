'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'What We Did!', href: '/work' },
    { name: 'About', href: '/about' },
  ]

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f7f5f2]/95 backdrop-blur-xl border-b border-zinc-200">
        <div className="max-w-7xl mx-auto h-[72px] px-5 md:px-12 flex items-center justify-between">

          <Link href="/" onClick={closeMenu}>
            <Image
              src="/fdlogo-1.avif"
              alt="FlyDevs Global"
              width={190}
              height={70}
              className="w-[135px] md:w-[190px] h-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const active = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`uppercase tracking-[0.2em] text-[11px] transition-all duration-300 ${
                    active
                      ? 'text-black font-semibold'
                      : 'text-zinc-500 hover:text-black'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}

            <Link
              href="/contact"
              className="bg-black text-white px-6 py-3 rounded-full uppercase tracking-[0.2em] text-[11px] hover:bg-zinc-800 transition-colors"
            >
              Let&apos;s Talk
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden h-10 w-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={28} strokeWidth={1.8} />
            ) : (
              <Menu size={28} strokeWidth={1.8} />
            )}
          </button>

        </div>
      </header>

      <div
        className={`fixed top-[72px] left-0 right-0 z-40 bg-[#f7f5f2] md:hidden transition-all duration-300 ${
          isOpen
            ? 'translate-y-0 opacity-100 visible'
            : '-translate-y-5 opacity-0 invisible'
        }`}
      >
        <nav className="px-7 py-4">

          {navLinks.map((link) => {
            const active = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="group flex items-center justify-between border-b border-zinc-200 py-6"
              >
                <span
                  className={`text-[18px] font-medium transition-colors ${
                    active
                      ? 'text-[#5AD50E]'
                      : 'text-zinc-800 group-hover:text-black'
                  }`}
                >
                  {link.name}
                </span>

                <span
                  className={`text-xl transition-all ${
                    active
                      ? 'text-[#5AD50E]'
                      : 'text-zinc-300 group-hover:text-black group-hover:translate-x-1'
                  }`}
                >
                  →
                </span>
              </Link>
            )
          })}

          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-8 flex h-14 w-full items-center justify-center rounded-full bg-black text-white uppercase tracking-[0.18em] text-sm font-medium transition-all duration-300 hover:bg-zinc-800"
          >
            Let&apos;s Talk
          </Link>

        </nav>
      </div>
    </>
  )
}