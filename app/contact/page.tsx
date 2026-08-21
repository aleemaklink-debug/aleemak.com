import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock3 } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Container } from '@/components/section'
import { EnquiryForm } from '@/components/enquiry-form'
import { QuickEnquiry } from '@/components/quick-enquiry'
import { WhatsAppCta, WhatsAppIcon } from '@/components/whatsapp-cta'
import { site, whatsappLink } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with ALEEMAK for business setup, digital solutions, accounting support, branding and postal dispatch. Send an enquiry or chat with us on WhatsApp.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  const service = undefined
  const wa = whatsappLink(service)

  const details = [
    site.contact.phone && {
      icon: Phone,
      label: 'Phone',
      value: site.contact.phone,
      href: `tel:${site.contact.phone.replace(/\s/g, '')}`,
    },
    {
      icon: WhatsAppIcon,
      label: 'WhatsApp',
      value: site.contact.whatsapp || 'Chat with us',
      href: wa,
    },
    site.contact.email && {
      icon: Mail,
      label: 'Email',
      value: site.contact.email,
      href: `mailto:${site.contact.email}`,
    },
    site.contact.emailAlt && {
      icon: Mail,
      label: 'Email (alt)',
      value: site.contact.emailAlt,
      href: `mailto:${site.contact.emailAlt}`,
    },
    site.contact.address && {
      icon: MapPin,
      label: 'Location',
      value: site.contact.address,
      href: site.contact.mapsUrl || undefined,
    },
    site.contact.hours && {
      icon: Clock3,
      label: 'Working Hours',
      value: site.contact.hours,
    },
  ].filter(Boolean) as {
    icon: React.ComponentType<{ className?: string }>
    label: string
    value: string
    href?: string
  }[]

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's get your business moving."
        description="Send an enquiry with your requirement, or reach us directly on WhatsApp. We'll review it and get back to you."
      />

      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-xl font-semibold text-foreground">
                Reach ALEEMAK
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Prefer to talk first? WhatsApp is the fastest way to reach us.
              </p>

              <div className="mt-6">
                <WhatsAppCta service={service} className="w-full sm:w-auto">
                  Chat on WhatsApp
                </WhatsAppCta>
              </div>

              <ul className="mt-8 flex flex-col gap-3">
                {details.map((d) => {
                  const Icon = d.icon
                  const content = (
                    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-foreground/20">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {d.label}
                        </p>
                        <p className="mt-0.5 text-sm font-medium text-foreground">
                          {d.value}
                        </p>
                      </div>
                    </div>
                  )
                  return (
                    <li key={d.label}>
                      {d.href ? (
                        <Link
                          href={d.href}
                          target={d.href.startsWith('http') ? '_blank' : undefined}
                          rel={
                            d.href.startsWith('http')
                              ? 'noopener noreferrer'
                              : undefined
                          }
                        >
                          {content}
                        </Link>
                      ) : (
                        content
                      )}
                    </li>
                  )
                })}
              </ul>

              <div className="mt-8">
                <p className="mb-3 text-sm font-medium text-muted-foreground">
                  Quick enquiry:
                </p>
                <QuickEnquiry />
              </div>
            </div>

            {/* Enquiry form */}
            <div className="lg:col-span-3">
              <h2 className="mb-4 font-display text-xl font-semibold text-foreground">
                Send an enquiry
              </h2>
              <EnquiryForm defaultService={service} />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
