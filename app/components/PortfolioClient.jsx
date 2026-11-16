'use client'

import { useMemo, useState } from 'react'
import { projects } from '../lib/projects'
import { ProjectCard } from './FeaturedWorkSection'
import { CtaBand, PageHero, StatRow } from './ui'
import Reveal from './Reveal'

const regionOf = (location) => {
  if (/saudi/i.test(location)) return 'Saudi Arabia'
  if (/india|kerala/i.test(location)) return 'India'
  if (/dubai|uae|emirates/i.test(location)) return 'UAE'
  return 'Other'
}

export default function PortfolioClient() {
  const regions = useMemo(() => {
    const set = new Set(projects.map((p) => regionOf(p.location)))
    return ['All', ...['UAE', 'India', 'Saudi Arabia', 'Other'].filter((r) => set.has(r))]
  }, [])
  const [region, setRegion] = useState('All')

  const list = region === 'All' ? projects : projects.filter((p) => regionOf(p.location) === region)

  return (
    <>
      <PageHero
        eyebrow="Our work"
        title={
          <>
            Success stories and{' '}
            <span className="text-muted">live projects</span>
          </>
        }
        intro="Websites and platforms we designed and built for businesses in hospitality, healthcare, retail and media. Every project below is live — open any card to visit it."
      />

      <div className="shell">
        <StatRow
          stats={[
            [`${projects.length}`, 'Live projects shown'],
            ['8+', 'Industries'],
            ['3', 'Countries'],
            ['2015', 'Building since'],
          ]}
        />
      </div>

      <section className="py-16 md:py-24" aria-label="Projects">
        <div className="shell">
          <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:px-0" role="tablist" aria-label="Filter by region">
            {regions.map((r) => {
              const count = r === 'All' ? projects.length : projects.filter((p) => regionOf(p.location) === r).length
              const active = r === region
              return (
                <button
                  key={r}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setRegion(r)}
                  className={`inline-flex h-10 shrink-0 items-center gap-2 rounded-full border px-4 text-sm transition-colors duration-150 ${
                    active ? 'border-ink bg-ink text-white' : 'border-ink/15 bg-card text-ink hover:border-ink/35'
                  }`}
                >
                  {r}
                  <span className={`font-mono text-xs tabular-nums ${active ? 'text-white/60' : 'text-muted'}`}>{count}</span>
                </button>
              )
            })}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
            {list.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 3) * 60}>
                <ProjectCard project={project} priority={i < 2} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to build your online presence?"
        text="From concept to launch, we help businesses create websites that look sharp, load fast and bring in customers."
      />
    </>
  )
}
