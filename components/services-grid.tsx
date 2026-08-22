import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { getServices } from '@/lib/services'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export async function ServicesGrid({ className }: { className?: string }) {
  const services = await getServices()

  return (
    <div className={cn('grid gap-5 sm:grid-cols-2 lg:grid-cols-3', className)}>
      {services.map((service, i) => {
        const Icon = service.icon

        return (
          <Reveal
            key={service.slug}
            delay={i * 70}
            className="h-full"
          >
            <Link
              href={`/services#${service.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="size-6" />
                </span>

                <span className="flex size-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>

              <h3 className="font-display text-lg font-semibold text-foreground">
                {service.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.summary}
              </p>

              {service.points.length > 0 && (
                <ul className="mt-5 flex flex-1 flex-col gap-2">
                  {service.points.slice(0, 5).map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                        <Check className="size-2.5" />
                      </span>

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Link>
          </Reveal>
        )
      })}
    </div>
  )
}