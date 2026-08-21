import Link from 'next/link'
import { quickEnquiries } from '@/lib/services'
import { cn } from '@/lib/utils'

/**
 * Service-specific enquiry chips. Each links to the contact page with the
 * selected service pre-filled so leads are captured with context.
 */
export function QuickEnquiry({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-wrap gap-2.5', className)}>
      {quickEnquiries.map((q) => (
        <Link
          key={q.code}
          href={`/contact?service=${encodeURIComponent(q.service)}`}
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-all hover:border-foreground/30 hover:shadow-md"
        >
          <span className="font-display text-xs font-bold tracking-wider text-gold">
            {q.code}
          </span>
          <span className="text-muted-foreground group-hover:text-foreground">
            {q.label}
          </span>
        </Link>
      ))}
    </div>
  )
}
