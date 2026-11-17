import Image from 'next/image'
import { Check } from 'lucide-react'
import { ButtonLink, SectionHeading } from './ui'
import Reveal from './Reveal'

const services = [
  {
    title: 'Web development',
    desc: 'Clean code and careful UX for websites that load fast and turn visitors into enquiries.',
    items: ['Custom web applications', 'Marketing landing pages', 'Responsive design', 'Third-party integrations'],
    image: '/web.avif',
  },
  {
    title: 'Software development',
    desc: 'Scalable, secure software shaped around how your business runs — from MVP to enterprise platform.',
    items: ['SaaS products', 'API design & integration', 'Cloud infrastructure', 'Maintenance & support'],
    image: '/softdev.avif',
  },
  {
    title: 'App development',
    desc: 'Fast, dependable mobile apps for iOS and Android that people keep coming back to.',
    items: ['iOS & Android apps', 'Flutter cross-platform', 'App store optimisation', 'Push & analytics'],
    image: '/appdev.avif',
  },
  {
    title: 'Digital marketing',
    desc: 'Data-led campaigns that grow your audience and bring in qualified leads.',
    items: ['SEO', 'Social media management', 'Paid ads & campaigns', 'Content & email'],
    image: '/digimarket.avif',
  },
  {
    title: 'VoIP solutions',
    desc: 'Business phone systems that modernise how your team communicates and cut running costs.',
    items: ['Cloud PBX setup', 'SIP trunking', 'Call centre integration', '24/7 technical support'],
    image: '/volp.avif',
  },
  {
    title: 'Branding',
    desc: 'Identity, voice and guidelines that hold together across every touchpoint.',
    items: ['Logo & brand identity', 'Brand guidelines', 'Social media kit', 'Naming & copywriting'],
    image: '/branding.avif',
  },
]

export function ServiceCard({ service, index }) {
  return (
    <article className="group flex h-full flex-col rounded-[20px] border border-ink/[0.08] bg-card p-2 transition-[border-color,background-color] duration-200 hover:border-ink/20 hover:bg-white">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[12px] bg-ink">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col px-4 pb-5 pt-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-xl font-medium tracking-[-0.02em]">{service.title}</h3>
          <span className="font-mono text-xs tabular-nums text-muted">{String(index + 1).padStart(2, '0')}</span>
        </div>
        <p className="mt-2 text-[15px] leading-6 text-body">{service.desc}</p>
        <ul className="mt-5 space-y-2.5 border-t border-ink/[0.08] pt-5">
          {service.items.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-ink">
              <span aria-hidden className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime">
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

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="services-title">
      <div className="shell">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Services"
            title={<span id="services-title">You have the ambition, we have the expertise</span>}
          />
          <ButtonLink href="/services" variant="secondary" className="shrink-0 self-start md:self-auto">
            All services
          </ButtonLink>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 [&>*]:min-w-0 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 60}>
              <ServiceCard service={s} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
