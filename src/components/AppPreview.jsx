import React, { useState } from "react"
import { useSafety } from "../context/SafetyContext"
import { Shield, MapPin, Phone, BellRing, Clock, Users, Volume2, VolumeX, CheckCircle, BatteryMedium, AlertTriangle, PhoneCall } from "lucide-react"

export default function AppPreview() {
  const {
    guardians,
    isSirenPlaying,
    toggleSiren,
    location,
    fetchLocation,
    openCallModal,
  } = useSafety()

  const [gpsShared, setGpsShared] = useState(true)

  const handleToggleGps = () => {
    if (!gpsShared) {
      fetchLocation()
      setGpsShared(true)
    } else {
      setGpsShared(false)
    }
  }

  return (
    <section id="preview" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider">
            Interactive Experience
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-outfit tracking-tight">
            A safety dashboard designed around clarity.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            In an emergency, every interface element must be unambiguous and immediate. Test out the SheSafe safety command center preview below.
          </p>
        </div>

        {/* Mockup Dashboard Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl shadow-purple-900/10 border border-purple-100 overflow-hidden">
            
            {/* Top Navigation Bar of Dashboard */}
            <div className="bg-slate-900 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-outfit">SheSafe Command Hub</h3>
                  <p className="text-[11px] text-slate-400">User: Maya Johnson • Safety Shield Active</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  <BatteryMedium className="w-4 h-4 text-emerald-400" />
                  <span>88% Battery</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>GPS Accurate (3m)</span>
                </div>
              </div>
            </div>

            {/* Main Dashboard Content */}
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Left Widget: Emergency Quick Actions */}
                <div className="md:col-span-1 space-y-4">
                  <div className="bg-purple-50/70 rounded-2xl p-5 border border-purple-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-purple-900 mb-3">
                      Emergency Actions
                    </h4>
                    
                    <button
                      onClick={toggleSiren}
                      className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm ${
                        isSirenPlaying
                          ? "bg-rose-600 text-white animate-pulse"
                          : "bg-white text-slate-800 border border-slate-200 hover:border-purple-300"
                      }`}
                    >
                      {isSirenPlaying ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-rose-500" />}
                      <span>{isSirenPlaying ? "Siren Sounding (Stop)" : "Play Live Siren"}</span>
                    </button>

                    <button
                      onClick={handleToggleGps}
                      className={`w-full mt-2 py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm ${
                        gpsShared
                          ? "bg-purple-600 text-white"
                          : "bg-white text-slate-800 border border-slate-200"
                      }`}
                    >
                      <MapPin className="w-4 h-4" />
                      <span>{gpsShared ? "GPS Broadcast: Active" : "Enable GPS Sharing"}</span>
                    </button>

                    <button
                      onClick={openCallModal}
                      className="w-full mt-2 py-3 px-4 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>One-Tap Speed Dial</span>
                    </button>
                  </div>

                  {/* System Status info */}
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs text-slate-600 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Emergency Protocol:</span>
                      <span className="font-semibold text-slate-800">Ready</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Offline Fallback:</span>
                      <span className="font-semibold text-emerald-600">SMS Enabled</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Guardians Synced:</span>
                      <span className="font-semibold text-slate-800">{guardians.length} Contacts</span>
                    </div>
                  </div>
                </div>

                {/* Center & Right: Live Status & Simulation Map */}
                <div className="md:col-span-2 space-y-6">
                  
                  {/* Simulated Map View */}
                  <div className="relative bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 h-64 flex items-center justify-center shadow-inner">
                    {/* Simulated Map Background Grid */}
                    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#9333ea_1px,transparent_1px)] [background-size:16px_16px]" />
                    
                    {/* Simulated Street overlay lines */}
                    <div className="absolute inset-x-0 top-1/2 h-4 bg-slate-300/40 -translate-y-1/2 -rotate-6" />
                    <div className="absolute inset-y-0 left-1/3 w-4 bg-slate-300/40" />

                    {/* Pin showing user location */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="relative flex items-center justify-center">
                        <span className="absolute w-12 h-12 bg-purple-500/30 rounded-full animate-ping" />
                        <div className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg border-2 border-white">
                          <MapPin className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="mt-2 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-md text-[11px] font-bold text-slate-800 border border-slate-200">
                        GPS Fix: {location.latitude}, {location.longitude}
                      </div>
                    </div>

                    {/* Top right indicator */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] font-bold text-slate-700 shadow-sm border border-slate-200 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Real-time GPS Lock</span>
                    </div>
                  </div>

                  {/* Guardian Activity Log */}
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-purple-600" />
                        <span>Guardian Circle Status</span>
                      </h4>
                      <span className="text-[11px] text-slate-500 font-medium">All {guardians.length} Synced</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {guardians.slice(0, 3).map((g) => (
                        <div key={g.id} className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                          <p className="text-xs font-bold text-slate-800">{g.name}</p>
                          <p className="text-[10px] text-emerald-600 flex items-center gap-1 mt-0.5">
                            <CheckCircle className="w-3 h-3" />
                            <span>Connected • {g.relation}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Dashboard Footer Banner */}
            <div className="bg-purple-50/80 px-6 py-3 border-t border-purple-100 flex flex-wrap items-center justify-between text-xs text-slate-600">
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="w-3.5 h-3.5 text-purple-600" />
                <span>Last GPS sync: {location.timestamp}</span>
              </span>
              <span className="text-purple-700 font-semibold">
                Safety Dashboard Preview • Web & Mobile Synchronized
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}