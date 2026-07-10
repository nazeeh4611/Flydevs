// ContactClient.jsx
import React, { useState } from 'react'
import { MapPin, Phone, Mail, Send } from 'lucide-react'

function Badge({ children, on = 'light' }) {
  const isDark = on === 'dark'
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        border: `1.5px solid ${isDark ? '#d4e84a' : '#1a1a1a'}`,
        borderRadius: 999,
        padding: '6px 18px',
        fontSize: 'clamp(11px, 1vw, 12px)',
        fontWeight: 600,
        letterSpacing: '0.08em',
        color: isDark ? '#d4e84a' : '#1a1a1a',
      }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          background: isDark ? '#d4e84a' : '#1a1a1a',
          borderRadius: '50%',
        }}
      />
      {children}
    </div>
  )
}

function ContactInfo() {
  return (
    <div
      className="lg:col-span-2"
      style={{
        background: '#1a1a1a',
        borderRadius: 24,
        padding: 'clamp(32px, 4vw, 44px)',
      }}
    >
      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Contact Information</h3>
      <p className="text-white/60 text-sm sm:text-base mb-10 leading-relaxed">
        Have a question or ready to get started? Reach out through any of the following channels.
      </p>

      <div className="space-y-8">
        <div className="flex items-start gap-4">
          <div
            className="flex items-center justify-center rounded-full flex-shrink-0"
            style={{ width: 48, height: 48, background: '#d4e84a' }}
          >
            <MapPin size={20} color="#1a1a1a" />
          </div>
          <div>
            <h4 className="text-white font-bold mb-1">Office Location</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Dubai, United Arab Emirates<br />
              Willingdon Island, Kochi, India
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div
            className="flex items-center justify-center rounded-full flex-shrink-0"
            style={{ width: 48, height: 48, background: '#d4e84a' }}
          >
            <Phone size={20} color="#1a1a1a" />
          </div>
          <div>
            <h4 className="text-white font-bold mb-1">Phone</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Main: +971 (55) 000-0000<br />
              Support: +971 (55) 000-0001<br />
              Sun-Thu, 9am-6pm GST
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div
            className="flex items-center justify-center rounded-full flex-shrink-0"
            style={{ width: 48, height: 48, background: '#d4e84a' }}
          >
            <Mail size={20} color="#1a1a1a" />
          </div>
          <div>
            <h4 className="text-white font-bold mb-1">Email</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              General: info@nacrosoft.com<br />
              Sales: sales@nacrosoft.com<br />
              Support: support@nacrosoft.com
            </p>
          </div>
        </div>
      </div>

      <div
        className="mt-10 rounded-2xl p-6"
        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
      >
        <h4 className="text-white font-bold mb-3">Business Hours</h4>
        <p className="text-white/60 text-sm mb-1">Sunday - Thursday: 9:00 AM - 6:00 PM GST</p>
        <p className="text-white/60 text-sm mb-1">Saturday: 10:00 AM - 4:00 PM GST</p>
        <p className="text-white/60 text-sm">Friday: Closed</p>
        <p className="mt-4 text-xs" style={{ color: '#d4e84a' }}>
          24/7 Emergency Support Available for Enterprise Clients
        </p>
      </div>
    </div>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const inputStyle =
    'w-full px-4 py-3 border border-black/10 rounded-xl focus:ring-2 focus:ring-[#d4e84a] focus:border-[#d4e84a] outline-none text-sm transition-colors'

  return (
    <div
      className="lg:col-span-3 bg-white rounded-[24px] border border-black/5 shadow-[0_8px_24px_rgba(26,26,26,0.07)]"
      style={{ padding: 'clamp(32px, 4vw, 44px)' }}
    >
      <h3 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-8">Send Us a Message</h3>

      {submitted ? (
        <div className="rounded-2xl p-10 text-center" style={{ background: '#f7f5f2', border: '1px solid rgba(26,26,26,0.08)' }}>
          <div
            className="mx-auto mb-4 flex items-center justify-center rounded-full"
            style={{ width: 56, height: 56, background: '#d4e84a' }}
          >
            <span className="text-xl font-bold text-[#1a1a1a]">✓</span>
          </div>
          <h4 className="text-xl font-bold text-[#1a1a1a] mb-2">Message Sent Successfully!</h4>
          <p className="text-gray-600 text-sm">We&apos;ll get back to you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputStyle}
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputStyle}
              placeholder="john@company.com"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-700">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={inputStyle}
                placeholder="Your Company"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={inputStyle}
                placeholder="+971 (55) 000-0000"
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block mb-2 text-sm font-medium text-gray-700">
              Service Interest
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={inputStyle}
            >
              <option value="">Select a service</option>
              <option value="web">Web Development</option>
              <option value="voip">VoIP Solutions</option>
              <option value="software">Software Development</option>
              <option value="marketing">Digital Marketing</option>
              <option value="mobile">Mobile App Development</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className={`${inputStyle} resize-none`}
              placeholder="Tell us about your project or inquiry..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="group w-full bg-black hover:bg-[#1a1a1a] text-white px-6 py-3.5 rounded-full transition-colors flex items-center justify-center gap-3 text-sm tracking-wider"
          >
            SEND MESSAGE
            <Send size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      )}
    </div>
  )
}

export function ContactClient() {
  return (
    <section
      id="contact"
      className="pt-28 pb-20 bg-[#f7f5f2] text-[#1a1a1a]"
      style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <div className="mb-6">
            <Badge on="light">CONTACT US</Badge>
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6.5vw, 5rem)',
              fontWeight: 800,
              lineHeight: 0.98,
              letterSpacing: '-0.02em',
              marginBottom: 20,
            }}
          >
            Let&apos;s start a <span style={{ color: '#d4e84a', WebkitTextStroke: '1px #1a1a1a' }}>conversation</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Ready to transform your business? Reach out and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-5">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}