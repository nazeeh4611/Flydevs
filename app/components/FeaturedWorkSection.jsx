import { ArrowUpRight } from 'lucide-react'
import { BrowserFrame, ButtonLink, SectionHeading } from './ui'
import Reveal from './Reveal'
import { featuredProjects } from '../lib/projects'

export function ProjectCard({ project, dark = false, large = false, priority = false }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex h-full flex-col rounded-[20px] border p-2 transition-[border-color,background-color] duration-200 ${
        dark
          ? 'on-dark border-white/[0.08] bg-ink-2 hover:border-white/20 hover:bg-ink-3'
          : 'border-ink/[0.08] bg-card hover:border-ink/20 hover:bg-white'
      }`}
    >
      <BrowserFrame
        src={project.image}
        alt={`${project.title} website`}
        url={project.link}
        dark={dark}
        priority={priority}
        sizes={large ? '(min-width: 1024px) 1180px, 100vw' : '(min-width: 768px) 50vw, 100vw'}
        className="rounded-[12px]"
        imageClassName="transition-transform duration-500 ease-out group-hover:scale-[1.02]"
      />

      <div className="flex flex-1 flex-col px-4 pb-4 pt-5 sm:px-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className={`text-xl font-medium tracking-[-0.02em] ${dark ? 'text-white' : 'text-ink'}`}>
              {project.title}
            </h3>
            <p className={`mt-1 text-sm ${dark ? 'text-white/50' : 'text-muted'}`}>
              {project.category} · {project.location} · {project.year}
            </p>
          </div>
          <span
            aria-hidden
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
              dark ? 'bg-white/[0.06] text-white group-hover:bg-lime group-hover:text-ink' : 'bg-raised text-ink group-hover:bg-lime'
            }`}
          >
            <ArrowUpRight size={18} strokeWidth={1.75} />
          </span>
        </div>

        <p className={`mt-4 max-w-2xl text-[15px] leading-6 ${dark ? 'text-white/65' : 'text-body'}`}>
          {project.description}
        </p>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className={`rounded-md px-2 py-1 text-xs ${dark ? 'bg-white/[0.06] text-white/70' : 'bg-raised text-body'}`}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  )
}

export default function FeaturedWorkSection() {
  return (
    <section className="on-dark bg-ink py-20 md:py-28" aria-labelledby="work-title">
      <div className="shell">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            dark
            eyebrow="Selected work"
            title={<span id="work-title">Live sites we designed and built</span>}
            intro="A few recent launches for hospitality, media and marketing brands in Dubai and Kerala."
          />
          <ButtonLink href="/work" variant="ghostDark" className="shrink-0 self-start md:self-auto">
            All projects
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-5">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 60}>
              <ProjectCard project={project} dark />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
