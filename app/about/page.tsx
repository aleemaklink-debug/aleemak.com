import type { Metadata } from 'next'
import { Target, Compass, HeartHandshake, Sparkles } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Container, SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/home/sections'
import { services } from '@/lib/services'

export const metadata: Metadata = {
  title: 'About',
  description:
    'ALEEMAK is a modern business service center that helps small businesses, entrepreneurs and online sellers with business, digital and postal solutions — all in one place.',
  alternates: { canonical: '/about' },
}

const values = [
  {
    icon: HeartHandshake,
    title: 'Trust first',
    body: 'Honest advice and realistic expectations, every time.',
  },
  {
    icon: Compass,
    title: 'Practical guidance',
    body: 'Clear steps over complicated jargon and empty promises.',
  },
  {
    icon: Sparkles,
    title: 'One place, less hassle',
    body: 'Business, digital and postal needs handled together.',
  },
  {
    icon: Target,
    title: 'Results that matter',
    body: 'A business that is actually set up and running.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About ALEEMAK"
        title="A modern business center for real businesses."
        description="We help people start, set up and run their businesses without getting lost in scattered processes and multiple vendors."
      />

      <section className="border-b border-border py-14 sm:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="flex flex-col gap-5">
              <SectionHeading eyebrow="Our mission" title="From idea to running system." />
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Small business owners and entrepreneurs often juggle too many
                separate people — one for documents, another for computers,
                someone else for design, and yet another for dispatch. It wastes
                time and creates confusion.
              </p>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                ALEEMAK exists to bring that together. We are a single,
                dependable partner that guides you from your first business idea
                all the way to a working, day-to-day system — covering business
                setup, digital solutions, accounting support, branding and
                postal dispatch.
              </p>
            </Reveal>

            <Reveal delay={120} className="flex flex-col justify-center">
              <div className="rounded-3xl border border-border bg-primary p-8 text-primary-foreground shadow-lg sm:p-10">
                <p className="font-display text-2xl font-bold leading-snug sm:text-3xl">
                  &ldquo;From Business Idea to Running System.&rdquo;
                </p>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">
                  It is not just our tagline — it is how we work. One point of
                  contact, from the first step to everyday operations.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-primary-foreground/10 pt-6">
                  {[
                    { v: '5', l: 'Service areas' },
                    { v: '1', l: 'Point of contact' },
                    { v: 'A–Z', l: 'Coverage' },
                  ].map((s) => (
                    <div key={s.l}>
                      <p className="font-display text-2xl font-bold text-gold">
                        {s.v}
                      </p>
                      <p className="mt-1 text-xs text-primary-foreground/60">
                        {s.l}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-secondary/40 py-14 sm:py-16">
        <Container>
          <SectionHeading
            align="center"
            className="mx-auto items-center"
            eyebrow="What we value"
            title="How we work with you."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <Reveal key={v.title} delay={i * 70}>
                  <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {v.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {v.body}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="What we cover"
            title="Five services under one roof."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {services.map((s) => (
              <span
                key={s.slug}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm"
              >
                <s.icon className="size-4 text-gold" />
                {s.title}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
