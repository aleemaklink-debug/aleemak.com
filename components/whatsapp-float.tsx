import Link from 'next/link'
import { whatsappLink } from '@/lib/site'
import { WhatsAppIcon } from '@/components/whatsapp-cta'

export function WhatsAppFloat() {
  const href = whatsappLink()
  const external = href.startsWith('http')
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label="Chat with ALEEMAK on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-black shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <WhatsAppIcon className="size-7" />
      <span className="sr-only">Chat on WhatsApp</span>
    </Link>
  )
}
