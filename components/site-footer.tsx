import Link from 'next/link'
import { site, whatsappLink } from '@/lib/site'
import { Logo } from '@/components/logo'
import { WhatsAppIcon } from '@/components/whatsapp-cta'
import { InstagramIcon, YoutubeIcon } from '@/components/social-icons'

const quickLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Business Setup', href: '/business-setup' },
  { label: 'Online Sellers', href: '/online-sellers' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const serviceLinks = [
  { label: 'Business Setup', href: '/business-setup' },
  { label: 'Digital Solutions', href: '/services#digital-solutions' },
  { label: 'Accounting Support', href: '/services#accounting-support' },
  { label: 'Design & Branding', href: '/services#design-branding' },
  { label: 'Postal & Dispatch', href: '/services#postal-dispatch' },
]

export function SiteFooter() {
  const wa = whatsappLink()
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo invert />
            <p className="text-sm text-primary-foreground/60">
              {site.positioning}
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/50">
              A modern business service center for small businesses,
              entrepreneurs and online sellers.
            </p>
          </div>

          <nav aria-label="Quick links" className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Quick Links
            </h2>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Service categories" className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Service Categories
            </h2>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Connect
            </h2>
            <div className="flex items-center gap-3">
              <Link
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ALEEMAK on Instagram"
                className="inline-flex size-10 items-center justify-center rounded-full border border-primary-foreground/15 text-primary-foreground/70 transition-colors hover:border-gold hover:text-gold"
              >
                <InstagramIcon className="size-5" />
              </Link>
              <Link
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ALEEMAK on YouTube"
                className="inline-flex size-10 items-center justify-center rounded-full border border-primary-foreground/15 text-primary-foreground/70 transition-colors hover:border-gold hover:text-gold"
              >
                <YoutubeIcon className="size-5" />
              </Link>
              <Link
                href={wa}
                target={wa.startsWith('http') ? '_blank' : undefined}
                rel={wa.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label="ALEEMAK on WhatsApp"
                className="inline-flex size-10 items-center justify-center rounded-full border border-primary-foreground/15 text-primary-foreground/70 transition-colors hover:border-[#25D366] hover:text-[#25D366]"
              >
                <WhatsAppIcon className="size-5" />
              </Link>
            </div>
            <p className="text-sm text-primary-foreground/50">
              {site.region}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-primary-foreground/10 pt-6 text-sm text-primary-foreground/50 sm:flex-row sm:items-center">
          <p>© 2026 ALEEMAK. All rights reserved.</p>
          <p className="font-display tracking-widest text-primary-foreground/40">
            BUSINESS. DIGITAL. POSTAL.
          </p>
        </div>
      </div>
    </footer>
  )
}
