import React from "react"
import { Shield, MapPin, Phone, Users, Clock, Volume2 } from "lucide-react"

export default function AppPreview() {
  return (
    <section id="preview" className="py-24 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider">
            Dashboard Preview
          </div>
          <h2 className="text-3xl font-bold text-slate-900 font-outfit">
            A safety dashboard designed around clarity
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Every element is positioned for speed and clarity in an emergency.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg shadow-purple-900/10 border border-purple-100 overflow-hidden">

            {/* Header Bar */}
            <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-bold font-outfit">SheSafe Command Hub</h3>
                  <p className="text-[11px] text-slate-400">User: Maya • Safety Active</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>88% Battery</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-emerald-300 border border-purple-500/30">
                  <MapPin className="w-4 h-4" />
                  <span>GPS Location Shared</span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

                {/* Left: Emergency Actions */}
                <div className="space-y-4">
                  <div className="bg-purple-50/70 rounded-2xl p-4 border border-purple-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-purple-900 mb-3">
                      Emergency Actions
                    </h4>
                    <button className="w-full py-3 px-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg text-center" aria-label="Emergency SOS">
                      <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.535 0 2.697-1.242 2.723-2.773L21.723 6.23c-.03-1.535-1.253-2.773-2.733-2.773H9.94c-1.48 0-2.697 1.242-2.733 2.773L5.273 21c-.03 1.535 1.257 2.773 2.733 2.773zm0 0v-9.5c0-.655.134-1.29.381-1.929l1.55-2.17c.536-.73.886-1.582.886-2.535a4.634 4.634 0 0 0-2.835-3.375H3.134a4.634 4.634 0 0 0-2.835 3.375l1.55 2.17c.246.639.374 1.274.381 1.929v9.5z" />
                      </svg>
                      SOS Emergency
                    </button>
                    <button className="w-full mt-3 py-3 px-4 rounded-xl font-bold text-xs text-purple-600 bg-white border border-purple-300 hover:border-purple-500 transition-colors cursor-default" aria-label="GPS status">
                      <MapPin className="w-4 h-4 inline mr-2" /> GPS Broadcast: Active (Simulated)
                    </button>
                    <button className="w-full mt-3 py-3 px-4 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-2 transition-colors cursor-default" aria-label="Emergency call">
                      <Phone className="w-4 h-4 inline mr-2" /> One-Tap Speed Dial (Planned)
                    </button>
                    <button className="w-full mt-3 py-3 px-4 rounded-xl font-bold text-xs bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center gap-2 cursor-default" aria-label="Siren status">
                      <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.535 0 2.697-1.242 2.723-2.773L21.723 6.23c-.03-1.535-1.253-2.773-2.733-2.773L9.94 6.23c-.03-1.535-1.253-2.773-2.733-2.773H5.273a4.634 4.634 0 0 0-2.835-3.375l1.55-2.17c-.536-.73-1.046-1.705-1.445-2.863L1.996 7.313a4.5 4.5 0 0 1-2.865-2.336 H3.04a4.5 4.5 0 0 1-2.864-2.336 4.5 4.5 0 0 1-2.865 2.336L1.996 16.687H5.273a4.634 4.634 0 0 1 2.835 3.375l1.55 2.17c.536.73 1.046 1.705 1.445 2.863l1.594 3.125a4.5 4.5 0 0 0 2.865 2.336h6.928a4.5 4.5 0 0 0 2.864-2.336 4.5 4.5 0 0 1 2.865 2.336l1.594-3.125zm-9.5 9a2 2 0 110-4 2 2 0 010 4zm12 0a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                      Siren: Disabled (Simulated)
                    </button>
                  </div>

                  {/* System Status */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs text-slate-600 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Emergency Protocol:</span>
                      <span className="font-semibold text-slate-800">Ready</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Guardians Synced:</span>
                      <span className="font-semibold text-slate-800">3 Contacts</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Siren Status:</span>
                      <span className="font-semibold text-rose-500">Disabled</span>
                    </div>
                  </div>
                </div>

                {/* Guardian Circle */}
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-purple-600" />
                      <span>Guardian Circle Status</span>
                    </h4>
                    <span className="text-[11px] text-slate-500 font-medium">All 3 Synced</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {"Sister Brother Friend".split(" ").map((name, i) => (
                      <div key={i} className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                        <p className="text-xs font-bold text-slate-800">{name}</p>
                        <p className="text-[10px] text-emerald-600 flex items-center gap-1 mt-0.5">
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Connected • {name}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Status */}
                <div>
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-purple-900 mb-3">
                      Live Safety Status
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-slate-600">Safety Status</p>
                        <p className="text-xl font-bold text-purple-600">Active</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-600">Last Location</p>
                        <p className="text-xl font-bold text-emerald-600">Just now</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-purple-100/50 flex items-center gap-2 text-xs text-purple-500">
                    <svg className="w-3 h-3 text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 9v2m0 4h.01M9 19a18 18 0 005.022-1.675A18.03 18.03 0 0012 31a18.03 18.03 0 00-5.022 1.675A18 18 0 009 19z" />
                    </svg>
                    <span>Siren: Disabled • Ready to activate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Banner */}
        <div className="bg-purple-50/80 px-6 py-3 border-t border-purple-100 flex items-center justify-between text-xs text-slate-600">
          <span className="flex items-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5 text-purple-600" />
            <span>Dashboard Preview • Web & Mobile Synchronized</span>
          </span>
          <span className="text-purple-700 font-semibold">Plan your safety • Free to use</span>
        </div>
      </div>
    </section>
  )
}