import React from "react"
import { Link } from "react-router-dom"
import { Shield, Heart, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center text-white">
                <Shield className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-bold font-outfit text-white">SheSafe</span>
                <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Your safety. Always one tap away. A connected emergency safety network designed to keep women protected, heard, and backed by people they trust.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-slate-400 font-medium">
                Emergency Dispatch Systems Operational
              </span>
            </div>
          </div>

          {/* Column: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/#features" className="hover:text-purple-400 transition-colors">Features</a></li>
              <li><a href="/#how-it-works" className="hover:text-purple-400 transition-colors">How It Works</a></li>
              <li><a href="/#safety" className="hover:text-purple-400 transition-colors">Emergency Protocol</a></li>
              <li><a href="/#guardians" className="hover:text-purple-400 transition-colors">Guardian Circle</a></li>
              <li><a href="/#preview" className="hover:text-purple-400 transition-colors">Live Dashboard</a></li>
            </ul>
          </div>

          {/* Column: Resources */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/#faq" className="hover:text-purple-400 transition-colors">Frequently Asked</a></li>
              <li><a href="tel:911" className="hover:text-purple-400 transition-colors">Emergency 911</a></li>
              <li><a href="tel:1-800-799-7233" className="hover:text-purple-400 transition-colors">National Helpline</a></li>
              <li><a href="/#privacy" className="hover:text-purple-400 transition-colors">Privacy Standards</a></li>
            </ul>
          </div>

          {/* Column: Access */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Access</h4>
            <div className="space-y-3">
              <Link
                to="/register"
                className="block text-center text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 py-2.5 px-4 rounded-xl transition-colors"
              >
                Create Account
              </Link>
              <Link
                to="/login"
                className="block text-center text-xs font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 py-2.5 px-4 rounded-xl border border-slate-800 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SheSafe Platform. Dedicated to women's safety everywhere.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#security" className="hover:text-slate-400 transition-colors">Security Whitepaper</a>
          </div>
        </div>

      </div>
    </footer>
  )
}