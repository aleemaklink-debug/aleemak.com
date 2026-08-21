import type { Metadata } from 'next'
import {
  Building2,
  BadgeCheck,
  FileText,
  ClipboardList,
  Check,
} from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Container, SectionHeading } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { EnquiryForm } from '@/components/enquiry-form'
import { QuickEnquiry } from '@/components/quick-enquiry'

export const metadata: Metadata = {
  title: 'Business Setup',
  description:
    'Turn your idea into a properly set up business. Business setup guidance, MSME / Udyam assistance, GST-related assistance, documentation and official-process support.',
  alternates: { canonical: '/business-setup' },
}

const covered = [
  {
    icon: Building2,
    title: 'Business Setup Guidance',
    body: 'Understand how to structure and start your business the right way.',
  },
  {
    icon: BadgeCheck,
    title: 'MSME / Udyam Assistance',
    body: 'Help preparing and applying for MSME / Udyam registration.',
  },
  {
    icon: ClipboardList,
    title: 'GST-related Assistance',
    body: 'Support with GST-related paperwork and coordination.',
  },
  {
    icon: FileText,
    title: 'Business Documentation',
    body: 'Get the documents your business needs prepared and organised.',
  },
]

const steps = [
  'Share your business idea and current stage with us',
  'We map out what setup, documents and registrations you need',
  'We assist with preparation and the official processes',
  'You get a business that is set up and ready to operate',
]

export default function BusinessSetupPage() {
  return (
    <>
      <PageHeader
        eyebrow="Business Setup"
        title="Turn your idea into a proper business."
        description="Starting a business involves setup, registrations and paperwork. ALEEMAK guides you through it and handles the coordination, so you can focus on your business."
      />

      <section className="border-b border-border py-14 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="What's covered"
            title="Setup support, end to end."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {covered.map((c, i) => {
              const Icon = c.icon
              return (
                <Reveal key={c.title} delay={i * 70}>
                  <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-foreground">
                        {c.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {c.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-secondary/40 py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="The process"
                title="A clear path to a set-up business."
              />
              <ol className="mt-8 flex flex-col gap-4">
                {steps.map((s, i) => (
                  <Reveal key={s} as="li" delay={i * 70}>
                    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                        {i + 1}
                      </span>
                      <p className="pt-1 text-sm leading-relaxed text-foreground/85">
                        {s}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ol>
              <div className="mt-8 rounded-xl border border-border bg-card px-5 py-4 text-xs leading-relaxed text-muted-foreground">
                ALEEMAK provides practical assistance and coordination for
                business setup and registrations. We are not a substitute for a
                chartered accountant, lawyer or other regulated professional
                where their sign-off is legally required.
              </div>
            </div>

            <div id="enquire" className="scroll-mt-24">
              <div className="mb-4 flex flex-col gap-3">
                <h2 className="font-display text-xl font-semibold text-foreground">
                  Start your business setup
                </h2>
                <QuickEnquiry />
              </div>
              <EnquiryForm defaultService="Business Setup" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {[
              'New businesses',
              'Existing businesses',
              'Shops & firms',
              'Online sellers',
            ].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <Check className="size-4 text-gold" />
                {t}
              </span>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
