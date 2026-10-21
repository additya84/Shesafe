import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { Shield, Heart, Eye, EyeOff, ArrowLeft, Mail, Lock, User, Phone, CheckCircle2 } from "lucide-react"

export default function Register() {
  const navigate = useNavigate()
  const { register } = useAuth()
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(true)
  const [successMsg, setSuccessMsg] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!agreeTerms) {
      alert("Please agree to the privacy policy to continue.")
      return
    }

    const res = register({
      name: fullName,
      email,
      phone: phoneNumber,
      password,
    })

    if (res.success) {
      setSuccessMsg("Account created! Redirecting to your Dashboard...")
      setTimeout(() => {
        navigate("/dashboard")
      }, 350)
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-50 via-white to-pink-50 px-4 py-12 relative overflow-hidden font-sans">
      {/* Background ambient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl pointer-events-none" />

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
          <h2 className="text-xl font-semibold text-slate-800">Create Safety Account</h2>
          <p className="text-sm text-slate-500 mt-1">
            Set up your protected circle and rapid emergency response
          </p>
        </div>

        {successMsg && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <User className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. Maya Johnson"
                required
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-500/10 transition-all bg-slate-50/50 hover:bg-white focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
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
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-500/10 transition-all bg-slate-50/50 hover:bg-white focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Emergency Mobile Number
            </label>
            <div className="relative">
              <Phone className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+1 (555) 000-0000"
                required
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-500/10 transition-all bg-slate-50/50 hover:bg-white focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password (min 6 chars)"
                minLength={6}
                required
                className="w-full pl-11 pr-11 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:border-purple-600 focus:ring-4 focus:ring-purple-500/10 transition-all bg-slate-50/50 hover:bg-white focus:bg-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-start pt-1">
            <input
              id="agree-terms"
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="w-4 h-4 mt-0.5 text-purple-600 rounded border-slate-300 focus:ring-purple-500 cursor-pointer"
            >
            </input>
            <label htmlFor="agree-terms" className="ml-2.5 text-xs text-slate-600 cursor-pointer select-none leading-relaxed">
              I agree to encrypted emergency location sharing and SheSafe's{" "}
              <a href="#terms" className="text-purple-600 hover:underline">Privacy Policy</a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 px-6 rounded-xl font-semibold shadow-lg shadow-purple-600/25 hover:shadow-xl hover:shadow-purple-600/35 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            <span>Create My SheSafe Account</span>
          </button>
        </form>

        <p className="text-center text-xs text-slate-500 mt-6">
          Already registered?{" "}
          <Link
            to="/login"
            className="font-semibold text-purple-600 hover:text-purple-800 transition-colors underline-offset-2 hover:underline"
          >
            Log In here
          </Link>
        </p>
      </div>

      {/* Safety Notice Footer */}
      <div className="mt-8 text-center text-xs text-slate-500 max-w-sm flex items-center justify-center gap-2">
        <Shield className="w-4 h-4 text-purple-600" />
        <span>Your data is strictly encrypted and protected</span>
      </div>
    </div>
  )
}