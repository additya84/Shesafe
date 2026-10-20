import React from "react"
import { Shield, Zap, MapPin, Heart, Phone, AlertCircle, Clock } from "lucide-react"

export default function AppPreview() {
  return (
    <section className="py-24 bg-gray-very-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-dark mb-4">
            A safety dashboard designed around you.
          </h2>
          <p className="text-lg text-charcoal-dark/60 max-w-2xl mx-auto">
            Take a look at the SheSafe emergency dashboard designed to keep you informed.
          </p>
        </div>

        <div className="relative">
          {/* Dashboard mockup */}
          <div className="relative w-full max-w-2xl mx-auto bg-white rounded-2xl overflow-shadow shadow-lg">
            {/* Header area */}
            <div className="bg-primary-dark text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-white" />
                  <span className="text-lg font-semibold">SheSafe</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm bg-lavender-light text-primary px-2 py-1 rounded">Active</span>
                  <span className="text-xs text-white/60">Safety</span>
                </div>
              </div>

              {/* SOS button */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <button
                  className="w-full h-14 bg-primary text-white rounded-full flex items-center justify-center font-medium hover:opacity-90 transition-opacity"
                  aria-label="Emergency SOS"
                >
                  SOS
                </button>
              </div>
            </div>

            {/* Main dashboard content */}
            <div className="p-6">
              {/* Location */}
              <div className="mb-6">
                <div className="flex items-center gap-3 text-sm text-charcoal-dark/60">
                  <MapPin className="w-5 h-5" />
                  <span>Last shared: Just now</span>
                </div>
                <p className="mt-1 text-xs text-charcoal-dark">Sharing location during emergency</p>
              </div>

              {/* Guardians */}
              <div className="mb-6">
                <div className="flex items-center gap-3 text-sm text-charcoal-dark/60">
                  <Users className="w-5 h-5" />
                  <span>3 guardians notified</span>
                </div>
              </div>

              {/* Emergency call */}
              <div className="mb-6">
                <div className="flex items-center gap-3 text-sm text-charcoal-dark/60">
                  <Phone className="w-5 h-5" />
                  <span>Call 911</span>
                </div>
              </div>

              {/* Alarm */}
              <div className="mb-6">
                <div className="flex items-center gap-3 text-sm text-charcoal-dark/60">
                  <Alarm className="w-5 h-5" />
                  <span>Loud alarm</span>
                </div>
              </div>

              {/* SOS history */}
              <div>
                <div className="flex items-center gap-3 text-sm text-charcoal-dark/60">
                  <Clock className="w-5 h-5" />
                  <span>SOS history</span>
                </div>
              </div>
            </div>

            {/* Footer label */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-charcoal-dark/60">
              Dashboard Preview
            </div>
          </div>

          {/* Decorative shapes */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-rose-soft rounded-full opacity-30" />
          <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-primary-light rounded-full opacity-20" />
        </div>
      </div>
    </section>
  )
}