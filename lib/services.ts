import {
  Briefcase,
  MonitorSmartphone,
  Calculator,
  PenTool,
  Package,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  id?: number
  slug: string
  icon: LucideIcon
  title: string
  summary: string
  points: string[]
  cta: string
  enquiry: string
  note?: string
}

type ApiService = {
  id: number
  title: string
  slug: string
  short_description: string | null
  description: string | null
  icon: string | null
  display_order: number
  is_active: number
}

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  MonitorSmartphone,
  Calculator,
  PenTool,
  Package,
}

function getIcon(icon: string | null): LucideIcon {
  return iconMap[icon || ''] || Briefcase
}

function getPoints(description: string | null): string[] {
  if (!description) return []

  return description
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
}

function getCta(title: string): string {
  const ctaMap: Record<string, string> = {
    'Business Setup': 'Start My Business',
    'Digital Solutions': 'Get Digital Support',
    'Accounting Support': 'Get Accounting Support',
    'Design & Branding': 'Start My Branding',
    'Postal & Dispatch': 'Dispatch My Business',
  }

  return ctaMap[title] || `Get ${title}`
}

function getNote(title: string): string | undefined {
  if (title === 'Accounting Support') {
    return 'Practical accounting support only — not a substitute for a chartered accountant or regulated professional advice.'
  }

  return undefined
}

/*
 * Static service list
 * Used by client components such as enquiry-form.tsx.
 */
export const services: Service[] = [
  {
    slug: 'business-setup',
    icon: Briefcase,
    title: 'Business Setup',
    summary: 'Turn your idea into a properly set up business.',
    points: [],
    cta: 'Start My Business',
    enquiry: 'Business Setup',
  },
  {
    slug: 'digital-solutions',
    icon: MonitorSmartphone,
    title: 'Digital Solutions',
    summary: 'Bring your business online and automate the routine.',
    points: [],
    cta: 'Get Digital Support',
    enquiry: 'Digital Solutions',
  },
  {
    slug: 'accounting-support',
    icon: Calculator,
    title: 'Accounting Support',
    summary: 'Keep billing, stock and reports under control.',
    points: [],
    cta: 'Get Accounting Support',
    enquiry: 'Accounting Support',
    note: 'Practical accounting support only — not a substitute for a chartered accountant or regulated professional advice.',
  },
  {
    slug: 'design-branding',
    icon: PenTool,
    title: 'Design & Branding',
    summary: 'Give your business a clean, consistent identity.',
    points: [],
    cta: 'Start My Branding',
    enquiry: 'Design & Branding',
  },
  {
    slug: 'postal-dispatch',
    icon: Package,
    title: 'Postal & Dispatch',
    summary: 'Practical dispatch support for shops and online sellers.',
    points: [],
    cta: 'Dispatch My Business',
    enquiry: 'Postal & Dispatch',
  },
]

export async function getServices(): Promise<Service[]> {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  const response = await fetch(`${baseUrl}/api/services`, {
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error('Failed to fetch services')
  }

  const data: ApiService[] = await response.json()

  return data
    .filter((service) => service.is_active)
    .sort((a, b) => a.display_order - b.display_order)
    .map((service) => ({
      id: service.id,
      slug: service.slug,
      icon: getIcon(service.icon),
      title: service.title,
      summary: service.short_description || '',
      points: getPoints(service.description),
      cta: getCta(service.title),
      enquiry: service.title,
      note: getNote(service.title),
    }))
}

export async function getService(slug: string) {
  const services = await getServices()
  return services.find((service) => service.slug === slug)
}

/** Quick enquiry chips used across pages for lead generation */
export const quickEnquiries = [
  { code: 'START', label: 'Business Setup', service: 'Business Setup' },
  { code: 'GST', label: 'GST', service: 'GST Assistance' },
  { code: 'MSME', label: 'MSME', service: 'MSME / Udyam' },
  { code: 'POST', label: 'Postal', service: 'Postal & Dispatch' },
  {
    code: 'SELLER',
    label: 'Online Seller',
    service: 'Online Seller Dispatch',
  },
  { code: 'DIGITAL', label: 'Digital', service: 'Digital Solutions' },
  { code: 'WEB', label: 'Website', service: 'Website Development' },
] as const