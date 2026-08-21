import {
  ShieldCheck,
  Layers,
  Clock,
  Handshake,
  Lightbulb,
  FileCheck2,
  Rocket,
  LifeBuoy,
  Store,
  ShoppingBag,
  Building2,
} from 'lucide-react'
import { Container, SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { CtaLink } from '@/components/cta-link'
import { WhatsAppCta } from '@/components/whatsapp-cta'

const reasons = [
  {
    icon: Layers,
    title: 'Everything in one place',
    body: 'Business, digital and postal needs handled together — no running between multiple vendors.',
  },
  {
    icon: Handshake,
    title: 'Practical, not complicated',
    body: 'Straight talk and simple steps. We focus on getting your business working, not on jargon.',
  },
  {
    icon: ShieldCheck,
    title: 'Support you can trust',
    body: 'Clear guidance and honest expectations for new and existing businesses alike.',
  },
  {
    icon: Clock,
    title: 'One point of contact',
    body: 'A single, reliable partner from your first idea through daily operations.',
  },
]

const steps = [
  {
    icon: Lightbulb,
    title: 'Share your idea',
    body: 'Tell us about your business or what you want to start.',
  },
  {
    icon: FileCheck2,
    title: 'We set it up',
    body: 'Setup, documents, digital tools and systems put in place.',
  },
  {
    icon: Rocket,
    title: 'Go live',
    body: 'Branding, billing and dispatch ready so you can operate.',
  },
  {
    icon: LifeBuoy,
    title: 'Ongoing support',
    body: 'We stay available as your business runs and grows.',
  },
]

const audiences = [
  {
    icon: Building2,
    title: 'New Entrepreneurs',
    body: 'Starting fresh and need the whole setup handled properly.',
  },
  {
    icon: Store,
    title: 'Small Business Owners',
    body: 'Running a shop or firm and want systems, billing and branding sorted.',
  },
  {
    icon: ShoppingBag,
    title: 'Online Sellers',
    body: 'Selling online and need reliable packing, labelling and dispatch support.',
  },
]

export function WhyAleemak() {
  return (
    <section className="border-b border-border py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Why ALEEMAK"
          title="A single, dependable partner for your business."
          description="Most business owners lose time coordinating separate people for paperwork, computers, design and dispatch. ALEEMAK brings it together."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <Reveal key={r.title} delay={i * 70}>
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-foreground">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {r.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {r.body}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export function ProcessSteps() {
  return (
    <section className="border-b border-border bg-secondary/40 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From business idea to running system."
          description="A clear path that takes you from where you are to a business that actually operates day to day."
          align="center"
          className="mx-auto items-center"
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.title} delay={i * 80}>
                <li className="relative flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-display text-3xl font-bold text-border">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </li>
              </Reveal>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}

export function WhoWeHelp() {
  return (
    <section className="border-b border-border py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Who we help"
          title="Built for the people who keep business moving."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {audiences.map((a, i) => {
            const Icon = a.icon
            return (
              <Reveal key={a.title} delay={i * 80}>
                <div className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-foreground transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {a.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {a.body}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export function CtaBand() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-primary px-6 py-14 text-center sm:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_top_right,var(--gold),transparent_55%)]"
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
            <h2 className="text-balance font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
              Let&apos;s get your business running.
            </h2>
            <p className="text-pretty text-base leading-relaxed text-primary-foreground/70">
              Tell us what you need. We&apos;ll guide you from the first step to a
              working, dependable system.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CtaLink href="/contact" variant="gold" withArrow>
                Get Business Support
              </CtaLink>
              <WhatsAppCta />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
