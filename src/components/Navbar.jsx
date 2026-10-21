import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useSafety } from "../context/SafetyContext"
import { Shield, Heart, Menu, X, ArrowRight, PhoneCall, LayoutDashboard, LogOut } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === "/"
  const { currentUser, isAuthenticated, logout } = useAuth()
  const { openCallModal } = useSafety()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Emergency Protocol", href: "/#safety" },
    { name: "Guardians", href: "/#guardians" },
    { name: "FAQ", href: "/#faq" },
  ]

  const handleScrollTo = (e, targetHref) => {
    setIsMenuOpen(false)
    if (isHomePage && targetHref.startsWith("/#")) {
      e.preventDefault()
      const elementId = targetHref.replace("/#", "")
      const el = document.getElementById(elementId)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-purple-100/60 py-2.5"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-100 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group cursor-pointer"
          onClick={() => {
            if (isHomePage) window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center shadow-md shadow-purple-600/20 group-hover:scale-105 transition-transform">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-2xl font-bold font-outfit text-slate-900 tracking-tight">SheSafe</span>
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-xs lg:text-sm font-semibold text-slate-600 hover:text-purple-700 transition-colors py-1 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Quick Call Button */}
          <button
            onClick={openCallModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold transition-colors cursor-pointer"
            title="Emergency Speed Dial"
          >
            <PhoneCall className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
            <span>Call 112 / 1091</span>
          </button>

          {isAuthenticated ? (
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow-md shadow-purple-600/20 transition-all cursor-pointer"
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>Dashboard</span>
              </Link>
              <button
                onClick={logout}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-lg transition-colors cursor-pointer"
                title="Log Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="text-xs font-semibold text-slate-700 hover:text-purple-700 px-3.5 py-2 rounded-xl hover:bg-purple-50 transition-colors"
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center gap-1 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-4 py-2 rounded-full shadow-md shadow-purple-600/20 hover:shadow-lg transition-all transform active:scale-95"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          )}
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={openCallModal}
            className="p-2 rounded-xl bg-rose-50 text-rose-600 border border-rose-200"
            aria-label="Call emergency"
          >
            <PhoneCall className="w-5 h-5 animate-pulse" />
          </button>
          <button
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-purple-100 px-6 py-6 shadow-xl animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-base font-semibold text-slate-700 hover:text-purple-700 py-2 border-b border-slate-100 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  openCallModal()
                }}
                className="w-full py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>One-Tap Emergency Call</span>
              </button>

              {isAuthenticated ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full text-center text-sm font-semibold text-white bg-purple-600 py-3 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    <span>Open Dashboard</span>
                  </Link>
                  <button
                    onClick={() => {
                      logout()
                      setIsMenuOpen(false)
                    }}
                    className="w-full text-center text-sm font-semibold text-slate-700 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full text-center text-sm font-semibold text-slate-700 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full text-center text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 py-3 rounded-xl shadow-md transition-colors"
                  >
                    Get Started Free
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}