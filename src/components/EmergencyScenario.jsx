import React from "react"
import { Smartphone, Clock, Radio, Users, PhoneCall, Volume2, ShieldCheck } from "lucide-react"

export default function EmergencyScenario() {
  const workflowSteps = [
    {
      time: "00:00",
      title: "Trigger SOS Event",
      description: "Quick tap of the SOS widget or rapid device shake initiates the protocol.",
      icon: Smartphone,
      color: "bg-rose-500",
    },
    {
      time: "00:03",
      title: "Accidental Cancel Window",
      description: "A gentle 3-second haptic countdown allows instant cancel if pressed accidentally.",
      icon: Clock,
      color: "bg-amber-500",
    },
    {
      time: "00:04",
      title: "GPS Lock & Live Tracking",
      description: "High-accuracy coordinates and battery status generate a live-updating map link.",
      icon: Radio,
      color: "bg-purple-600",
    },
    {
      time: "00:05",
      title: "Guardian Priority Alerts",
      description: "All selected emergency contacts receive loud SMS & push notifications.",
      icon: Users,
      color: "bg-indigo-600",
    },
    {
      time: "00:06",
      title: "Emergency Services Direct",
      description: "One-touch dial prompt connects to local police or medical emergency line.",
      icon: PhoneCall,
      color: "bg-emerald-600",
    },
    {
      time: "00:07",
      title: "Deterrent Siren (Optional)",
      description: "Disorienting high-decibel audible alarm sounds to scare off threats in public.",
      icon: Volume2,
      color: "bg-rose-600",
    },
  ]

  return (
    <section id="safety" className="py-24 relative overflow-hidden bg-slate-900 text-white">
      {/* Background ambient gradient glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            <span>Emergency Protocol Walkthrough</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-outfit tracking-tight">
            When you need help, every second is choreographed.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Here is the automated sequence that protects you from the moment you trigger SOS to safety.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="bg-slate-800/80 backdrop-blur-sm rounded-3xl p-6 border border-slate-700/80 hover:border-purple-500/50 hover:bg-slate-800 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-2xl ${step.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-slate-700/60 text-purple-300 border border-purple-400/20">
                      T + {step.time}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-outfit text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-700/60 flex items-center gap-2 text-xs text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  <span>Phase {index + 1} of Protocol</span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center text-xs text-slate-400">
          <span>All protocols run with zero network lag and automatic offline SMS fallback.</span>
        </div>
      </div>
    </section>
  )
}