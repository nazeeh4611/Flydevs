import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { hostOf } from '../lib/site'

/** Small section label: a dot and sentence-case text. */
export function Eyebrow({ children, dark = false, className = '' }) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-sm font-medium ${
        dark ? 'text-white/70' : 'text-body'
      } ${className}`}
    >
      <span
        aria-hidden
        className={`h-2 w-2 rounded-full ${dark ? 'bg-lime' : 'bg-ink'}`}
      />
      {children}
    </p>
  )
}

const buttonBase =
  'group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-medium transition-[background-color,color,border-color,transform] duration-150 ease-out active:scale-[0.98]'

const buttonVariants = {
  primary: 'bg-ink text-white hover:bg-ink-3',
  secondary: 'border border-ink/15 bg-card text-ink hover:border-ink/30 hover:bg-white',
  lime: 'bg-lime text-ink hover:bg-[#c9de3c]',
  light: 'bg-white text-ink hover:bg-paper',
  ghostDark: 'border border-white/15 text-white hover:border-white/35 hover:bg-white/5',
}

/** Link styled as a button. External links get an up-right arrow and open in a new tab. */
export function ButtonLink({ href, children, variant = 'primary', external = false, arrow = true, className = '' }) {
  const Icon = external ? ArrowUpRight : ArrowRight
  const content = (
    <>
      {children}
      {arrow && (
        <Icon
          size={18}
          strokeWidth={1.75}
          aria-hidden
          className="transition-transform duration-150 ease-out group-hover:translate-x-0.5"
        />
      )}
    </>
  )
  const cls = `${buttonBase} ${buttonVariants[variant]} ${className}`

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {content}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  )
}

/** Section heading block with optional eyebrow and intro. */
export function SectionHeading({ eyebrow, title, intro, dark = false, align = 'left', className = '' }) {
  const center = align === 'center'
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-4 text-[clamp(2rem,4.6vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.04em] ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-[17px] leading-7 ${center ? 'mx-auto' : ''} max-w-xl ${
            dark ? 'text-white/65' : 'text-body'
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  )
}

/**
 * Signature element: a shipped site shown in a browser window
 * with its live domain in the address bar.
 */
export function BrowserFrame({
  src,
  alt,
  url,
  dark = false,
  priority = false,
  sizes = '(min-width: 1024px) 50vw, 100vw',
  className = '',
  imageClassName = '',
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border ${
        dark ? 'border-white/10 bg-ink-3' : 'border-ink/10 bg-card'
      } ${className}`}
    >
      <div
        className={`flex h-9 items-center gap-3 border-b px-3 ${
          dark ? 'border-white/10' : 'border-ink/[0.07]'
        }`}
      >
        <div className="flex shrink-0 gap-1.5" aria-hidden>
          <span className={`h-2.5 w-2.5 rounded-full ${dark ? 'bg-white/15' : 'bg-ink/15'}`} />
          <span className={`h-2.5 w-2.5 rounded-full ${dark ? 'bg-white/15' : 'bg-ink/15'}`} />
          <span className={`h-2.5 w-2.5 rounded-full ${dark ? 'bg-white/15' : 'bg-ink/15'}`} />
        </div>
        {url && (
          <div
            className={`mx-auto flex h-6 min-w-0 max-w-[70%] items-center gap-1.5 rounded-md px-2.5 font-mono text-[11px] ${
              dark ? 'bg-white/[0.06] text-white/60' : 'bg-raised text-muted'
            }`}
          >
            <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
            <span className="truncate">{hostOf(url)}</span>
          </div>
        )}
        <div className="w-[42px] shrink-0" aria-hidden />
      </div>
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover object-top ${imageClassName}`}
        />
      </div>
    </div>
  )
}

/** Top-of-page header for inner pages. */
export function PageHero({ eyebrow, title, intro, children, aside }) {
  return (
    <section className="pt-[72px]">
      <div className={`shell grid gap-12 py-16 md:py-24 ${aside ? 'lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end' : ''}`}>
        <div className="max-w-3xl">
          {eyebrow && <Eyebrow className="rise">{eyebrow}</Eyebrow>}
          <h1
            className="rise mt-5 text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1] tracking-[-0.045em]"
            style={{ animationDelay: '60ms' }}
          >
            {title}
          </h1>
          {intro && (
            <p className="rise mt-6 max-w-xl text-lg leading-8 text-body" style={{ animationDelay: '120ms' }}>
              {intro}
            </p>
          )}
          {children && (
            <div className="rise mt-10 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '180ms' }}>
              {children}
            </div>
          )}
        </div>
        {aside && (
          <div className="rise" style={{ animationDelay: '200ms' }}>
            {aside}
          </div>
        )}
      </div>
    </section>
  )
}

/** A row of figures with labels, used under page heroes. */
export function StatRow({ stats, dark = false }) {
  return (
    <dl className={`grid grid-cols-2 gap-x-6 gap-y-8 border-t pt-8 sm:grid-cols-4 ${dark ? 'border-white/10' : 'border-ink/10'}`}>
      {stats.map(([value, label]) => (
        <div key={label} className="flex flex-col-reverse">
          <dt className={`mt-2 text-sm ${dark ? 'text-white/55' : 'text-muted'}`}>{label}</dt>
          <dd className={`text-[clamp(2rem,4vw,3rem)] font-medium leading-none tracking-[-0.03em] tabular-nums ${dark ? 'text-white' : 'text-ink'}`}>
            {value}
          </dd>
        </div>
      ))}
    </dl>
  )
}

/** Closing call-to-action band. */
export function CtaBand({ title, text, href = '/contact', label = 'Start a project' }) {
  return (
    <section className="px-3 pb-20 sm:px-4 md:pb-28">
      <div className="mx-auto max-w-[1400px] rounded-[28px] bg-lime">
        <div className="shell flex flex-col gap-8 py-14 md:flex-row md:items-end md:justify-between md:py-20">
          <div className="max-w-2xl">
            <h2 className="text-[clamp(2rem,4.6vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.04em]">{title}</h2>
            {text && <p className="mt-4 max-w-lg text-[17px] leading-7 text-ink/70">{text}</p>}
          </div>
          <ButtonLink href={href} className="shrink-0 self-start md:self-auto">
            {label}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
