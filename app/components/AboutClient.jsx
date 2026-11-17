import Image from 'next/image'
import { Target, Eye, Award, Users, TrendingUp, Shield, Lightbulb, Code2, Server, PhoneCall } from 'lucide-react'
import { ButtonLink, CtaBand, Eyebrow, PageHero, SectionHeading, StatRow } from './ui'
import Reveal from './Reveal'

const timeline = [
  { year: '2015', event: 'Started as a student startup in the computer engineering department at Majlis College' },
  { year: '2016', event: 'Registered as a private limited company, Nacrosoft Technology' },
  { year: '2018', event: 'Team grew to 300, with partnerships with multinational companies in 7 countries' },
  { year: '2020', event: 'Began operations in the Middle East from Dubai, with a new focus on web design and development' },
  { year: '2021', event: 'Rebranded as FlyHomies Associates to meet growing demand for digital services' },
  { year: '2022', event: 'Established as a major player, with top-tier brands among our clients' },
  { year: '2023', event: 'Continued growth with strong commercial results' },
  { year: '2024', event: 'Registered as a private limited company and opened an office on Willingdon Island, Kochi' },
]

const expertise = [
  { Icon: PhoneCall, title: 'VoIP solutions', desc: 'Complete VoIP setups — switches, servers and dialers' },
  { Icon: Server, title: 'VOS 3000', desc: 'Implementation and customisation of VOS 3000 systems' },
  { Icon: Shield, title: 'Dialer systems', desc: 'Itell, Pronto, Zem, Avon and custom dialers' },
  { Icon: Code2, title: 'Web development', desc: 'Usable, good-looking websites built with Flydevs' },
  { Icon: Users, title: 'Custom software', desc: 'Bespoke software for B2B and B2C brands' },
  { Icon: TrendingUp, title: 'Top-up services', desc: 'Top-up, CDR customising and VSP customising' },
  { Icon: Award, title: 'Quality assurance', desc: 'Test automation for dependable releases' },
  { Icon: Lightbulb, title: 'A decade of know-how', desc: 'Ten years of VoIP and software development' },
]

const team = [
  {
    image: '/founder.webp',
    name: 'Jabir',
    role: 'Founder & CEO',
    desc: 'Founder of FlyHomies Associates with over a decade of experience in digital transformation, enterprise solutions and modern technology systems. Leads the company with a clear focus on quality, innovation and long-term value.',
  },
  {
    image: '/co-founder.webp',
    name: 'Hanzitha Moideen',
    role: 'Co-founder',
    desc: 'Co-founder and the backbone of the technical division, with deep experience in cloud systems, DevOps automation and scalable architecture for enterprise platforms.',
  },
]

export function AboutClient() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Since 2015 — Nacrosoft &amp;{' '}
            <span className="text-muted">Flydevs</span>
          </>
        }
        intro="Building reliable, high-performance software for B2B and B2C brands — from a classroom startup to teams in Dubai and Kochi."
        aside={
          <div className="relative aspect-[3/2] w-full max-w-md lg:ml-auto overflow-hidden rounded-[20px] border border-ink/[0.08] bg-white">
            <Image src="/fd.avif" alt="Flydevs Global logo mark" fill priority sizes="(min-width: 1024px) 30vw, 90vw" className="object-contain" />
          </div>
        }
      >
        <ButtonLink href="/contact">Get in touch</ButtonLink>
        <ButtonLink href="/services" variant="secondary" arrow={false}>
          Our services
        </ButtonLink>
      </PageHero>

      {/* Story */}
      <section className="px-5 md:px-8" aria-labelledby="story-title">
        <div className="on-dark mx-auto max-w-[1400px] rounded-[28px] bg-ink py-16 text-white md:py-24">
          <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Eyebrow dark>Our story</Eyebrow>
              <h2 id="story-title" className="mt-4 text-[clamp(2rem,4.6vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.04em]">
                From a classroom to two countries
              </h2>
              <div className="mt-6 max-w-xl space-y-4 text-[17px] leading-7 text-white/65">
                <p>
                  Our journey began in 2015 as a startup inside the computer engineering classroom at Majlis College.
                  From those small beginnings we&apos;ve worked through plenty of challenges and milestones.
                </p>
                <p>
                  Nacrosoft provides end-to-end VoIP solutions — switches, servers, VOS 3000, dialers, routers, VoIP
                  websites, reseller products and tools including Switch VPS.
                </p>
                <p>
                  Together with FlyHomies Associates, we bring that technical depth to web design and development.
                </p>
              </div>
            </div>
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-ink-2">
              <Image src="/story.avif" alt="The Nacrosoft and Flydevs team story" fill sizes="(min-width: 1024px) 45vw, 90vw" className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28" aria-labelledby="history-title">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow="Our history" title={<span id="history-title">A decade of growth, one milestone at a time</span>} />
          </div>
          <ol className="relative border-l border-ink/10">
            {timeline.map((item, i) => (
              <Reveal as="li" key={item.year} delay={(i % 4) * 40} className="relative pb-10 pl-8 last:pb-0">
                <span
                  aria-hidden
                  className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ${i === timeline.length - 1 ? 'bg-lime ring-4 ring-lime/30' : 'bg-ink'}`}
                />
                <p className="font-mono text-sm tabular-nums text-muted">{item.year}</p>
                <p className="mt-2 text-lg leading-7 tracking-[-0.01em]">{item.event}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="shell grid gap-4 md:grid-cols-2 md:gap-5" aria-label="Mission and vision">
        {[
          { Icon: Target, title: 'Our mission', desc: 'To deliver reliable, high-performance software for B2B and B2C brands through solid test automation and innovative VoIP solutions.' },
          { Icon: Eye, title: 'Our vision', desc: 'To change how businesses present themselves online by joining a strong technical backbone with creative, usable design.' },
        ].map(({ Icon, title, desc }, i) => (
          <Reveal key={title} delay={i * 60}>
            <article className="h-full rounded-[20px] border border-ink/[0.08] bg-card p-8 md:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime">
                <Icon size={22} strokeWidth={1.5} aria-hidden />
              </span>
              <h3 className="mt-6 text-2xl font-medium tracking-[-0.02em]">{title}</h3>
              <p className="mt-3 max-w-md text-[17px] leading-7 text-body">{desc}</p>
            </article>
          </Reveal>
        ))}
      </section>

      {/* Expertise */}
      <section className="py-20 md:py-28" aria-labelledby="expertise-title">
        <div className="shell">
          <SectionHeading
            eyebrow="Our expertise"
            title={<span id="expertise-title">Complete VoIP solutions and software development</span>}
          />
          <div className="mt-12 grid grid-cols-1 gap-4 [&>*]:min-w-0 sm:grid-cols-2 lg:grid-cols-4 md:gap-5">
            {expertise.map(({ Icon, title, desc }, i) => (
              <Reveal key={title} delay={(i % 4) * 50}>
                <article className="group h-full rounded-[20px] border border-ink/[0.08] bg-card p-6 transition-[border-color,background-color] duration-200 hover:border-ink/20 hover:bg-white">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-raised transition-colors duration-200 group-hover:bg-lime">
                    <Icon size={20} strokeWidth={1.5} aria-hidden />
                  </span>
                  <h3 className="mt-5 text-lg font-medium tracking-[-0.01em]">{title}</h3>
                  <p className="mt-2 text-[15px] leading-6 text-body">{desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="px-5 md:px-8" aria-labelledby="numbers-title">
        <div className="on-dark mx-auto max-w-[1400px] rounded-[28px] bg-ink py-16 text-white md:py-24">
          <div className="shell">
            <Eyebrow dark>Growth in numbers</Eyebrow>
            <h2 id="numbers-title" className="mb-12 mt-4 max-w-2xl text-[clamp(2rem,4.6vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.04em]">
              From classroom startup to global <span className="text-lime">technology partner</span>
            </h2>
            <StatRow
              dark
              stats={[
                ['10+', 'Years of experience'],
                ['100+', 'Happy clients'],
                ['7+', 'Countries served'],
                ['100+', 'Projects completed'],
              ]}
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28" aria-labelledby="team-title">
        <div className="shell">
          <SectionHeading
            eyebrow="Our people"
            title={<span id="team-title">The people behind Nacrosoft &amp; Flydevs</span>}
            intro="The leaders driving the work across VoIP, software and design."
          />
          <div className="mt-12 grid grid-cols-1 gap-4 [&>*]:min-w-0 md:grid-cols-2 md:gap-5">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 60}>
                <article className="flex h-full flex-col gap-6 rounded-[20px] border border-ink/[0.08] bg-card p-2 sm:flex-row">
                  <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-[14px] bg-raised sm:w-44">
                    <Image src={m.image} alt={m.name} fill sizes="(min-width: 640px) 176px, 90vw" className="object-cover" />
                  </div>
                  <div className="px-4 pb-5 sm:px-0 sm:py-4 sm:pr-6">
                    <h3 className="text-xl font-medium tracking-[-0.02em]">{m.name}</h3>
                    <p className="mt-1 text-sm text-lime-deep">{m.role}</p>
                    <p className="mt-4 text-[15px] leading-6 text-body">{m.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to work with us?"
        text="From VoIP infrastructure to web design, let's build your next project together."
        label="Contact us"
      />
    </>
  )
}
