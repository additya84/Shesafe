import React from "react"
import { Shield, Lock, MapPin, Users } from "lucide-react"

export default function PrivacySection() {
  return (
    <section className="py-24 bg-charcoal-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/30 to-transparent" />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your safety data deserves care.
            </h2>

            <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
              We believe your safety information should be under your control, shared only
              when you need it most, and protected with the same care you trust.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-medium text-white mb-4">Privacy-first design</h3>
                <ul className="space-y-3 text-white/60">
                  <li>Data encrypted at rest and in transit</li>
                  <li>Minimal data collection principle</li>
                  <li>No third-party sharing without consent</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-white mb-4">Controlled contacts</h3>
                <ul className="space-y-3 text-white/60">
                  <li>You choose who receives alerts</li>
                  <li>Contacts can opt-out at any time</li>
                  <li>Revocation of sharing at your discretion</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-white mb-4">Secure authentication</h3>
                <ul className="space-y-3 text-white/60">
                  <li>Planned secure login flow</li>
                  <li>Two-factor authentication planned</li>
                  <li>Biometric support for mobile</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-white mb-4">Location transparency</h3>
                <ul className="space-y-3 text-white/60">
                  <li>Shared only during configured emergencies</li>
                  <li>Stops sharing after alert cycle</li>
                  <li>You control sharing duration</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-white mb-4">User-controlled settings</h3>
              <ul className="space-y-3 text-white/60">
                <li>Full privacy setting controls</li>
                <li>Delete data anytime</li>
                <li>Export your safety history</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}