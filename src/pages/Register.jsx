import React from "react"

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-very-light">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-lg">
        <div className="w-16 h-16 rounded-full bg-primary DEFAULT mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 0 1-8 0 4 4 0 0 1 8 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 3a4 4 0 0 1 4 4h2m-4 8a4 4 0 0 1-4 4H4m-4-4a4 4 0 0 0-4-4H4" />
          </svg>
        </div>

        <h2 className="text-3xl font-bold text-charcoal-dark mb-4">Create account</h2>

        <p className="text-charcoal-dark/60 mb-8">Sign up to protect yourself with SheSafe</p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-charcoal-dark/30 rounded-lg text-sm focus:outline-none focus:border-primary transition-colour"
            required
          />
          <input
            type="password"
            placeholder="Create password"
            className="w-full px-4 py-3 border border-charcoal-dark/30 rounded-lg text-sm focus:outline-none focus:border-primary transition-colour"
            required
          />
        </div>

        <button className="w-full bg-primary text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-primary-accent transition-all mt-4">
          Create Account
        </button>

        <p className="text-xs text-charcoal-dark/50 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-primary DEFAULT hover:text-primary-accent transition-colour">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}