import Image from 'next/image'
import Link from 'next/link'
import { navLinks, site } from '../lib/site'

const serviceLinks = ['Web development', 'Software development', 'App development', 'Digital marketing', 'VoIP solutions']

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="on-dark bg-ink text-white">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" aria-label="Flydevs Global home" className="inline-block rounded-lg bg-paper px-3 py-2">
            <Image src="/fdlogo-1.avif" alt="Flydevs Global" width={1390} height={396} className="h-8 w-auto" />
          </Link>
          <p className="mt-5 max-w-xs text-[15px] leading-6 text-white/60">
            Turning forward-thinking ideas into working products with dependable technology and design that scales.
          </p>
        </div>

        <nav aria-label="Company">
          <h2 className="text-sm font-medium text-white">Company</h2>
          <ul className="mt-4 space-y-3">
            {[...navLinks.filter((l) => l.href !== '/'), { name: 'Contact', href: '/contact' }].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[15px] text-white/60 transition-colors duration-150 hover:text-white">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="text-sm font-medium text-white">Services</h2>
          <ul className="mt-4 space-y-3">
            {serviceLinks.map((s) => (
              <li key={s}>
                <Link href="/services" className="text-[15px] text-white/60 transition-colors duration-150 hover:text-white">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-medium text-white">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-[15px] text-white/60">
            <li>
              <a href={`mailto:${site.email}`} className="break-all transition-colors duration-150 hover:text-white">
                {site.email}
              </a>
            </li>
            {site.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="tabular-nums transition-colors duration-150 hover:text-white">
                  {p.display}
                </a>
              </li>
            ))}
            <li>Dubai, UAE · Kochi, India</li>
          </ul>
        </div>
      </div>

      <div className="shell flex flex-col gap-2 border-t border-white/10 py-6 text-[13px] text-white/45 sm:flex-row sm:justify-between">
        <span>© {year} Flydevs Global. All rights reserved.</span>
        <span>Designed and built in Kochi and Dubai</span>
      </div>

      <div className="overflow-hidden bg-lime py-5 text-ink" aria-hidden>
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <span key={k} className="flex shrink-0 items-center whitespace-nowrap">
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="flex items-center text-[clamp(1.5rem,3.5vw,2.5rem)] font-medium tracking-[-0.03em]">
                  <span className="px-6">Flydevs Global</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-ink" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
