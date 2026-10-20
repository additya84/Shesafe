import React from "react"
import { X } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Shield
                className="w-8 h-8 text-primary DEFAULT"
                width={24}
                height={24}
              />
              <span className="text-xl font-bold text-white">SheSafe</span>
            </div>

            <p className="text-white/60 text-sm max-w-sm">
              Your safety. One tap away. A smarter emergency safety network designed
              to help women stay connected, protected and heard.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-4">Product</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="#" className="hover:text-primary DEFAULT transition-colour">Features</a></li>
              <li><a href="#" className="hover:text-primary DEFAULT transition-colour">How It Works</a></li>
              <li><a href="#" className="hover:text-primary DEFAULT transition-colour">Safety</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-4">Company</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="#" className="hover:text-primary DEFAULT transition-colour">About</a></li>
              <li><a href="#" className="hover:text-primary DEFAULT transition-colour">Contact</a></li>
              <li><a href="#" className="hover:text-primary DEFAULT transition-colour">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-4">Legal</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="#" className="hover:text-primary DEFAULT transition-colour">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary DEFAULT transition-colour">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-dark/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">© 2026 SheSafe. All rights reserved.</p>

          <div className="flex gap-4">
            <span className="text-white/50 text-xs">Designed for safer moments</span>
            <X className="w-5 h-5 text-white/50 hover:text-black transition-colour" />
          </div>
        </div>
      </div>
    </footer>
  )
}