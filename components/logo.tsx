import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  showWordmark = true,
  invert = false,
}: {
  className?: string
  showWordmark?: boolean
  invert?: boolean
}) {
  return (
    <Link
      href="/"
      aria-label="ALEEMAK — home"
      className={cn('flex items-center gap-2.5', className)}
    >
      <Image
        src="/aleemak-logo.png"
        alt="ALEEMAK logo"
        width={120}
        height={108}
        priority
        className="h-11 w-auto object-contain"
      />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              'font-display text-lg font-bold tracking-[0.14em]',
              invert ? 'text-primary-foreground' : 'text-foreground',
            )}
          >
            ALEEMAK
          </span>
          <span
            className={cn(
              'text-[10px] font-medium uppercase tracking-[0.24em]',
              invert ? 'text-primary-foreground/60' : 'text-muted-foreground',
            )}
          >
            Business Center
          </span>
        </span>
      )}
    </Link>
  )
}
