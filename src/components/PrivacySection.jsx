import React from "react"
import { ShieldCheck, Lock, EyeOff, KeyRound, UserCheck, HardDriveDownload } from "lucide-react"

export default function PrivacySection() {
  const privacyPillars = [
    {
      icon: Lock,
      title: "Zero-Knowledge Encryption",
      desc: "Your emergency contacts and location records are encrypted with 256-bit AES protocols at rest and in transit."
    },
    {
      icon: EyeOff,
      title: "No Continuous Surveillance",
      desc: "SheSafe never tracks your everyday movement. GPS location is only accessed when an SOS event is actively initiated."
    },
    {
      icon: KeyRound,
      title: "Strict Guardian Consent",
      desc: "Emergency contacts verify their phone number and consent before receiving any of your emergency alerts."
    },
    {
      icon: UserCheck,
      title: "No Data Monetization",
      desc: "We do not sell, rent, or broker your personal information, contact lists, or location logs to advertisers."
    },
    {
      icon: HardDriveDownload,
      title: "One-Click Data Deletion",
      desc: "You retain 100% control over your data. Delete your account, history, and guardian logs at any moment."
    },
    {
      icon: ShieldCheck,
      title: "Encrypted Cloud Backups",
      desc: "Safety preferences are safely stored so your protection carries across device upgrades seamlessly."
    }
  ]

  return (
    <section id="privacy" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5 text-purple-400" />
            <span>Uncompromising Security</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-outfit tracking-tight">
            Your safety data deserves total privacy.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We believe an emergency app should protect you without compromising your fundamental right to privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {privacyPillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <div
                key={idx}
                className="bg-slate-800/80 backdrop-blur-sm rounded-3xl p-7 border border-slate-700/80 hover:border-purple-500/40 hover:bg-slate-800 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="text-lg font-bold font-outfit text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center gap-2 text-xs text-purple-300">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                  <span>Verified Standard</span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}