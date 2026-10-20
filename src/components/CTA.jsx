import React from "react"
import { Shield, Heart } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="relative min-h-[400px] bg-gradient-to-br from-primary-dark to-charcoal-dark flex items-center justify-center">
        <div className="absolute inset-0" />
        <div className="relative z-10 text-center px-6">

          {/* Decorative shapes */}
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-rose-soft rounded-full opacity-40" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-light rounded-full opacity-30" />

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Build your personal safety network today.
            </h2>

            <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto">
              Set up trusted contacts and prepare your emergency safety workflow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary-accent transition-all">
                Get Started
              </Link>
              <Link to="#features" className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg hover:border-primary DEFAULT transition-all">
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}