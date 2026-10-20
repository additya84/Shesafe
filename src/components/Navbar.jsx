import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ShieldHeart } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsMenuOpen(window.scrollY > 50 ? false : isMenuOpen)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMenuOpen])

  const mobileLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Safety", href: "#safety" },
    { name: "FAQ", href: "#faq" },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200/50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldHeart
            className="w-8 h-8 text-primary DEFAULT"
            width={24}
            height={24}
          />
          <span className="text-primary-dark font-bold text-xl">SheSafe</span>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          <li><Link to="/" className="text-charcoal-dark text-sm hover:text-primary DEFAULT transition-colour">Home</Link></li>
          <li><Link to="#features" className="text-charcoal-dark text-sm hover:text-primary DEFAULT transition-colour">Features</Link></li>
          <li><Link to="#how-it-works" className="text-charcoal-dark text-sm hover:text-primary DEFAULT transition-colour">How It Works</Link></li>
          <li><Link to="#safety" className="text-charcoal-dark text-sm hover:text-primary DEFAULT transition-colour">Safety</Link></li>
          <li><Link to="#faq" className="text-charcoal-dark text-sm hover:text-primary DEFAULT transition-colour">FAQ</Link></li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/login" className="text-primary DEFAULT font-medium text-sm hover:text-primary-accent transition-colour">
            Login
          </Link>
          <Link to="/register" className="bg-primary DEFAULT text-white px-4 py-2 rounded-full text-sm hover:bg-primary-accent transition-all">
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-lg z-40 flex items-center justify-center ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-8 p-8 text-lg">
          {mobileLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.href} className="text-charcoal-dark hover:text-primary DEFAULT transition-colour">
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/register"
              className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-accent transition-all"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}