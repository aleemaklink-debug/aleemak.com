'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { site } from '@/lib/site'
import { services } from '@/lib/services'

const businessStatus = ['New Business', 'Existing Business'] as const

const serviceOptions = [
  ...services.map((s) => s.enquiry),
  'GST Assistance',
  'MSME / Udyam',
  'Website Development',
  'Online Seller Dispatch',
  'Other',
]

const fieldClass =
  'w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground/40 focus:ring-2 focus:ring-gold/40'

const labelClass = 'mb-1.5 block text-sm font-medium text-foreground'

export function EnquiryForm({
  defaultService,
  className,
}: {
  defaultService?: string
  className?: string
}) {
  const [submitted, setSubmitted] = useState(false)
  const [service, setService] = useState(defaultService ?? '')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries()) as Record<
      string,
      string
    >

    // --- Backend integration point -----------------------------------------
    // When a backend/CRM is ready, POST the enquiry here, e.g.:
    //   await fetch('/api/enquiry', { method: 'POST', body: JSON.stringify(data) })
    // For now we hand the lead off to WhatsApp when a number is configured.
    if (site.whatsappNumber) {
      const message =
        `New enquiry for ALEEMAK%0A%0A` +
        `Name: ${data.fullName || '-'}%0A` +
        `Mobile: ${data.mobile || '-'}%0A` +
        `Business: ${data.businessName || '-'}%0A` +
        `Business Type: ${data.businessType || '-'}%0A` +
        `Status: ${data.status || '-'}%0A` +
        `Service: ${data.service || '-'}%0A` +
        `Location: ${data.location || '-'}%0A` +
        `Message: ${data.message || '-'}`
      window.open(
        `https://wa.me/${site.whatsappNumber}?text=${message}`,
        '_blank',
        'noopener,noreferrer',
      )
    }
    // ------------------------------------------------------------------------

    setSubmitted(true)
    form.reset()
    setService('')
  }

  if (submitted) {
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card p-10 text-center',
          className,
        )}
      >
        <span className="flex size-14 items-center justify-center rounded-full bg-gold/15 text-gold">
          <CheckCircle2 className="size-8" />
        </span>
        <h3 className="font-display text-xl font-semibold text-foreground">
          Thank you.
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          ALEEMAK will review your requirement and contact you.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8',
        className,
      )}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            required
            autoComplete="name"
            className={fieldClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="mobile" className={labelClass}>
            Mobile Number
          </label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            className={fieldClass}
            placeholder="10-digit mobile number"
          />
        </div>
        <div>
          <label htmlFor="businessName" className={labelClass}>
            Business Name
          </label>
          <input
            id="businessName"
            name="businessName"
            className={fieldClass}
            placeholder="Optional"
          />
        </div>
        <div>
          <label htmlFor="businessType" className={labelClass}>
            Business Type
          </label>
          <input
            id="businessType"
            name="businessType"
            className={fieldClass}
            placeholder="e.g. Garments, Trading, Services"
          />
        </div>
        <div>
          <label htmlFor="status" className={labelClass}>
            New / Existing Business
          </label>
          <select id="status" name="status" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select
            </option>
            {businessStatus.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="service" className={labelClass}>
            Service Required
          </label>
          <select
            id="service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={fieldClass}
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="location" className={labelClass}>
            Location
          </label>
          <input
            id="location"
            name="location"
            className={fieldClass}
            placeholder="City / area"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={cn(fieldClass, 'resize-none')}
            placeholder="Tell us what you need help with"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto"
      >
        Send Enquiry
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        We use your details only to respond to your enquiry.
      </p>
    </form>
  )
}
