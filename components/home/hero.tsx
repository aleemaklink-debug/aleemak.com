import { CtaLink } from '@/components/cta-link'
import { WhatsAppCta } from '@/components/whatsapp-cta'
import { Container } from '@/components/section'
import { HeroVisual } from '@/components/home/hero-visual'

const stats = [
  { value: '5', label: 'Service Verticals' },
  { value: '1', label: 'Single Point of Contact' },
  { value: 'A–Z', label: 'Idea to Running System' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* subtle grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-gold" />
              Business · Digital · Postal
            </span>

            <h1 className="text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              From Business Idea to{' '}
              <span className="text-gradient-gold">Running System.</span>
            </h1>

            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              ALEEMAK is a modern business service center. We help small
              businesses, entrepreneurs and online sellers with setup, digital
              solutions, accounting support, branding and postal dispatch — all
              handled in one place.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <CtaLink href="/contact" variant="primary" withArrow>
                Get Business Support
              </CtaLink>
              <WhatsAppCta variant="outline" />
            </div>

            <dl className="mt-4 grid w-full max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <dt className="font-display text-2xl font-bold text-foreground">
                    {s.value}
                  </dt>
                  <dd className="text-xs leading-snug text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  )
}
