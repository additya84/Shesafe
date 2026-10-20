import React from "react"
import { Shield, Zap, Clock, MapPin, Users, AlertCircle } from "lucide-react"

export default function EmergencyScenario() {
  const workflowSteps = [
    {
      title: "Phone shake / SOS button",
      description: "Trigger the emergency workflow",
    },
    {
      title: "3-second safety countdown",
      description: "Time to cancel if it was accidental",
    },
    {
      title: "Emergency mode",
      description: "Emergency sequence activated",
    },
    {
      title: "Location sharing",
      description: "Your location is shared with guardians",
    },
    {
      title: "Guardian alert",
      description: "Your trusted contacts are notified",
    },
    {
      title: "Emergency call",
      description: "Quick contact with emergency services",
    },
    {
      title: "Loud alarm",
      description: "Alarm sounds to attract attention",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark to-charcoal-dark" />
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-lavender-light to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="relative pt-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            When you need help, keep it simple.
          </h2>

          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12 text-center">
            Our planned emergency workflow ensures help reaches you quickly and safely.
          </p>

          <div className="space-y-4">
            {workflowSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm border border-white/10"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                  {index < workflowSteps.length - 1 && (
                    <svg
                      className="w-6 h-6 text-white/40 rotate-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path d="M5 12h3M5 18h3M5 6h3" />
                    </svg>
                  )}
                  {index === workflowSteps.length - 1 && (
                    <Shield className="w-6 h-6 text-white" />
                  )}
                </div>

                <h3 className="text-xl font-medium text-white mb-2">{step.title}</h3>

                <p className="text-sm text-white/60">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-sm text-white/50 text-center">
            <span>Planned emergency workflow</span>
          </div>
        </div>
      </div>
    </section>
  )
}