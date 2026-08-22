'use client'

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: number
  id?: string
}

export function Reveal({
  children,
  as,
  className,
  delay = 0,
  id,
}: RevealProps) {
  const Comp = (as ?? 'div') as ElementType
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Make the content visible immediately.
    // We are disabling the intersection-based hiding temporarily
    // so we can verify the services layout and database rendering.
    setVisible(true)
  }, [])

  return (
    <Comp
      ref={ref}
      id={id}
      className={className}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  )
}