/**
 * Central ALEEMAK configuration.
 *
 * Contact details and the WhatsApp number are intentionally left as
 * placeholders. Provide the real values via environment variables so the
 * site is production-ready without hardcoding secrets or fake data.
 *
 * NEXT_PUBLIC_* vars are safe to expose to the browser (used by WhatsApp links).
 */

const whatsappNumber =
  (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '917540079990').replace(
    /[^\d]/g,
    '',
  )

export const site = {
  name: 'ALEEMAK',
  positioning: 'Business. Digital. Postal.',
  tagline: 'From Business Idea to Running System.',
  description:
    'Business, Digital & Postal Solutions for small businesses and entrepreneurs.',
  url: 'https://aleemak.com',
  region: 'Tiruppur, Tamil Nadu',

  /** Set NEXT_PUBLIC_WHATSAPP_NUMBER in project env, e.g. 919000000000 */
  whatsappNumber,

  contact: {
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+91 75400 79990',
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY || '+91 75400 79990',
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@aleemak.com',
    emailAlt: process.env.NEXT_PUBLIC_CONTACT_EMAIL_ALT || 'aleemaklink@gmail.com',
    address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS || '',
    hours: process.env.NEXT_PUBLIC_CONTACT_HOURS || '',
    mapsUrl: process.env.NEXT_PUBLIC_MAPS_URL || '',
  },

  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#',
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || '#',
  },
} as const

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Business Setup', href: '/business-setup' },
  { label: 'Online Sellers', href: '/online-sellers' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

/**
 * Build a wa.me link that pre-fills a message with the selected service.
 * Falls back to the contact page anchor if no number is configured yet.
 */
export function whatsappLink(service?: string) {
  const base = service
    ? `Hello ALEEMAK, I need help with ${service}.`
    : 'Hello ALEEMAK, I would like business support.'
  if (!site.whatsappNumber) {
    return `/contact?service=${encodeURIComponent(service ?? '')}`
  }
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(base)}`
}
