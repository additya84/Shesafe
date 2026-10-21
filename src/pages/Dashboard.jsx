import React, { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useSafety } from "../context/SafetyContext"
import { Link, useNavigate } from "react-router-dom"
import {
  Shield,
  Heart,
  AlertTriangle,
  Phone,
  PhoneCall,
  Volume2,
  VolumeX,
  MapPin,
  Users,
  Plus,
  Trash2,
  LogOut,
  Navigation,
  CheckCircle2,
  ExternalLink,
  Copy,
  Check,
  RefreshCw,
  BellRing,
  MessageSquare
} from "lucide-react"

export default function Dashboard() {
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()
  const {
    guardians,
    addGuardian,
    removeGuardian,
    isSosActive,
    countdown,
    startSos,
    cancelSos,
    isSirenPlaying,
    toggleSiren,
    location,
    fetchLocation,
    getGoogleMapsUrl,
    openCallModal,
    makeCall,
    sendEmergencySms,
    sendWhatsAppAlert,
  } = useSafety()

  const [newGuardianName, setNewGuardianName] = useState("")
  const [newGuardianRelation, setNewGuardianRelation] = useState("")
  const [newGuardianPhone, setNewGuardianPhone] = useState("")
  const [isAdding, setIsAdding] = useState(false)
  const [copied, setCopied] = useState(false)
  const [actionFeedback, setActionFeedback] = useState("")

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  const handleAddGuardian = (e) => {
    e.preventDefault()
    if (!newGuardianName.trim()) return
    addGuardian({
      name: newGuardianName,
      relation: newGuardianRelation,
      phone: newGuardianPhone || "+1 (555) 000-0000",
    })
    setNewGuardianName("")
    setNewGuardianRelation("")
    setNewGuardianPhone("")
    setIsAdding(false)
    setActionFeedback("New guardian added successfully!")
    setTimeout(() => setActionFeedback(""), 3000)
  }

  const handleCopyLocation = () => {
    navigator.clipboard.writeText(getGoogleMapsUrl())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-24">
      {/* Top Navigation */}
      <header className="bg-white border-b border-purple-100 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center text-white shadow-md shadow-purple-600/20">
              <Shield className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xl font-bold font-outfit text-slate-900">SheSafe</span>
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            </div>
          </Link>

          <div className="flex items-center gap-3">
            {/* Quick Speed Dial Modal button */}
            <button
              onClick={openCallModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold transition-colors cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-rose-600 animate-pulse" />
              <span>Speed Dial Hotlines</span>
            </button>

            {/* User profile dropdown / logout */}
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center">
                {currentUser?.name ? currentUser.name.charAt(0).toUpperCase() : "U"}
              </div>
              <span className="text-xs font-semibold text-slate-700 hidden sm:inline">
                {currentUser?.name || "Maya"}
              </span>
              <button
                onClick={handleLogout}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg transition-colors cursor-pointer"
                title="Log Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* Welcome & Status Banner */}
        <div className="bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-purple-900/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-purple-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Safety Shield Online</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-outfit">
              Hello, {currentUser?.name || "Safety User"}
            </h1>
            <p className="text-sm text-purple-200 max-w-xl">
              Your safety network is primed. In an emergency, tap the big SOS trigger below or use the speed dial hotline for immediate assistance.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 relative z-10 w-full md:w-auto">
            <button
              onClick={openCallModal}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Emergency Call (112 / 1091)</span>
            </button>

            <button
              onClick={toggleSiren}
              className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer border ${
                isSirenPlaying
                  ? "bg-rose-600 hover:bg-rose-700 text-white border-rose-400 animate-pulse"
                  : "bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm"
              }`}
            >
              {isSirenPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span>{isSirenPlaying ? "Silence Siren" : "Test Siren Sound"}</span>
            </button>
          </div>
        </div>

        {actionFeedback && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{actionFeedback}</span>
          </div>
        )}

        {/* Big SOS Trigger Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-sm text-center">
          <h2 className="text-xl font-bold font-outfit text-slate-900 mb-2">Emergency Master SOS</h2>
          <p className="text-xs text-slate-500 max-w-md mx-auto mb-6">
            Pressing this initiates the 3-second safety countdown, locks your live GPS coordinates, and alerts all {guardians.length} guardians simultaneously.
          </p>

          <button
            onClick={isSosActive ? cancelSos : startSos}
            className={`w-36 h-36 sm:w-44 sm:h-44 rounded-full mx-auto flex flex-col items-center justify-center shadow-2xl transition-all transform hover:scale-105 active:scale-95 cursor-pointer ${
              isSosActive
                ? "bg-rose-600 text-white ring-12 ring-rose-200 animate-pulse"
                : countdown !== null
                ? "bg-amber-500 text-white ring-12 ring-amber-200"
                : "bg-gradient-to-tr from-rose-600 via-rose-700 to-purple-800 text-white ring-8 ring-purple-100 hover:ring-12 hover:ring-rose-200"
            }`}
          >
            {countdown !== null ? (
              <>
                <span className="text-4xl font-black">{countdown}</span>
                <span className="text-xs font-bold uppercase tracking-wider mt-1">Tap to Cancel</span>
              </>
            ) : isSosActive ? (
              <>
                <BellRing className="w-9 h-9 animate-bounce mb-1" />
                <span className="text-base font-black tracking-wider">SOS ACTIVE</span>
                <span className="text-[10px] uppercase font-bold opacity-90 mt-1">Tap to Stop</span>
              </>
            ) : (
              <>
                <AlertTriangle className="w-9 h-9 mb-1" />
                <span className="text-2xl font-black tracking-wider">TRIGGER SOS</span>
                <span className="text-[10px] uppercase font-bold opacity-80 mt-1">Hold or Click</span>
              </>
            )}
          </button>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Real-time Siren Sound Ready</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Direct SMS & WhatsApp Link Ready</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Instant Guardian Broadcast</span>
            </span>
          </div>
        </div>

        {/* Two-Column Grid: Location & Speed Dial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Live GPS & Broadcast */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 border border-purple-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center">
                    <MapPin className="w-4 h-4 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-outfit text-slate-900">Live GPS Coordinates</h3>
                    <p className="text-xs text-slate-500">Shared automatically during emergency</p>
                  </div>
                </div>

                <button
                  onClick={fetchLocation}
                  disabled={location.loading}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                  title="Update GPS coordinates"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${location.loading ? "animate-spin" : ""}`} />
                  <span>Update GPS</span>
                </button>
              </div>

              {/* Coordinates Box */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-3 mb-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Latitude & Longitude:</span>
                  <span className="font-mono font-bold text-purple-700">
                    {location.latitude}, {location.longitude}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">GPS Accuracy:</span>
                  <span className="font-semibold text-emerald-700">Within {location.accuracy} meters</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Last Synced:</span>
                  <span className="text-slate-700">{location.timestamp}</span>
                </div>
              </div>

              {/* Map Preview Simulation */}
              <div className="relative h-36 bg-slate-200 rounded-2xl overflow-hidden border border-slate-300 flex items-center justify-center mb-4">
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#7c3aed_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative flex flex-col items-center z-10">
                  <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg border-2 border-white">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="mt-1 text-[11px] font-bold bg-white/90 px-2 py-0.5 rounded-full shadow-xs">
                    Current Fix Locked
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Share Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-slate-100">
              <button
                onClick={handleCopyLocation}
                className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Copied to Clipboard!" : "Copy Map Link"}</span>
              </button>

              <a
                href={getGoogleMapsUrl()}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Emergency Speed Dial Hotlines */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 border border-purple-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
                    <Phone className="w-4 h-4 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-outfit text-slate-900">One-Tap Emergency Calling</h3>
                    <p className="text-xs text-slate-500">Tap to call local authorities immediately</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">
                  Priority Direct
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <button
                  onClick={() => makeCall("112")}
                  className="w-full p-4 rounded-2xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white flex items-center justify-between transition-all transform active:scale-98 shadow-sm cursor-pointer group"
                >
                  <div className="text-left">
                    <span className="font-bold text-sm block">112 — National Emergency All-in-One</span>
                    <span className="text-xs text-rose-200">Police, Ambulance, Fire Helpline</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/20 group-hover:bg-white text-white group-hover:text-rose-600 flex items-center justify-center transition-colors">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                </button>

                <button
                  onClick={() => makeCall("1091")}
                  className="w-full p-4 rounded-2xl bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white flex items-center justify-between transition-all transform active:scale-98 shadow-sm cursor-pointer group"
                >
                  <div className="text-left">
                    <span className="font-bold text-sm block">1091 — Women Helpline (Dedicated)</span>
                    <span className="text-xs text-purple-200">24/7 Rapid Response for Women</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/20 group-hover:bg-white text-white group-hover:text-purple-600 flex items-center justify-center transition-colors">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                </button>

                <button
                  onClick={() => makeCall("108")}
                  className="w-full p-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white flex items-center justify-between transition-all transform active:scale-98 shadow-sm cursor-pointer group"
                >
                  <div className="text-left">
                    <span className="font-bold text-sm block">108 — Medical Ambulance Emergency</span>
                    <span className="text-xs text-emerald-200">Immediate Medical Assistance</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/20 group-hover:bg-white text-white group-hover:text-emerald-600 flex items-center justify-center transition-colors">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                </button>
              </div>
            </div>

            {/* Instant Broadcast Helpers */}
            <div className="pt-4 border-t border-slate-100 flex gap-2">
              <button
                onClick={() => sendEmergencySms(guardians[0]?.phone || "")}
                className="flex-1 py-2.5 px-3 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-purple-200"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Emergency SMS</span>
              </button>
              <button
                onClick={() => sendWhatsAppAlert()}
                className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-emerald-200"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Send WhatsApp SOS</span>
              </button>
            </div>
          </div>

        </div>

        {/* Guardian Management Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" />
                <h3 className="text-xl font-bold font-outfit text-slate-900">
                  Your Guardian Circle ({guardians.length})
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                These contacts receive simultaneous SMS notifications and live location links during an emergency.
              </p>
            </div>

            <button
              onClick={() => setIsAdding(!isAdding)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>{isAdding ? "Close Form" : "Add New Guardian"}</span>
            </button>
          </div>

          {/* Add Guardian Form */}
          {isAdding && (
            <form onSubmit={handleAddGuardian} className="mb-6 p-5 rounded-2xl bg-purple-50/70 border border-purple-200 animate-fade-in space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-900">Add Guardian Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="Full Name (e.g. Maya's Sister)"
                  value={newGuardianName}
                  onChange={(e) => setNewGuardianName(e.target.value)}
                  required
                  className="px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-900 focus:outline-none focus:border-purple-600"
                />
                <input
                  type="text"
                  placeholder="Relationship (e.g. Sister / Roommate)"
                  value={newGuardianRelation}
                  onChange={(e) => setNewGuardianRelation(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-900 focus:outline-none focus:border-purple-600"
                />
                <input
                  type="tel"
                  placeholder="Phone Number (+1 555 000 0000)"
                  value={newGuardianPhone}
                  onChange={(e) => setNewGuardianPhone(e.target.value)}
                  required
                  className="px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-900 focus:outline-none focus:border-purple-600"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-sm transition-colors"
                >
                  Save Guardian
                </button>
              </div>
            </form>
          )}

          {/* Guardians List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {guardians.map((g) => (
              <div
                key={g.id}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-purple-300 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-2xl ${g.color} text-white font-bold flex items-center justify-center text-sm shadow-sm`}>
                      {g.initial}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{g.name}</h4>
                      <p className="text-xs text-slate-500">{g.relation}</p>
                      <p className="text-[11px] font-mono text-slate-600 mt-0.5">{g.phone}</p>
                    </div>
                  </div>

                  {guardians.length > 1 && (
                    <button
                      onClick={() => removeGuardian(g.id)}
                      className="text-slate-400 hover:text-rose-600 p-1 rounded-lg transition-colors"
                      title="Remove guardian"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-slate-200/60">
                  <button
                    onClick={() => makeCall(g.phone)}
                    className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </button>

                  <button
                    onClick={() => sendEmergencySms(g.phone)}
                    className="py-2 px-3 rounded-xl bg-white hover:bg-purple-50 text-purple-700 border border-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    title="Send SMS"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>SMS</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  )
}
