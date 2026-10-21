import React from "react"
import { AlertTriangle, Users, MapPin, Smartphone, Phone, Volume2 } from "lucide-react"

export default function Features() {
  const features = [
    {
      id: 1,
      icon: AlertTriangle,
      title: "Emergency SOS",
      badge: "Rapid Trigger",
      iconColor: "text-rose-600",
      bgLight: "bg-rose-50",
      description:
        "Activate your emergency workflow instantly when you need help. The SOS button triggers your configured safety network with a single press - no scrolling, no fumbling."
    },
    {
      id: 2,
      icon: Users,
      title: "Trusted Guardians",
      badge: "Personal Circle",
      iconColor: "text-purple-600",
      bgLight: "bg-purple-50",
      description:
        "Add family members, friends, or trusted contacts to your safety network. All selected guardians receive emergency alerts simultaneously, ensuring help arrives from multiple sources without delay."
    },
    {
      id: 3,
      icon: MapPin,
      title: "Location Sharing",
      badge: "Encrypted GPS",
      iconColor: "text-purple-700",
      bgLight: "bg-purple-50",
      description:
        "Share your real-time location with your selected emergency contacts during an active SOS workflow. Location sharing is user-controlled and stops automatically when the emergency cycle completes."
    },
    {
      id: 4,
      title: "Shake-to-SOS",
      badge: "App Preview",
      iconColor: "text-indigo-600",
      bgLight: "bg-indigo-50",
      description:
        "Future mobile app support will allow rapid phone movement to trigger the emergency workflow without pressing buttons. This feature is currently in development for the SheSafe mobile application."
    },
    {
      id: 5,
      icon: Phone,
      title: "Emergency Calling",
      badge: "Direct Connect",
      iconColor: "text-emerald-600",
      bgLight: "bg-emerald-50",
      description:
        "Quickly reach your selected emergency contacts or emergency services. The calling feature connects you through the safety network when SOS is activated, with call recording and alert confirmation."
    },
    {
      id: 6,
      icon: Volume2,
      title: "Loud Alarm",
      badge: "High Decibel",
      iconColor: "text-rose-600",
      bgLight: "bg-rose-50",
      description:
        "Activate a loud emergency alarm to attract attention nearby. The high-decibel sound can be triggered simultaneously with SOS alerting, drawing immediate notice to your location during critical situations."
    },
  ]

  return (
    <section id="features" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider">
            Comprehensive Protection
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-outfit tracking-tight">
            Everything you need when seconds matter.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            SheSafe combines essential emergency tools into one connected safety system designed for speed, clarity, and trust. Each feature works in harmony to provide multiple layers of protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-3xl p-7 border border-purple-100/80 shadow-sm hover:shadow-xl hover:shadow-purple-900/5 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-2xl ${feature.bgLight} flex items-center justify-center ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 font-outfit group-hover:text-purple-700 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-700">
                <span>Learn more</span>
                <div
                  className="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-700 group-hover:text-white transition-all"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M5 12h3M5 18h3M5 6h3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}