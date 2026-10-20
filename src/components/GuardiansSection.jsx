import React from "react"
import { Users, Plus } from "lucide-react"

export default function GuardianSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal-dark mb-6">
              Choose the people you trust.
            </h2>
            <p className="text-lg text-charcoal-dark/60 mb-8 max-w-xl">
              Build your support network of family, friends, and trusted contacts who
              can receive emergency alerts when you need help most.
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 border border-charcoal-dark/10">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "var(--primary-light)" }}>
                  <Users className="w-7 h-7 text-primary DEFAULT" />
                </div>

                <h3 className="text-lg font-medium text-charcoal-dark mb-2">Emergency Guardians</h3>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-lavender-light flex items-center justify-center flex-shrink-0" style={{ color: "var(--rose-accent)" }}>
                      M
                    </div>
                    <div>
                      <span className="font-medium">Mom</span>
                      <span className="text-xs text-charcoal-dark/60">Primary contact</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-lavender-light flex items-center justify-center flex-shrink-0" style={{ color: "var(--rose-accent)" }}>
                      D
                    </div>
                    <div>
                      <span className="font-medium">Dad</span>
                      <span className="text-xs text-charcoal-dark/60">Primary contact</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-lavender-light flex items-center justify-center flex-shrink-0" style={{ color: "var(--rose-accent)" }}>
                      S
                    </div>
                    <div>
                      <span className="font-medium">Sister</span>
                      <span className="text-xs text-charcoal-dark/60">Primary contact</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-lavender-light flex items-center justify-center flex-shrink-0" style={{ color: "var(--rose-accent)" }}>
                      F
                    </div>
                    <div>
                      <span className="font-medium">Friend</span>
                      <span className="text-xs text-charcoal-dark/60">Primary contact</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-charcoal-dark/10">
                  <div className="flex items-center gap-2">
                    <Plus className="w-5 h-5 text-primary DEFAULT" />
                    <span className="text-sm text-charcoal-dark">Add Guardian</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Link to="/register" className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-primary-accent transition-all">
                Build My Safety Network →
              </Link>
            </div>
          </div>

          {/* Illustration placeholder */}
          <div className="relative">
            <div className="relative w-full h-80 bg-white rounded-2xl overflow-shadow shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}