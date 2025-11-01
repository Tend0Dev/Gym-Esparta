'use client'
import { HeroCarousel } from "@/components/hero-carousel"
import { PricingPlans } from "@/components/pricing-plans"
import { ContactForm } from "@/components/contact-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Header />
      <main >
        <HeroCarousel />
        <PricingPlans />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}