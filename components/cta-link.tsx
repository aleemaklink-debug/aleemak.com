import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'gold'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-primary-foreground px-6 py-3 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20',
  secondary:
    'border border-border bg-card text-foreground px-6 py-3 hover:border-foreground/30 hover:bg-secondary',
  gold: 'bg-gold text-gold-foreground px-6 py-3 hover:brightness-105 hover:shadow-lg hover:shadow-gold/30',
  ghost: 'text-foreground px-3 py-2 hover:text-foreground/70',
}

export function CtaLink({
  href,
  children,
  variant = 'primary',
  withArrow = false,
  external = false,
  className,
}: {
  href: string
  children: React.ReactNode
  variant?: Variant
  withArrow?: boolean
  external?: boolean
  className?: string
}) {
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn(base, variants[variant], className)}
    >
      {children}
      {withArrow && (
        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </Link>
  )
}
