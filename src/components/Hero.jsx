import React from "react"
import { Link } from "react-router-dom"
{/* Phone mockup component will be added separately */}

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Decorative gradient background */}
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-lavender-light to-white" />
        <div className="absolute bottom-0 right-0 w-96 bg-gradient-to-l from-rose-soft to-primary-dark" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative flex flex-col lg:flex-row gap-12 items-center">

        <div className="text-center lg:text-left">
          <span className="inline-block bg-primary-light text-primary-accent text-sm px-3 py-1 rounded-full mb-6">
            🛡️ Built for everyday safety
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal-dark leading-tight mb-6">
            Your safety.<br />
            <span className="text-primary-accent font-bold">One tap away.</span>
          </h1>

          <p className="text-lg md:text-xl text-charcoal-dark/70 max-w-xl mb-8">
            Stay connected to the people you trust. SheSafe brings emergency alerts, trusted guardians, location sharing and rapid SOS assistance together in one simple safety system.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/register" className="bg-primary text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-primary-accent transition-all inline-block">
              Get Started
            </Link>
            <Link to="#how-it-works" className="border-2 border-charcoal-dark/30 text-primary-default text-lg px-6 py-3 rounded-full hover:border-primary DEFAULT transition-all inline-block">
              See How It Works
            </Link>
          </div>

          <div className="mt-8 flex gap-3 text-sm text-charcoal-dark/60">
            <span>No complicated setup</span>
            <span>Private by design</span>
            <span>Built for emergencies</span>
          </div>
        </div>

        <div className="relative lg:w-1/2 flex justify-center">
          {/* Phone mockup box */}
          <div className="relative w-80 md:w-96 bg-white rounded-2xl overflow-shadow shadow-lg transform hover:translate-y-2 transition-transform">
            {/* Screen area */}
            <div className="relative h-44 bg-gray-100 rounded-t-2xl flex items-center justify-center">
              <div className="w-full h-full bg-primary-light rounded-t-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-accent mb-4">SheSafe</div>
                  <div className="text-lg text-charcoal-dark/70">You're protected</div>
                  <div className="text-sm text-charcoal-dark/50">Premium safety status</div>
                </div>
              </div>

              {/* Safety indicator */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* Status labels */}
              <div className="absolute -bottom-2 -right-2 flex gap-2 text-xs">
                <span className="bg-lavender-light text-primary-default px-2 py-1 rounded">Guardian:</span>
                <span className="bg-lavender-light text-primary-default px-2 py-1 rounded">Online</span>
              </div>
            </div>

            {/* SOS button */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <button
                className="w-14 h-14 bg-primary DEFAULT rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                aria-label="Emergency SOS button"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.535 0 2.697-1.242 2.723-2.773L21.723 6.23c-.03-1.535-1.253-2.773-2.733-2.773H9.94c-1.48 0-2.697 1.242-2.733 2.773L5.273 21 c-.03 1.535 1.257 2.773 2.733 2.773zm0 0v-9.5c0-.655.134-1.29.381-1.929l1.55-2.17c.536-.73.886-1.582.886-2.535a4.634 4.634 0 0 0-2.835-3.375H3.134a4.634 4.634 0 0 0-2.835 3.375l1.55 2.17c.246.639.374 1.274.381 1.929v9.5z" />
                </svg>
              </button>
            </div>

            {/* Guardian cards area */}
            <div className="absolute top-6 left-6 flex gap-3">
              {Array.from({ length: 3 }, (_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-lavender-light rounded-full flex items-center justify-center text-xs font-medium"
                  style={{ color: 'var(--rose-accent)' }}
                >
                  {i === 0 && "M"}
                  {i === 1 && "D"}
                  {i === 2 && "S"}
                </div>
              ))}
            </div>
          </div>

          {/* Decorative floating shapes */}
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-rose-soft rounded-full opacity-60 animate-float" />
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary-light rounded-full opacity-40" />
        </div>
      </div>
    </section>
  )
}