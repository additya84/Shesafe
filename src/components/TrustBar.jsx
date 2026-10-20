import React from "react"
import { Shield, MapPin, Users, Zap } from "lucide-react"

export default function TrustBar() {
  return (
    <section className="py-12 bg-gray-very-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="flex items-center gap-2 text-center">
            <Shield className="w-5 h-5 text-primary DEFAULT" />
            <span className="text-charcoal-dark text-sm font-medium">Privacy focused</span>
          </div>
          <div className="flex items-center gap-2 text-center">
            <MapPin className="w-5 h-5 text-primary DEFAULT" />
            <span className="text-charcoal-dark text-sm font-medium">Location sharing</span>
          </div>
          <div className="flex items-center gap-2 text-center">
            <Users className="w-5 h-5 text-primary DEFAULT" />
            <span className="text-charcoal-dark text-sm font-medium">Trusted guardians</span>
          </div>
          <div className="flex items-center gap-2 text-center">
            <Zap className="w-5 h-5 text-primary DEFAULT" />
            <span className="text-charcoal-dark text-sm font-medium">Quick SOS</span>
          </div>
        </div>
      </div>
    </section>
  )
}