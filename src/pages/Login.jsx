import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Shield, Heart, Eye, EyeOff, ArrowLeft, Mail, Lock, CheckCircle2 } from "lucide-react"

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setSuccessMsg("Welcome back to SheSafe! Redirecting...")
      setTimeout(() => {
        navigate("/")
      }, 1200)
    }, 800)
  }

  const handleGuestLogin = () => {
    setSuccessMsg("Logged in as Guest! Redirecting...")
    setTimeout(() => {
      navigate("/")
    }, 800)
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-50 via-white to-pink-50 px-4 py-12 relative overflow-hidden font-sans">
      {/* Background ambient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl pointer-events-none" />

      {/* Back to Home Button */}
      <div className="w-full max-w-md mb-4 z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-purple-700 transition-colors py-2 px-3 rounded-lg hover:bg-white/60 backdrop-blur-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to SheSafe Home
        </Link>
      </div>

      <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 sm:p-10 max-w-md w-full shadow-2xl shadow-purple-900/10 border border-purple-100/80 z-10">
        {/* Logo and Brand */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/25 mb-4 group">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div className="flex items-center gap-1.5 justify-center mb-1">
            <span className="text-2xl font-bold font-outfit text-slate-900">SheSafe</span>
            <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
          </div>
          <h2 className="text-xl font-semibold text-slate-800">Welcome Back</h2>
          <p className="text-sm text-slate-500 mt-1">
            Sign in to access your safety network and contacts
          </p>
        </div>

        {successMsg && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3 animate-fade-in">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-500/10 transition-all bg-slate-50/50 hover:bg-white focus:bg-white"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Password
              </label>
              <a
                href="#forgot"
                onClick={(e) => {
                  e.preventDefault()
                  alert("Password reset instructions will be sent to your email.")
                }}
                className="text-xs font-semibold text-purple-600 hover:text-purple-700 transition-colors"
              >
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Lock className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full pl-11 pr-11 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-500/10 transition-all bg-slate-50/50 hover:bg-white focus:bg-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="w-4 h-4 text-purple-600 rounded border-slate-300 focus:ring-purple-500 cursor-pointer"
            />
            <label htmlFor="remember-me" className="ml-2.5 text-xs text-slate-600 cursor-pointer select-none">
              Keep me signed in on this device
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3.5 px-6 rounded-xl font-semibold shadow-lg shadow-purple-600/25 hover:shadow-xl hover:shadow-purple-600/35 transition-all transform active:scale-[0.99] disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer"
          >
            {isLoading ? (
              <span className="inline-flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Signing in...
              </span>
            ) : (
              "Sign In to SheSafe"
            )}
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-slate-200" />
          <span className="px-3 text-xs uppercase font-medium text-slate-400 tracking-wider">or</span>
          <div className="flex-1 border-t border-slate-200" />
        </div>

        <button
          type="button"
          onClick={handleGuestLogin}
          className="w-full border border-slate-200 hover:border-purple-300 text-slate-700 hover:text-purple-700 bg-slate-50 hover:bg-purple-50/50 py-3 rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2"
        >
          Explore as Guest (Preview Mode)
        </button>

        <p className="text-center text-xs text-slate-500 mt-8">
          Don't have an account yet?{" "}
          <Link
            to="/register"
            className="font-semibold text-purple-600 hover:text-purple-800 transition-colors underline-offset-2 hover:underline"
          >
            Create an account
          </Link>
        </p>
      </div>

      {/* Safety Notice Footer */}
      <div className="mt-8 text-center text-xs text-slate-500 max-w-sm flex items-center justify-center gap-2">
        <Shield className="w-4 h-4 text-purple-600" />
        <span>256-bit encrypted emergency response network</span>
      </div>
    </div>
  )
}