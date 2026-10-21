import React, { useState } from "react"
import { useSafety } from "../context/SafetyContext"
import { Phone, PhoneCall, Shield, AlertTriangle, Users, MapPin, X, MessageSquare, ExternalLink, Copy, Check } from "lucide-react"

export default function EmergencyCallModal() {
  const {
    callModalOpen,
    closeCallModal,
    guardians,
    makeCall,
    sendEmergencySms,
    sendWhatsAppAlert,
    location,
    getGoogleMapsUrl,
  } = useSafety()

  const [copied, setCopied] = useState(false)
  const [countryPreset, setCountryPreset] = useState("India") // India (112, 1091, 100) or Global (911)

  if (!callModalOpen) return null

  const handleCopyLocation = () => {
    navigator.clipboard.writeText(getGoogleMapsUrl())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Common Hotlines by region
  const emergencyHotlines = countryPreset === "India" ? [
    { name: "Emergency Response (All-in-One)", number: "112", role: "Police / Fire / Ambulance", color: "from-rose-600 to-red-700", badge: "Primary" },
    { name: "Women Helpline (Special)", number: "1091", role: "24/7 Dedicated Women Safety", color: "from-purple-600 to-indigo-700", badge: "Direct" },
    { name: "Women in Distress Helpline", number: "181", role: "Govt. Women Protection", color: "from-pink-600 to-rose-700", badge: "National" },
    { name: "Police Control Room", number: "100", role: "Police Speed Dial", color: "from-slate-800 to-slate-900", badge: "Local" },
    { name: "Ambulance Emergency", number: "108", role: "Medical Emergency", color: "from-emerald-600 to-teal-700", badge: "Medical" },
  ] : [
    { name: "Emergency Services (Police/Med)", number: "911", role: "All Emergencies", color: "from-rose-600 to-red-700", badge: "Primary" },
    { name: "National Domestic Violence Helpline", number: "18007997233", role: "24/7 Confidential", color: "from-purple-600 to-indigo-700", badge: "Support" },
    { name: "Crisis Text / Helpline", number: "988", role: "Crisis Line", color: "from-pink-600 to-rose-700", badge: "Crisis" },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-rose-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-rose-600 via-rose-700 to-purple-700 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
              <PhoneCall className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-outfit">Emergency Speed Dial & SOS</h2>
              <p className="text-xs text-rose-100">Tap any button to connect immediately</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <select
              value={countryPreset}
              onChange={(e) => setCountryPreset(e.target.value)}
              className="bg-white/20 text-white text-xs font-semibold px-2.5 py-1.5 rounded-xl border border-white/30 focus:outline-none cursor-pointer"
            >
              <option value="India" className="text-slate-900">India (112 / 1091)</option>
              <option value="US" className="text-slate-900">USA / Intl (911)</option>
            </select>

            <button
              onClick={closeCallModal}
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
              aria-label="Close emergency modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-6 space-y-6 overflow-y-auto">
          
          {/* Real-time GPS Location Ribbon */}
          <div className="bg-purple-50/80 rounded-2xl p-4 border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-800">
              <MapPin className="w-4 h-4 text-purple-700 flex-shrink-0" />
              <div>
                <span className="font-bold text-slate-900">Your Current GPS: </span>
                <span className="font-mono text-purple-900 font-semibold">{location.latitude}, {location.longitude}</span>
                <span className="text-slate-500 text-[11px] ml-2">({location.isLive ? "Live GPS" : "Standard GPS"})</span>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleCopyLocation}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-purple-200 font-semibold text-purple-800 hover:bg-purple-100 transition-colors cursor-pointer text-xs"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Link Copied!" : "Copy Map Link"}</span>
              </button>
              <a
                href={getGoogleMapsUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-purple-700 text-white font-semibold hover:bg-purple-800 transition-colors text-xs"
              >
                <span>View Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Emergency Hotlines Grid */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>Official Emergency Hotlines</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {emergencyHotlines.map((hotline, idx) => (
                <button
                  key={idx}
                  onClick={() => makeCall(hotline.number)}
                  className={`relative p-4 rounded-2xl bg-gradient-to-r ${hotline.color} text-white shadow-md hover:shadow-lg transition-all transform active:scale-[0.98] flex items-center justify-between text-left cursor-pointer group`}
                >
                  <div className="pr-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bold font-outfit text-sm">{hotline.name}</span>
                    </div>
                    <p className="text-xs text-white/80 mt-0.5">{hotline.role}</p>
                    <span className="inline-block mt-1 font-mono font-black text-lg tracking-wider text-yellow-300">
                      📞 {hotline.number}
                    </span>
                  </div>

                  <div className="w-11 h-11 rounded-xl bg-white/20 group-hover:bg-white text-white group-hover:text-rose-600 flex items-center justify-center transition-all flex-shrink-0 shadow-inner">
                    <Phone className="w-5 h-5" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Guardian Speed Dial */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-purple-600" />
              <span>Your Trusted Guardians ({guardians.length})</span>
            </h3>

            {guardians.length === 0 ? (
              <p className="text-xs text-slate-500 italic p-3 bg-slate-50 rounded-xl">
                No emergency guardians added yet. You can add them in your Dashboard.
              </p>
            ) : (
              <div className="space-y-2.5">
                {guardians.map((g) => (
                  <div
                    key={g.id}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 hover:bg-purple-50/40 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl ${g.color} text-white font-bold flex items-center justify-center text-sm shadow-sm`}>
                        {g.initial}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{g.name}</h4>
                        <p className="text-xs text-slate-500">{g.relation} • {g.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => sendEmergencySms(g.phone)}
                        className="p-2 rounded-xl bg-slate-200 hover:bg-purple-100 text-slate-700 hover:text-purple-700 transition-colors"
                        title="Send SMS alert"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => makeCall(g.phone)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Broadcast Alerts via SMS & WhatsApp */}
          <div className="pt-2 border-t border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              One-Click Broadcast with Live GPS Coordinates
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => sendEmergencySms(guardians[0]?.phone || "")}
                className="w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Emergency SMS with Map Link</span>
              </button>

              <button
                onClick={() => sendWhatsAppAlert()}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Broadcast Alert on WhatsApp</span>
              </button>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 p-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-purple-600" />
            <span>Encrypted Emergency Broadcast Ready</span>
          </span>
          <button
            onClick={closeCallModal}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold transition-colors"
          >
            Dismiss
          </button>
        </div>

      </div>
    </div>
  )
}
