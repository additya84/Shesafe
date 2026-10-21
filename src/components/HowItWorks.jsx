import React from "react"
import { UserPlus, BellRing, Radio, ShieldAlert } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: UserPlus,
      title: "Add Your Guardians",
      description: "Select family, friends, or trusted neighbors to form your personal emergency response circle.",
      accent: "from-purple-500 to-indigo-600",
      bgLight: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      step: "02",
      icon: BellRing,
      title: "Activate in 1 Tap",
      description: "Hit the high-contrast SOS button or use shake detection on mobile to trigger immediate assistance.",
      accent: "from-pink-500 to-rose-600",
      bgLight: "bg-rose-50",
      textColor: "text-rose-600"
    },
    {
      step: "03",
      icon: Radio,
      title: "Instant Live GPS Broadcast",
      description: "Your precise real-time coordinates and battery level are shared securely with your guardians.",
      accent: "from-indigo-500 to-purple-600",
      bgLight: "bg-indigo-50",
      textColor: "text-indigo-600"
    },
    {
      step: "04",
      icon: ShieldAlert,
      title: "Emergency Network Engaged",
      description: "Direct dial prompt for emergency services and high-decibel alarm activation ensure rapid help.",
      accent: "from-purple-600 to-pink-500",
      bgLight: "bg-purple-50",
      textColor: "text-purple-600"
    },
  ]

  return (
    <section id="how-it-works" className="py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider">
            Simple & Dependable
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-outfit tracking-tight">
            How SheSafe protects you in seconds.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            In stressful situations, complexity is danger. SheSafe is engineered to work reliably in just four frictionless steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={item.step}
                className="relative bg-slate-50/70 hover:bg-white rounded-3xl p-7 border border-slate-200/80 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${item.bgLight} ${item.textColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="text-2xl font-black font-outfit text-slate-300 group-hover:text-purple-600 transition-colors">
                    {item.step}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-outfit group-hover:text-purple-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Progress bar line accent */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-400 group-hover:text-purple-600 transition-colors">
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}