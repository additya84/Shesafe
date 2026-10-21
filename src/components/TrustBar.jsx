import React from "react"
import { ShieldCheck, MapPin, Users, Zap, Lock, BellRing } from "lucide-react"

export default function TrustBar() {
  const highlights = [
    { icon: ShieldCheck, title: "Zero Data Selling", desc: "Private & encrypted" },
    { icon: Zap, title: "Instant SOS", desc: "One-tap emergency alert" },
    { icon: MapPin, title: "Live Coordinates", desc: "Accurate GPS tracking" },
    { icon: Users, title: "Trusted Guardians", desc: "Multi-contact alerts" },
    { icon: Lock, title: "End-to-End Safety", desc: "Bank-grade privacy" },
  ]

  return (
    <section className="py-8 bg-white border-y border-purple-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}