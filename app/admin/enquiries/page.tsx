'use client'

import { useEffect, useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

type Enquiry = {
  id: number
  name: string
  phone: string | null
  email: string | null
  subject: string | null
  message: string
  status: 'new' | 'read' | 'replied' | 'closed'
  created_at: string
}

const statuses: Enquiry['status'][] = [
  'new',
  'read',
  'replied',
  'closed',
]

function formatDate(value: string) {
  return new Date(value).toLocaleString('en-IN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}

function whatsappNumber(phone: string | null) {
  if (!phone) return ''

  const digits = phone.replace(/\D/g, '')

  if (digits.length === 10) {
    return `91${digits}`
  }

  return digits
}

function getWhatsAppMessage(enquiry: Enquiry) {
  return `Hello ${enquiry.name},

This is ALEEMAK Business Center.

We received your enquiry and would like to assist you.

Service: ${enquiry.subject || 'General Enquiry'}

Your message:
${enquiry.message || '-'}

Our team will get in touch with you shortly.

Thank you,
ALEEMAK Business Center`
}

export default function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<Enquiry | null>(null)

  async function loadEnquiries() {
    try {
      const response = await fetch('/api/contact', {
        cache: 'no-store',
      })

      if (!response.ok) {
        throw new Error('Failed to load enquiries')
      }

      const data = await response.json()

      setEnquiries(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('ENQUIRIES LOAD ERROR:', error)
      setEnquiries([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadEnquiries()
  }, [])

  async function updateStatus(
    id: number,
    status: Enquiry['status'],
  ) {
    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      })

      if (!response.ok) {
        throw new Error('Failed to update status')
      }

      setEnquiries((current) =>
        current.map((item) =>
          item.id === id
            ? { ...item, status }
            : item,
        ),
      )

      setSelected((current) =>
        current?.id === id
          ? { ...current, status }
          : current,
      )
    } catch (error) {
      console.error('STATUS UPDATE ERROR:', error)
    }
  }

  function openWhatsApp(enquiry: Enquiry) {
    const number = whatsappNumber(enquiry.phone)

    if (!number) return

    const message = encodeURIComponent(
      getWhatsAppMessage(enquiry),
    )

    window.open(
      `https://wa.me/${number}?text=${message}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">
            Customer Enquiries
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Website enquiries received by ALEEMAK.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-5 py-4 text-sm font-semibold">
                    ID
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold">
                    Customer
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold">
                    Phone
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold">
                    Service
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold">
                    Message
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold">
                    Status
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold">
                    Date
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-5 py-12 text-center text-sm text-muted-foreground"
                    >
                      Loading enquiries...
                    </td>
                  </tr>
                ) : enquiries.length === 0 ? (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-5 py-12 text-center text-sm text-muted-foreground"
                    >
                      No enquiries yet.
                    </td>
                  </tr>
                ) : (
                  enquiries.map((enquiry) => (
                    <tr
                      key={enquiry.id}
                      className="border-b border-border last:border-b-0"
                    >
                      <td className="px-5 py-5 text-sm font-medium">
                        #{enquiry.id}
                      </td>

                      <td className="px-5 py-5">
                        <button
                          type="button"
                          onClick={() => setSelected(enquiry)}
                          className="text-left text-sm font-semibold text-foreground hover:underline"
                        >
                          {enquiry.name}
                        </button>
                      </td>

                      <td className="px-5 py-5 text-sm text-foreground/80">
                        {enquiry.phone || '-'}
                      </td>

                      <td className="max-w-[260px] px-5 py-5 text-sm text-foreground/80">
                        {enquiry.subject || '-'}
                      </td>

                      <td className="max-w-[220px] px-5 py-5 text-sm text-foreground/80">
                        <div className="truncate">
                          {enquiry.message || '-'}
                        </div>
                      </td>

                      <td className="px-5 py-5">
                        <select
                          value={enquiry.status}
                          onChange={(e) =>
                            updateStatus(
                              enquiry.id,
                              e.target.value as Enquiry['status'],
                            )
                          }
                          className="rounded-full border border-gold/40 bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-gold/30"
                        >
                          {statuses.map((status) => (
                            <option
                              key={status}
                              value={status}
                            >
                              {status.charAt(0).toUpperCase() +
                                status.slice(1)}
                            </option>
                          ))}
                        </select>
                      </td>

                      <td className="whitespace-nowrap px-5 py-5 text-sm text-muted-foreground">
                        {formatDate(enquiry.created_at)}
                      </td>

                      <td className="px-5 py-5">
                        <button
                          type="button"
                          onClick={() =>
                            openWhatsApp(enquiry)
                          }
                          className="inline-flex items-center gap-2 rounded-full bg-[#20c968] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                        >
                          <MessageCircle className="size-4" />
                          WhatsApp
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-xl rounded-3xl border border-border bg-card p-7 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                  Enquiry #{selected.id}
                </p>

                <h2 className="mt-2 font-display text-2xl font-bold">
                  {selected.name}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelected(null)}
                className="rounded-full p-2 hover:bg-muted"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="mt-7 grid gap-5">
              <div>
                <p className="text-sm text-muted-foreground">
                  Phone
                </p>
                <p className="mt-1 text-sm font-medium">
                  {selected.phone || '-'}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Email
                </p>
                <p className="mt-1 text-sm font-medium">
                  {selected.email || '-'}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Service
                </p>
                <p className="mt-1 text-sm font-medium">
                  {selected.subject || '-'}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Message
                </p>

                <div className="mt-2 rounded-2xl bg-muted px-4 py-4 text-sm leading-relaxed">
                  {selected.message || '-'}
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Received
                </p>

                <p className="mt-1 text-sm font-medium">
                  {formatDate(selected.created_at)}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => openWhatsApp(selected)}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#20c968] px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              <MessageCircle className="size-5" />
              Reply on WhatsApp
            </button>
          </div>
        </div>
      )}
    </main>
  )
}