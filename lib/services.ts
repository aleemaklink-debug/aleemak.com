import {
  Briefcase,
  MonitorSmartphone,
  Calculator,
  PenTool,
  Package,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  slug: string
  icon: LucideIcon
  title: string
  summary: string
  points: string[]
  cta: string
  /** service label used in enquiry / WhatsApp prefill */
  enquiry: string
  note?: string
}

export const services: Service[] = [
  {
    slug: 'business-setup',
    icon: Briefcase,
    title: 'Business Setup',
    summary: 'Turn your idea into a properly set up business.',
    points: [
      'Business setup guidance',
      'MSME / Udyam assistance',
      'GST-related assistance',
      'Business documentation',
      'Official-process assistance',
    ],
    cta: 'Start My Business',
    enquiry: 'Business Setup',
  },
  {
    slug: 'digital-solutions',
    icon: MonitorSmartphone,
    title: 'Digital Solutions',
    summary: 'Bring your business online and automate the routine.',
    points: [
      'Computer services',
      'Website development',
      'Software solutions',
      'Business automation',
      'Digital setup',
    ],
    cta: 'Get Digital Support',
    enquiry: 'Digital Solutions',
  },
  {
    slug: 'accounting-support',
    icon: Calculator,
    title: 'Accounting Support',
    summary: 'Keep billing, stock and reports under control.',
    points: [
      'Tally',
      'Billing setup',
      'Basic accounting systems',
      'Stock management',
      'Business reports',
    ],
    cta: 'Get Accounting Support',
    enquiry: 'Accounting Support',
    note: 'Practical accounting support only — not a substitute for a chartered accountant or regulated professional advice.',
  },
  {
    slug: 'design-branding',
    icon: PenTool,
    title: 'Design & Branding',
    summary: 'Give your business a clean, consistent identity.',
    points: [
      'Logo design',
      'Business cards',
      'Letterheads',
      'Branding',
      'Digital creatives',
    ],
    cta: 'Start My Branding',
    enquiry: 'Design & Branding',
  },
  {
    slug: 'postal-dispatch',
    icon: Package,
    title: 'Postal & Dispatch',
    summary: 'Practical dispatch support for shops and online sellers.',
    points: [
      'Parcel booking',
      'Packing support',
      'Label preparation',
      'Dispatch support',
      'Shipment tracking assistance',
      'Online seller dispatch support',
    ],
    cta: 'Dispatch My Business',
    enquiry: 'Postal & Dispatch',
  },
]

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}

/** Quick enquiry chips used across pages for lead generation */
export const quickEnquiries = [
  { code: 'START', label: 'Business Setup', service: 'Business Setup' },
  { code: 'GST', label: 'GST', service: 'GST Assistance' },
  { code: 'MSME', label: 'MSME', service: 'MSME / Udyam' },
  { code: 'POST', label: 'Postal', service: 'Postal & Dispatch' },
  { code: 'SELLER', label: 'Online Seller', service: 'Online Seller Dispatch' },
  { code: 'DIGITAL', label: 'Digital', service: 'Digital Solutions' },
  { code: 'WEB', label: 'Website', service: 'Website Development' },
] as const
