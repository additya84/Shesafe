import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import TrustBar from "../components/TrustBar"
import Features from "../components/Features"
import HowItWorks from "../components/HowItWorks"
import EmergencyScenario from "../components/EmergencyScenario"
import GuardianSection from "../components/GuardiansSection"
import AppPreview from "../components/AppPreview"
import PrivacySection from "../components/PrivacySection"
import FAQ from "../components/FAQ"
import CTA from "../components/CTA"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-purple-500 selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <Features />
        <HowItWorks />
        <EmergencyScenario />
        <GuardianSection />
        <AppPreview />
        <PrivacySection />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}