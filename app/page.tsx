import { Container, SectionHeading } from '@/components/section'
import { ServicesGrid } from '@/components/services-grid'
import { CtaLink } from '@/components/cta-link'
import { QuickEnquiry } from '@/components/quick-enquiry'
import { Hero } from '@/components/home/hero'
import {
  WhyAleemak,
  ProcessSteps,
  WhoWeHelp,
  CtaBand,
} from '@/components/home/sections'

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="What we do"
              title="Five services. One dependable partner."
              description="Every part of getting a business running — organised into clear, practical services."
            />
            <CtaLink href="/services" variant="secondary" withArrow>
              View all services
            </CtaLink>
          </div>
          <ServicesGrid className="mt-12" />
          <div className="mt-10 flex flex-col gap-3">
            <p className="text-sm font-medium text-muted-foreground">
              Quick enquiry — tap what you need:
            </p>
            <QuickEnquiry />
          </div>
        </Container>
      </section>

      <WhyAleemak />
      <ProcessSteps />
      <WhoWeHelp />
      <CtaBand />
    </>
  )
}
