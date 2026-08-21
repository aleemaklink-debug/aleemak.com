import { Briefcase, MonitorSmartphone, FileText, Package } from 'lucide-react'

const nodes = [
  { icon: Briefcase, label: 'Business', pos: 'left-0 top-6', delay: '0s' },
  {
    icon: MonitorSmartphone,
    label: 'Digital',
    pos: 'right-0 top-2',
    delay: '.6s',
  },
  {
    icon: FileText,
    label: 'Documents',
    pos: 'left-2 bottom-6',
    delay: '1.2s',
  },
  { icon: Package, label: 'Dispatch', pos: 'right-2 bottom-2', delay: '1.8s' },
]

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* concentric rings */}
      <div className="absolute inset-0 rounded-full border border-border/70" />
      <div className="absolute inset-[12%] rounded-full border border-border/60" />
      <div className="absolute inset-[24%] rounded-full border border-dashed border-border/50" />

      {/* rotating orbit ring with a travelling dot */}
      <div className="absolute inset-[12%] motion-safe:animate-[spin_28s_linear_infinite]">
        <span className="absolute left-1/2 top-0 size-2.5 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_12px] shadow-gold/60" />
      </div>
      <div className="absolute inset-[24%] motion-safe:animate-[spin_20s_linear_infinite_reverse]">
        <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 rounded-full bg-foreground/40" />
      </div>

      {/* center emblem */}
      <div className="absolute left-1/2 top-1/2 flex size-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border border-border bg-card shadow-lg">
        <span className="font-display text-xl font-bold tracking-[0.12em] text-foreground">
          ALEEMAK
        </span>
        <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          One System
        </span>
      </div>

      {/* orbiting capability nodes */}
      {nodes.map((n) => {
        const Icon = n.icon
        return (
          <div
            key={n.label}
            className={`absolute ${n.pos} flex items-center gap-2 rounded-full border border-border bg-card/95 px-3 py-2 shadow-md backdrop-blur-sm motion-safe:animate-[float_5s_ease-in-out_infinite]`}
            style={{ animationDelay: n.delay }}
          >
            <span className="flex size-7 items-center justify-center rounded-full bg-secondary text-foreground">
              <Icon className="size-4" />
            </span>
            <span className="pr-1 text-xs font-semibold text-foreground">
              {n.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
