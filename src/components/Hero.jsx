import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Shield, AlertCircle, Heart, MapPin, Users, PhoneCall, Check, BellRing } from "lucide-react"

export default function Hero() {
  const [sosActive, setSosActive] = useState(false)
  const [sosCountdown, setSosCountdown] = useState(null)

  const triggerSosDemo = () => {
    if (sosActive) {
      setSosActive(false)
      setSosCountdown(null)
      return
    }
    setSosCountdown(3)
    const interval = setInterval(() => {
      setSosCountdown((prev) => {
        if (prev === 1) {
          clearInterval(interval)
          setSosActive(true)
          return null
        }
        return prev ? prev - 1 : null
      })
    }, 800)
  }

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-purple-50/70 via-white to-slate-50">
      {/* Background ambient lighting */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-purple-200/50 via-pink-100/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Call-to-actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200 text-purple-900 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping" />
              <span>Next-Gen Women's Safety Network</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 font-outfit tracking-tight leading-[1.12]">
              Your personal safety. <br />
              <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 bg-clip-text text-transparent">
                Always one tap away.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Stay connected to the people you trust. SheSafe brings rapid SOS alerts, encrypted location sharing, and your personal circle of trusted guardians together into one intuitive safety platform.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg shadow-purple-600/30 hover:shadow-xl hover:shadow-purple-600/40 transition-all transform active:scale-95 cursor-pointer"
              >
                Set Up Free Protection
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm hover:border-purple-300 transition-all cursor-pointer"
              >
                See How It Works
              </a>
            </div>

            {/* Trust feature pills */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs font-medium text-slate-500">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                <span>Zero complicated setup</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                <span>Encrypted GPS sharing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                <span>Instant guardian broadcast</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px]">
              
              {/* Outer Phone Shell */}
              <div className="relative bg-slate-900 p-4 rounded-[40px] shadow-2xl shadow-purple-950/20 border-4 border-slate-800">
                
                {/* Phone Speaker & Camera Notch */}
                <div className="w-32 h-4 bg-slate-800 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-slate-900 border border-slate-700" />
                </div>

                {/* Screen Content */}
                <div className="bg-slate-50 rounded-[30px] p-5 overflow-hidden flex flex-col justify-between min-h-[460px] border border-slate-200">
                  
                  {/* Top Bar inside app */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white">
                          <Shield className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900">SheSafe Mobile</p>
                          <p className="text-[10px] text-slate-500">Protection Active</p>
                        </div>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        sosActive 
                          ? "bg-rose-100 text-rose-700 animate-pulse" 
                          : "bg-emerald-100 text-emerald-700"
                      }`}>
                        {sosActive ? "EMERGENCY ACTIVE" : "SHIELD ONLINE"}
                      </span>
                    </div>

                    {/* Quick Guardian Status Bar */}
                    <div className="bg-white rounded-2xl p-3 border border-purple-100 shadow-sm mb-4">
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="font-semibold text-slate-700 flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-purple-600" />
                          Emergency Circle
                        </span>
                        <span className="text-[11px] text-purple-700 font-bold">3 Ready</span>
                      </div>
                      <div className="flex -space-x-2">
                        <div className="w-7 h-7 rounded-full bg-purple-600 text-white text-[11px] font-bold flex items-center justify-center border-2 border-white">M</div>
                        <div className="w-7 h-7 rounded-full bg-pink-500 text-white text-[11px] font-bold flex items-center justify-center border-2 border-white">D</div>
                        <div className="w-7 h-7 rounded-full bg-indigo-500 text-white text-[11px] font-bold flex items-center justify-center border-2 border-white">S</div>
                      </div>
                    </div>

                    {/* Location Badge */}
                    <div className="bg-purple-50/80 rounded-xl p-2.5 flex items-center gap-2 text-xs text-slate-700 border border-purple-100">
                      <MapPin className="w-4 h-4 text-purple-600 flex-shrink-0" />
                      <span className="truncate text-[11px]">
                        {sosActive ? "Broadcasting live GPS to contacts..." : "GPS ready for emergency broadcast"}
                      </span>
                    </div>
                  </div>

                  {/* Big Interactive SOS Trigger in mockup */}
                  <div className="my-6 text-center">
                    <button
                      onClick={triggerSosDemo}
                      className={`relative w-32 h-32 rounded-full mx-auto flex flex-col items-center justify-center shadow-xl transition-all transform active:scale-95 cursor-pointer ${
                        sosActive
                          ? "bg-rose-600 text-white ring-8 ring-rose-200 animate-pulse"
                          : sosCountdown !== null
                          ? "bg-amber-500 text-white ring-8 ring-amber-200"
                          : "bg-gradient-to-tr from-purple-600 via-purple-700 to-pink-600 text-white ring-8 ring-purple-100 hover:ring-purple-200"
                      }`}
                    >
                      {sosCountdown !== null ? (
                        <>
                          <span className="text-3xl font-black">{sosCountdown}</span>
                          <span className="text-[10px] uppercase font-bold tracking-wider">Tap to cancel</span>
                        </>
                      ) : sosActive ? (
                        <>
                          <BellRing className="w-8 h-8 animate-bounce mb-1" />
                          <span className="text-sm font-black tracking-wider">ACTIVE</span>
                          <span className="text-[9px] opacity-90">Tap to stop</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-7 h-7 mb-1" />
                          <span className="text-xl font-black tracking-wider">SOS</span>
                          <span className="text-[9px] uppercase font-bold tracking-wider opacity-80">Hold / Tap</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-500 mt-3 font-medium">
                      {sosActive
                        ? "🚨 Emergency triggered in demo mode"
                        : "Click button to test emergency simulation"}
                    </p>
                  </div>

                  {/* Mockup bottom quick actions */}
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xs">
                      <PhoneCall className="w-3.5 h-3.5 text-emerald-600 mx-auto mb-1" />
                      <span className="text-[10px] font-bold text-slate-700 block">Speed Dial</span>
                    </div>
                    <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-2xs">
                      <Heart className="w-3.5 h-3.5 text-pink-500 mx-auto mb-1" />
                      <span className="text-[10px] font-bold text-slate-700 block">Check-In</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating decorative badge */}
              <div className="absolute -bottom-4 -left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-purple-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center">
                  <Heart className="w-5 h-5 fill-pink-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Designed for Women</p>
                  <p className="text-[10px] text-slate-500">Empowering everyday safety</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}