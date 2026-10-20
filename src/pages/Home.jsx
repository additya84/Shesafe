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
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20">
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
        <Footer />
      </main>
    </div>
  )
}