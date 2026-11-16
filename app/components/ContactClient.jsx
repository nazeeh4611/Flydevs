'use client'

import { useCallback, useEffect, useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, X, CheckCircle2, AlertCircle } from 'lucide-react'
import { Eyebrow } from './ui'
import { site } from '../lib/site'

// Set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local (free key from web3forms.com).
// Without it the form falls back to opening the visitor's email app.
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ''

const SERVICES = [
  'Web development',
  'VoIP solutions',
  'Software development',
  'Digital marketing',
  'Mobile app development',
  'Something else',
]

const EMPTY = { name: '', email: '', company: '', phone: '', service: '', message: '', botcheck: false }

function Toast({ message, type, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 6000)
    return () => clearTimeout(t)
  }, [onClose])

  const ok = type === 'success'
  const Icon = ok ? CheckCircle2 : AlertCircle

  return (
    <div role={ok ? 'status' : 'alert'} className="rise fixed inset-x-4 top-[88px] z-[60] sm:left-auto sm:right-6 sm:w-[400px]">
      <div className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-card p-4 shadow-[0_8px_24px_rgba(26,26,26,0.1)]">
        <Icon size={20} strokeWidth={1.75} className={`mt-0.5 shrink-0 ${ok ? 'text-[#16a34a]' : 'text-[#dc2626]'}`} aria-hidden />
        <p className="flex-1 text-sm leading-5 text-ink">{message}</p>
        <button type="button" onClick={onClose} aria-label="Dismiss" className="-m-1 rounded-md p-1 text-muted hover:text-ink">
          <X size={16} strokeWidth={1.75} />
        </button>
      </div>
    </div>
  )
}

function Field({ label, id, required, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-muted"> *</span> : <span className="font-normal text-muted"> (optional)</span>}
      </label>
      {children}
    </div>
  )
}

const inputCls =
  'w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[15px] text-ink outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted/70 hover:border-ink/30 focus:border-ink focus:ring-4 focus:ring-lime/60'

function ContactForm() {
  const [form, setForm] = useState(EMPTY)
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null)
  const closeToast = useCallback(() => setToast(null), [])

  const update = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const mailtoFallback = () => {
    const body = [
      form.message,
      '',
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company && `Company: ${form.company}`,
      form.phone && `Phone: ${form.phone}`,
      form.service && `Service: ${form.service}`,
    ]
      .filter((l) => l !== false && l !== undefined)
      .join('\n')
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Project enquiry from ${form.name}`
    )}&body=${encodeURIComponent(body)}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.botcheck) return

    if (!WEB3FORMS_ACCESS_KEY) {
      mailtoFallback()
      setToast({ type: 'success', message: 'Your email app should open with the message ready to send.' })
      return
    }

    setLoading(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New enquiry from ${form.name}`,
          from_name: 'Flydevs website',
          name: form.name,
          email: form.email,
          company: form.company || 'Not provided',
          phone: form.phone || 'Not provided',
          service: form.service || 'Not specified',
          message: form.message,
        }),
      })
      const result = await res.json()
      if (result.success) {
        setToast({ type: 'success', message: "Thanks — your message is in. We'll reply within one working day." })
        setForm(EMPTY)
      } else {
        setToast({ type: 'error', message: result.message || 'The message could not be sent. Please try again.' })
      }
    } catch {
      setToast({ type: 'error', message: `Network error. Please try again or email us at ${site.email}.` })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {toast && <Toast {...toast} onClose={closeToast} />}

      <div className="rounded-[20px] border border-ink/[0.08] bg-card p-6 sm:p-10">
        <h2 className="text-2xl font-medium tracking-[-0.02em]">Send us a message</h2>
        <p className="mt-2 text-[15px] text-body">Tell us a little about the project. Fields marked * are required.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate={false}>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" id="name" required>
              <input id="name" name="name" type="text" autoComplete="name" required value={form.name} onChange={update} className={inputCls} placeholder="Your name" />
            </Field>
            <Field label="Email" id="email" required>
              <input id="email" name="email" type="email" autoComplete="email" required value={form.email} onChange={update} className={inputCls} placeholder="you@company.com" />
            </Field>
            <Field label="Company" id="company">
              <input id="company" name="company" type="text" autoComplete="organization" value={form.company} onChange={update} className={inputCls} placeholder="Company name" />
            </Field>
            <Field label="Phone" id="phone">
              <input id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={update} className={inputCls} placeholder="+971 50 000 0000" />
            </Field>
          </div>

          <fieldset>
            <legend className="mb-3 text-sm font-medium text-ink">
              What do you need? <span className="font-normal text-muted">(optional)</span>
            </legend>
            <div className="flex flex-wrap gap-2">
              {SERVICES.map((s) => {
                const active = form.service === s
                return (
                  <button
                    key={s}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setForm((f) => ({ ...f, service: active ? '' : s }))}
                    className={`h-10 rounded-full border px-4 text-sm transition-colors duration-150 ${
                      active ? 'border-ink bg-ink text-white' : 'border-ink/15 bg-white text-ink hover:border-ink/35'
                    }`}
                  >
                    {s}
                  </button>
                )
              })}
            </div>
          </fieldset>

          <Field label="Message" id="message" required>
            <textarea id="message" name="message" required rows={5} value={form.message} onChange={update} className={`${inputCls} resize-y`} placeholder="What are you building, and when would you like to launch?" />
          </Field>

          {/* Honeypot: hidden from people, filled by bots */}
          <input type="checkbox" name="botcheck" checked={form.botcheck} onChange={update} className="hidden" tabIndex={-1} autoComplete="off" />

          <button
            type="submit"
            disabled={loading}
            className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-6 text-[15px] font-medium text-white transition-[background-color,transform] duration-150 hover:bg-ink-3 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {loading ? (
              <>
                <span aria-hidden className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Sending
              </>
            ) : (
              <>
                Send message
                <Send size={16} strokeWidth={1.75} aria-hidden className="transition-transform duration-150 group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </form>
      </div>
    </>
  )
}

function ContactInfo() {
  const rows = [
    { Icon: Mail, label: 'Email', content: <a href={`mailto:${site.email}`} className="break-all hover:text-white">{site.email}</a> },
    {
      Icon: Phone,
      label: 'Phone',
      content: site.phones.map((p) => (
        <a key={p.href} href={p.href} className="block tabular-nums hover:text-white">
          {p.display} <span className="text-white/40">· {p.label}</span>
        </a>
      )),
    },
    { Icon: MapPin, label: 'Offices', content: site.locations.map((l) => <span key={l} className="block">{l}</span>) },
  ]

  return (
    <aside className="on-dark flex flex-col rounded-[20px] bg-ink p-6 text-white sm:p-10">
      <h2 className="text-2xl font-medium tracking-[-0.02em]">Contact information</h2>
      <p className="mt-2 text-[15px] leading-6 text-white/60">Prefer to reach out directly? Use any of these.</p>

      <ul className="mt-8 space-y-6">
        {rows.map(({ Icon, label, content }) => (
          <li key={label} className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime text-ink">
              <Icon size={18} strokeWidth={1.5} aria-hidden />
            </span>
            <div className="min-w-0 text-[15px] leading-6 text-white/70">
              <p className="mb-0.5 text-sm font-medium text-white">{label}</p>
              {content}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-5 lg:mt-auto">
        <p className="flex items-center gap-2 text-sm font-medium">
          <Clock size={16} strokeWidth={1.5} aria-hidden className="text-white/60" />
          Business hours
        </p>
        <dl className="mt-3 space-y-1.5 text-sm">
          {site.hours.map((h) => (
            <div key={h.days} className="flex justify-between gap-4">
              <dt className="text-white/60">{h.days}</dt>
              <dd className="tabular-nums text-white/85">{h.time}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-[13px] text-lime">24/7 emergency support for enterprise clients</p>
      </div>
    </aside>
  )
}

export function ContactClient() {
  return (
    <section className="pt-[72px]">
      <div className="shell py-16 md:py-24">
        <div className="max-w-3xl">
          <Eyebrow className="rise">Contact us</Eyebrow>
          <h1 className="rise mt-5 text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1] tracking-[-0.045em]" style={{ animationDelay: '60ms' }}>
            Let&apos;s start a <span className="text-muted">conversation</span>
          </h1>
          <p className="rise mt-6 max-w-xl text-lg leading-8 text-body" style={{ animationDelay: '120ms' }}>
            Ready to move your business forward? Send a message and our team will get back to you within one working
            day.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  )
}
