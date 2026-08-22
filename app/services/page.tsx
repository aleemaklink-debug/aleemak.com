import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Container } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/home/sections'
import { getServices } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Business setup, digital solutions, accounting support, design & branding and postal dispatch — practical services to get your business running and keep it moving.',
  alternates: { canonical: '/services' },
}

export default async function ServicesPage() {
  const services = await getServices()

  console.log('SERVICES COUNT:', services.length)

  return(
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Practical services from setup to dispatch."
        description="Everything a small business needs, organised into five clear areas. Pick one, or let us handle the whole journey."
      />

      <Container className="py-14 sm:py-16">
        <div className="flex flex-col gap-16 sm:gap-20">
          {services.map((service, i) => {
            const Icon = service.icon
            const flip = i % 2 === 1
            return (
              <Reveal
                key={service.slug}
                id={service.slug}
                as="article"
                className="scroll-mt-24"
              >
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                  <div className={flip ? 'lg:order-2' : ''}>
                    <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                      <Icon className="size-7" />
                    </span>
                    <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
                      {service.summary}
                    </p>
                    {service.note && (
                      <p className="mt-4 rounded-xl border border-border bg-muted px-4 py-3 text-xs leading-relaxed text-muted-foreground">
                        {service.note}
                      </p>
                    )}
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.enquiry)}`}
                      className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                    >
                      {service.cta}
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>

                  <div className={flip ? 'lg:order-1' : ''}>
                    <ul className="grid gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm sm:grid-cols-2 sm:p-8">
                      {service.points.map((p) => (
                        <li key={p} className="flex items-start gap-3">
                          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                            <Check className="size-3.5" />
                          </span>
                          <span className="text-sm text-foreground/85">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>

      <CtaBand />
    </>
  )
}
