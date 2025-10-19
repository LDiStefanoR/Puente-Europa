import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import WhyArgentinaSection from '@/components/WhyArgentinaSection'
import CandidatesEmotionalSection from '@/components/CandidatesEmotionalSection'
import CompaniesEmotionalSection from '@/components/CompaniesEmotionalSection'
import MissionSection from '@/components/MissionSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen" id="top">
      <Header />
      <HeroSection />
      <WhyArgentinaSection />
      <CandidatesEmotionalSection />
      <CompaniesEmotionalSection />
      <MissionSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}


