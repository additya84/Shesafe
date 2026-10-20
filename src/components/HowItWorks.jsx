import React from "react"
import { Shield } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Set up your safety network",
      description:
        "Add trusted guardians and configure your emergency preferences.",
    },
    {
      number: "02",
      title: "Activate SOS",
      description:
        "Use the SOS button. In the future mobile application, shake-to-SOS will also be available.",
    },
    {
      number: "03",
      title: "Emergency workflow starts",
      description:
        "Your configured emergency actions are triggered.",
    },
    {
      number: "04",
      title: "Your guardians are alerted",
      description:
        "Your emergency contacts can receive the relevant alert and location information.",
    },
  ]

  return (
    <section className="py-24 bg-gray-very-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-dark mb-4">
            How SheSafe works
          </h2>
          <p className="text-lg text-charcoal-dark/60 max-w-2xl mx-auto">
            A simple 4-step process to keep you safe.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="text-center"
              style={{ transition: "transform 0.3s ease" }}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "var(--primary-light)" }}>
                <span className="text-3xl font-bold">{step.number}</span>
              </div>

              <h3 className="text-xl font-medium text-charcoal-dark mb-2">{step.title}</h3>

              <p className="text-sm text-charcoal-dark/60 line-clamp-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Connecting lines for desktop */}
        <div className="md:hidden" />
      </div>
    </section>
  )
}