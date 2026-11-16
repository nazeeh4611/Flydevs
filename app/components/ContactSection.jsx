import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { ButtonLink, Eyebrow } from './ui'
import { site } from '../lib/site'

export default function ContactSection() {
  const contacts = [
    { label: 'Email us', value: site.email, href: `mailto:${site.email}`, Icon: Mail },
    ...site.phones.map((p) => ({ label: `Call ${p.label}`, value: p.display, href: p.href, Icon: Phone })),
  ]

  return (
    <section className="px-3 py-20 sm:px-4 md:py-28" aria-labelledby="contact-title">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[28px] bg-lime">
        <div className="shell grid gap-12 py-16 md:py-24 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
          <div>
            <Eyebrow>Available for new projects</Eyebrow>
            <h2
              id="contact-title"
              className="mt-4 text-[clamp(2.5rem,6.4vw,5rem)] font-bold leading-[1] tracking-[-0.045em] text-ink"
            >
              Interested in working{' '}
              <span className="text-ink/55">together?</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-ink/70">
              Tell us what you&apos;re building. We&apos;ll reply within one working day with next steps and a rough
              timeline.
            </p>
            <ButtonLink href="/contact" className="mt-10">
              Start a project
            </ButtonLink>
          </div>

          <ul className="divide-y divide-ink/15 border-y border-ink/15">
            {contacts.map(({ label, value, href, Icon }) => (
              <li key={href}>
                <a href={href} className="group flex items-center gap-4 py-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink/[0.08]">
                    <Icon size={18} strokeWidth={1.5} aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[13px] text-ink/60">{label}</span>
                    <span className="block truncate text-lg font-medium tracking-[-0.01em]">{value}</span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.75}
                    aria-hidden
                    className="shrink-0 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <figure className="shell mt-16 text-center">
        <blockquote className="mx-auto max-w-3xl text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.25] tracking-[-0.02em] text-ink">
          &ldquo;Design creates culture. Culture shapes values. Values determine the future.&rdquo;
        </blockquote>
        <figcaption className="mt-4 text-sm text-muted">Robert L. Peters</figcaption>
      </figure>
    </section>
  )
}
