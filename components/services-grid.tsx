import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/services'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function ServicesGrid({ className }: { className?: string }) {
  return (
    <div className={cn('grid gap-5 sm:grid-cols-2 lg:grid-cols-3', className)}>
      {services.map((service, i) => {
        const Icon = service.icon
        return (
          <Reveal key={service.slug} delay={i * 70}>
            <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-primary/5">
              <div className="mb-5 flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </span>
                <span className="flex size-8 items-center justify-center rounded-full text-muted-foreground transition-all group-hover:bg-gold/15 group-hover:text-gold">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {service.summary}
              </p>
              <ul className="mt-4 flex flex-1 flex-col gap-2">
                {service.points.slice(0, 5).map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href={`/contact?service=${encodeURIComponent(service.enquiry)}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-muted-foreground"
              >
                {service.cta}
                <ArrowUpRight className="size-4" />
              </Link>
            </article>
          </Reveal>
        )
      })}
    </div>
  )
}
