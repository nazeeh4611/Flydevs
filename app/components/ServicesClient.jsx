import { Globe, Phone, Code2, Megaphone, Smartphone, Check } from 'lucide-react'
import { ButtonLink, CtaBand, Eyebrow, PageHero, SectionHeading, StatRow } from './ui'
import Reveal from './Reveal'

const services = [
  {
    title: 'Web development',
    desc: 'Modern, responsive websites built around your business — fast to load, easy to manage and ready to grow with you.',
    items: [
      'Corporate & business websites',
      'E-commerce development',
      'Custom web applications',
      'Landing pages',
      'CMS development',
      'UI/UX-focused design',
      'Performance optimisation',
      'SEO-friendly builds',
      'Maintenance & support',
    ],
    Icon: Globe,
  },
  {
    title: 'VoIP solutions',
    desc: 'End-to-end VoIP infrastructure for businesses of any size — clear voice, smart routing and enterprise-grade security.',
    items: [
      'VoIP infrastructure setup',
      'Softswitch installation',
      'Class 4 & Class 5 switches',
      'VoIP dialers',
      'SIP trunk configuration',
      'Call routing',
      'Billing system integration',
      'Server management',
      'Monitoring & support',
    ],
    Icon: Phone,
  },
  {
    title: 'Software development',
    desc: 'Custom software that automates busywork and supports your digital transformation — scalable, secure and maintainable.',
    items: [
      'Custom software',
      'Enterprise applications',
      'CRM & ERP solutions',
      'Business automation',
      'API development & integration',
      'Cloud-based applications',
      'Database design',
      'System integration',
      'Maintenance & support',
    ],
    Icon: Code2,
  },
  {
    title: 'Digital marketing',
    desc: 'Strategy-led marketing that raises visibility, brings in qualified leads and keeps customers engaged.',
    items: [
      'Search engine optimisation',
      'Social media marketing',
      'Google Ads (PPC)',
      'Meta advertising',
      'Content & email marketing',
      'Brand strategy',
      'Reputation management',
      'Analytics & reporting',
      'Conversion optimisation',
    ],
    Icon: Megaphone,
  },
  {
    title: 'Mobile app development',
    desc: 'Android and iOS apps that feel fast and familiar, built with modern cross-platform and native tooling.',
    items: [
      'Android & iOS apps',
      'Cross-platform apps',
      'Flutter & React Native',
      'UI/UX design',
      'API & Firebase integration',
      'Store deployment',
      'Maintenance & support',
    ],
    Icon: Smartphone,
  },
]

const whyChoose = [
  ['Trusted since 2015', 'A decade of shipping for clients across seven countries.'],
  ['Experienced team', 'Senior designers and engineers lead every project.'],
  ['End to end', 'Strategy, design, build, launch and support under one roof.'],
  ['Built for your business', 'Solutions shaped around how you actually work.'],
  ['Reliable support', 'Real people on hand after launch, not a ticket queue.'],
  ['Modern stack', 'Current tools and best practices, scalable and secure.'],
]

function ServiceRow({ service, index }) {
  const { Icon } = service
  return (
    <article className="grid gap-8 rounded-[20px] border border-ink/[0.08] bg-card p-6 sm:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:p-10">
      <div>
        <div className="flex items-center justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime">
            <Icon size={22} strokeWidth={1.5} aria-hidden />
          </span>
          <span className="font-mono text-xs tabular-nums text-muted lg:hidden">{String(index + 1).padStart(2, '0')}</span>
        </div>
        <h3 className="mt-6 text-[clamp(1.5rem,2.6vw,2rem)] font-medium leading-tight tracking-[-0.025em]">
          {service.title}
        </h3>
        <p className="mt-3 max-w-md text-[15px] leading-7 text-body">{service.desc}</p>
      </div>
      <div className="lg:border-l lg:border-ink/[0.08] lg:pl-16">
        <p className="hidden font-mono text-xs tabular-nums text-muted lg:block">
          {String(index + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
        </p>
        <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:mt-6">
          {service.items.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-[15px]">
              <span aria-hidden className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-raised">
                <Check size={12} strokeWidth={2.25} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default function ServicesClient() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Your trusted technology partner{' '}
            <span className="text-muted">since 2015</span>
          </>
        }
        intro="Reliable, high-performance solutions for B2B and B2C brands — from the website your customers see to the systems running behind it."
      >
        <ButtonLink href="/contact">Get started</ButtonLink>
        <ButtonLink href="/work" variant="secondary" arrow={false}>
          See our work
        </ButtonLink>
      </PageHero>

      <div className="shell">
        <StatRow
          stats={[
            ['10+', 'Years of experience'],
            ['5', 'Core service lines'],
            ['2', 'Partner companies'],
            ['24/7', 'Technical support'],
          ]}
        />
      </div>

      <section className="py-20 md:py-28" aria-labelledby="svc-title">
        <div className="shell">
          <SectionHeading
            eyebrow="What we do"
            title={<span id="svc-title">Digital solutions shaped around your business</span>}
          />
          <div className="mt-12 space-y-4 md:space-y-5">
            {services.map((s, i) => (
              <Reveal key={s.title}>
                <ServiceRow service={s} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 md:px-8" aria-labelledby="partner-title">
        <div className="on-dark mx-auto max-w-[1400px] rounded-[28px] bg-ink py-16 text-white md:py-24">
          <div className="shell">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
              <div>
                <Eyebrow dark>Strategic partnership</Eyebrow>
                <h2
                  id="partner-title"
                  className="mt-4 text-[clamp(2rem,4.6vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.04em]"
                >
                  Nacrosoft Technology <span className="text-lime">×</span> Flydevs Global
                </h2>
              </div>
              <p className="max-w-lg text-[17px] leading-7 text-white/65">
                Nacrosoft&apos;s depth in VoIP and software engineering, combined with Flydevs&apos; design and web
                capabilities — one team for the whole product.
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {whyChoose.map(([title, text]) => (
                <div key={title} className="bg-ink p-6 sm:p-8">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime text-ink">
                    <Check size={16} strokeWidth={2} aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-medium">{title}</h3>
                  <p className="mt-2 text-[15px] leading-6 text-white/60">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="pt-20 md:pt-28">
        <CtaBand
          title="Ready to get started?"
          text="From VoIP to web development, mobile apps to marketing — tell us what you need and we'll plan the right approach."
          label="Contact us"
        />
      </div>
    </>
  )
}
