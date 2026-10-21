import React from "react"
import { Smartphone, Clock, ShieldCheck, Users, Phone, Volume2 } from "lucide-react"

export default function EmergencyScenario() {
  const workflowSteps = [
    {
      time: "T +00",
      title: "SOS Trigger Activated",
      description:
        "Quick tap of the SOS widget or rapid device shake initiates the emergency protocol. No menu diving, no confusion - just immediate action.",
      icon: Smartphone,
      color: "bg-rose-500",
    },
    {
      time: "T +03",
      title: "3-Second Confirmation Window",
      description:
        "A gentle vibration countdown gives you seconds to cancel if it was accidental. This prevents false alerts and ensures help only goes when truly needed.",
      icon: Clock,
      color: "bg-amber-500",
    },
    {
      time: "T +05",
      title: "Safety Network Alerted",
      description:
        "All your selected guardians receive immediate notification through the safety app. Each gets your safety status and can choose to call, message, or monitor your location.",
      icon: Users,
      color: "bg-purple-600",
    },
    {
      time: "T +07",
      title: "Location Shared Securely",
      description:
        "Your real-time location is shared with guardians for the duration of the emergency cycle. You control the sharing - it stops automatically when the alert cycle completes.",
      icon: Phone,
      color: "bg-emerald-600",
    },
    {
      time: "T +10",
      title: "Emergency Siren Optional",
      description:
        "Activate a loud, disorienting alarm to attract attention in public spaces. This can be triggered simultaneously with the SOS alert if you need immediate physical assistance.",
      icon: Volume2,
      color: "bg-rose-600",
    },
  ]

  return (
    <section id="safety" className="py-24 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider">
            Emergency Protocol Walkthrough
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-outfit tracking-tight">
            When you need help, every second is choreographed.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Here is the automated sequence that protects you from the moment you trigger SOS to safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowSteps.map((step) => (
            <div
              key={step.time}
              className="bg-white rounded-3xl p-6 border border-purple-100/80 shadow-sm hover:shadow-lg hover:shadow-purple-900/10 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-2xl ${step.color} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-purple-50 text-purple-600 border border-purple-200">
                    T +{step.time}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-outfit text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-purple-100/50 flex items-center gap-2 text-xs text-purple-500">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span>Phase of Protocol</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}