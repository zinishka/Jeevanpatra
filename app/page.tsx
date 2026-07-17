import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Features from '@/components/Features'
import StatsSection from '@/components/StatsSection'
import HowItWorks from '@/components/HowItWorks'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <StatsSection />
      <HowItWorks />
      <FAQSection />
      <CTASection />
    </>
  )
}
