import React from "react"
import { Link } from "react-router-dom"
import { Shield, Heart, ArrowRight, CheckCircle2 } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden bg-slate-900 text-white">
      {/* Background glow effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-purple-200 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
            <span>Join 25,000+ Women Protected</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-outfit tracking-tight leading-tight">
            Build your personal safety network today.
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            It takes less than 2 minutes to designate your emergency guardians and set up your one-tap SOS response system.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-xl shadow-purple-950/30 transition-all transform active:scale-95 cursor-pointer"
            >
              <span>Get Protected Now — It's Free</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all cursor-pointer"
            >
              Explore All Features
            </a>
          </div>

          {/* Value props under button */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Free Core Features</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Instant Guardian SMS Sync</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}