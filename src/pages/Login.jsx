import React from "react"

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-very-light">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-lg">
        <div className="w-16 h-16 rounded-full bg-primary DEFAULT mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 0 1-8 0 4 4 0 0 1 8 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 3a4 4 0 0 1 4 4h2m-4 8a4 4 0 0 1-4 4H4m4-4a4 4 0 0 0-4-4H4" />
          </svg>
        </div>

        <h2 className="text-3xl font-bold text-charcoal-dark mb-4">Welcome back</h2>

        <p className="text-charcoal-dark/60 mb-8">Log in to your SheSafe account</p>

        <div className="space-y-4">
          <button className="w-full bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-accent transition-all">
            Login with Email
          </button>
          <button className="w-full border-2 border-charcoal-dark/30 text-charcoal-dark px-6 py-3 rounded-full hover:bg-primary DEFAULT transition-all">
            Continue as Guest
          </button>
        </div>

        <p className="text-xs text-charcoal-dark/50 mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="font-medium text-primary DEFAULT hover:text-primary-accent transition-colour">
            Get Started
          </Link>
        </p>
      </div>
    </div>
  )
}