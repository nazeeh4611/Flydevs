'use client'
import Link from 'next/link'


export default function Navigation() {
  return (
<header className="fixed top-0 left-0 right-0 z-50 bg-[#f7f5f2]/80 backdrop-blur-xl">      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
    <Link
  href="/"
  className="flex items-center gap-1 text-black"
>
  <span className="text-xl font-bold tracking-tight">
    FLYDEVS
  </span>
  <span className="text-xl text-gray-500 font-bold tracking-tight">
    GLOBAL
  </span>
</Link>

        <div className="hidden md:flex items-center gap-10">
          <a
            href="#work"
            className="text-[11px] uppercase tracking-[0.25em] text-black hover:text-gray-500 transition-colors"
          >
            Work
          </a>

          <a
            href="#services"
            className="text-[11px] uppercase tracking-[0.25em] text-black hover:text-gray-500 transition-colors"
          >
            Services
          </a>

          <a
            href="#about"
            className="text-[11px] uppercase tracking-[0.25em] text-black hover:text-gray-500 transition-colors"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-[11px] uppercase tracking-[0.25em] text-black hover:text-gray-500 transition-colors"
          >
            Contact
          </a>

          <button className="bg-black text-white px-6 py-3 rounded-full text-[11px] tracking-[0.2em] uppercase transition-all duration-300 hover:bg-zinc-800">
            Let&apos;s Talk
          </button>
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