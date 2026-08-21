import type { Metadata } from 'next'
import {
  Package,
  Box,
  ScanLine,
  Truck,
  PackageCheck,
  Printer,
} from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Container, SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { EnquiryForm } from '@/components/enquiry-form'
import { CtaLink } from '@/components/cta-link'
import { WhatsAppCta } from '@/components/whatsapp-cta'

export const metadata: Metadata = {
  title: 'Postal & Dispatch for Online Sellers',
  description:
    'Reliable dispatch support for shops and online sellers — parcel booking, packing, label preparation, dispatch and shipment tracking assistance, all in one place.',
  alternates: { canonical: '/online-sellers' },
}

const support = [
  {
    icon: Package,
    title: 'Parcel Booking',
    body: 'We help book your parcels so orders move out on time.',
  },
  {
    icon: Box,
    title: 'Packing Support',
    body: 'Proper packing so your products reach customers safely.',
  },
  {
    icon: Printer,
    title: 'Label Preparation',
    body: 'Shipping labels prepared correctly for smooth dispatch.',
  },
  {
    icon: Truck,
    title: 'Dispatch Support',
    body: 'Hand-off and dispatch coordination handled for you.',
  },
  {
    icon: ScanLine,
    title: 'Tracking Assistance',
    body: 'Help checking and following up on shipment tracking.',
  },
  {
    icon: PackageCheck,
    title: 'Online Seller Dispatch',
    body: 'End-to-end dispatch support built for online sellers.',
  },
]

export default function OnlineSellersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Online Sellers · Postal & Dispatch"
        title="Reliable dispatch, so you can keep selling."
        description="Packing, labelling and sending orders eats into your day. ALEEMAK handles the postal and dispatch side so you can focus on selling and growing."
      />

      <section className="border-b border-border py-14 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Dispatch support"
            title="Everything to get orders out the door."
            description="Practical, hands-on help with the parts of selling online that slow you down."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {support.map((s, i) => {
              const Icon = s.icon
              return (
                <Reveal key={s.title} delay={i * 60}>
                  <div className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {s.body}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-primary py-14 text-primary-foreground sm:py-16">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                For growing sellers
              </span>
              <h2 className="mt-4 text-balance font-display text-3xl font-bold sm:text-4xl">
                Spend your time selling. Leave dispatch to us.
              </h2>
              <p className="mt-4 max-w-lg text-pretty leading-relaxed text-primary-foreground/70">
                Whether you ship a few orders a week or many a day, we give you a
                dependable dispatch routine — booking, packing, labelling and
                tracking support in one place.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <CtaLink href="/contact?service=Online%20Seller%20Dispatch" variant="gold" withArrow>
                  Dispatch My Business
                </CtaLink>
                <WhatsAppCta service="Online Seller Dispatch" />
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                'On-time parcel booking',
                'Safe, tidy packing',
                'Correct shipping labels',
                'Tracking follow-up',
              ].map((t) => (
                <li
                  key={t}
                  className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 text-sm font-medium"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              align="center"
              className="mx-auto items-center"
              eyebrow="Get started"
              title="Tell us about your dispatch needs."
            />
            <EnquiryForm defaultService="Online Seller Dispatch" className="mt-10" />
          </div>
        </Container>
      </section>
    </>
  )
}
