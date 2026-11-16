// Single source of truth for contact details and shared content.
// Update these once and every page (nav, footer, contact, home) follows.

export const site = {
  name: 'Flydevs Global',
  url: 'https://flydevsglobal.com',
  tagline: 'Your in-house design & engineering team',
  description:
    'Flydevs Global is a design and engineering studio in Kochi and Dubai building websites, software, mobile apps and VoIP systems for growing businesses.',
  email: 'flyhomiesinfo@gmail.com',
  phones: [
    { label: 'Dubai', display: '+971 50 431 6900', href: 'tel:+971504316900' },
    { label: 'India', display: '+91 81291 11606', href: 'tel:+918129111606' },
  ],
  locations: ['Dubai, United Arab Emirates', 'Willingdon Island, Kochi, India'],
  hours: [
    { days: 'Sunday – Thursday', time: '9:00 – 18:00 GST' },
    { days: 'Saturday', time: '10:00 – 16:00 GST' },
    { days: 'Friday', time: 'Closed' },
  ],
}

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
]

export function hostOf(url) {
  try {
    return new URL(url).host.replace(/^www\./, '')
  } catch {
    return url
  }
}
