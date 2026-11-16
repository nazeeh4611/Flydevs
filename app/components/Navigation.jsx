'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { navLinks } from '../lib/site'

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Hairline + solid background once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock page scroll and allow Escape while the mobile menu is open
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen])

  const close = () => setIsOpen(false)
  const isActive = (href) => (href === '/' ? pathname === '/' : pathname?.startsWith(href))

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-200 ${
          scrolled || isOpen
            ? 'border-b border-ink/[0.08] bg-paper/90 backdrop-blur-md'
            : 'border-b border-transparent bg-paper/0'
        }`}
      >
        <nav className="shell flex h-[72px] items-center justify-between" aria-label="Main">
          <Link href="/" onClick={close} className="-m-1 p-1" aria-label="Flydevs Global home">
            <Image
              src="/fdlogo-1.avif"
              alt="Flydevs Global"
              width={1390}
              height={396}
              className="h-9 w-auto md:h-10"
              priority
            />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`rounded-full px-4 py-2 text-[15px] transition-colors duration-150 ${
                    active ? 'bg-raised font-medium text-ink' : 'text-body hover:text-ink'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
            <Link
              href="/contact"
              aria-current={isActive('/contact') ? 'page' : undefined}
              className="ml-3 inline-flex h-10 items-center rounded-full bg-ink px-5 text-[15px] font-medium text-white transition-colors duration-150 hover:bg-ink-3"
            >
              Start a project
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full md:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} strokeWidth={1.75} /> : <Menu size={24} strokeWidth={1.75} />}
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-[72px] z-40 bg-paper transition-[opacity,transform] duration-200 ease-out md:hidden ${
          isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        <nav className="shell flex h-full flex-col pb-8 pt-4" aria-label="Mobile">
          {[...navLinks, { name: 'Contact', href: '/contact' }].map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                aria-current={active ? 'page' : undefined}
                className="flex items-center justify-between border-b border-ink/[0.08] py-5"
              >
                <span className={`text-2xl tracking-[-0.02em] ${active ? 'font-medium text-ink' : 'text-body'}`}>
                  {link.name}
                </span>
                {active ? (
                  <span aria-hidden className="h-2 w-2 rounded-full bg-lime ring-4 ring-lime/30" />
                ) : (
                  <ArrowRight size={20} strokeWidth={1.5} className="text-muted" aria-hidden />
                )}
              </Link>
            )
          })}
          <Link
            href="/contact"
            onClick={close}
            className="mt-auto flex h-14 items-center justify-center rounded-full bg-ink text-base font-medium text-white"
          >
            Start a project
          </Link>
        </nav>
      </div>
    </>
  )
}
