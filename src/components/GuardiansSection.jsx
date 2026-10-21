import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useSafety } from "../context/SafetyContext"
import { Users, Plus, ShieldCheck, Phone, Heart, Trash2, CheckCircle2, MessageSquare } from "lucide-react"

export default function GuardianSection() {
  const {
    guardians,
    addGuardian,
    removeGuardian,
    makeCall,
    sendEmergencySms,
  } = useSafety()

  const [newGuardianName, setNewGuardianName] = useState("")
  const [newGuardianRelation, setNewGuardianRelation] = useState("")
  const [newGuardianPhone, setNewGuardianPhone] = useState("")
  const [isAdding, setIsAdding] = useState(false)
  const [successMsg, setSuccessMsg] = useState("")

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
    setSuccessMsg("Guardian added to your active safety circle!")
    setTimeout(() => setSuccessMsg(""), 2500)
  }

  return (
    <section id="guardians" className="py-24 bg-gradient-to-b from-slate-50 via-purple-50/30 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>Personal Safety Circle</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-outfit tracking-tight">
              Choose the people who always have your back.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Build your private emergency circle with family, roommates, and trusted friends. When you activate SOS, SheSafe immediately alerts all of them simultaneously with live GPS coordinates.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">
                  <strong className="font-semibold text-slate-900">Simultaneous Broadcast:</strong> No waiting for one person to answer; all guardians receive emergency pings at once.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">
                  <strong className="font-semibold text-slate-900">Live Battery & Location:</strong> Contacts see your phone battery level and real-time movement on a live map.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">
                  <strong className="font-semibold text-slate-900">Privacy Guaranteed:</strong> Guardians only receive tracking access when SOS is explicitly triggered.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg shadow-purple-600/25 transition-all transform active:scale-95"
              >
                <span>Build Your Safety Network</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right Interactive Mockup Column */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-purple-900/5 border border-purple-100">
              
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                <div>
                  <h3 className="text-xl font-bold font-outfit text-slate-900">Guardian Management</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Emergency alerts will broadcast to these contacts</p>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-purple-50 text-purple-700 rounded-full border border-purple-200">
                  {guardians.length} Protected
                </span>
              </div>

              {successMsg && (
                <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{successMsg}</span>
                </div>
              )}

              {/* Guardians List */}
              <div className="space-y-3 mb-6">
                {guardians.map((g) => (
                  <div
                    key={g.id}
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-purple-50/40 border border-slate-200/80 transition-colors group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-11 h-11 rounded-2xl ${g.color || "bg-purple-600"} text-white font-bold flex items-center justify-center text-sm shadow-sm`}>
                        {g.initial || g.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-800">{g.name}</h4>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                          <span>{g.relation}</span>
                          <span>•</span>
                          <span className="text-[11px] font-mono">{g.phone}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => makeCall(g.phone)}
                        className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                        title="Call guardian"
                      >
                        <Phone className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="hidden sm:inline">Call</span>
                      </button>

                      <button
                        onClick={() => sendEmergencySms(g.phone)}
                        className="p-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                        title="Send SMS"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-purple-600" />
                        <span className="hidden sm:inline">SMS</span>
                      </button>

                      {guardians.length > 1 && (
                        <button
                          onClick={() => removeGuardian(g.id)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                          aria-label={`Remove ${g.name}`}
                          title="Remove guardian"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Guardian Interactive Form / Toggle */}
              {isAdding ? (
                <form onSubmit={handleAddGuardian} className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-3">
                  <h4 className="text-xs font-bold text-purple-900 uppercase tracking-wider">Add New Guardian Contact</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <input
                      type="text"
                      placeholder="Name (e.g. Sister Emma)"
                      value={newGuardianName}
                      onChange={(e) => setNewGuardianName(e.target.value)}
                      required
                      className="px-3 py-2 bg-white rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-purple-600"
                    />
                    <input
                      type="text"
                      placeholder="Relation (e.g. Sister)"
                      value={newGuardianRelation}
                      onChange={(e) => setNewGuardianRelation(e.target.value)}
                      className="px-3 py-2 bg-white rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-purple-600"
                    />
                    <input
                      type="tel"
                      placeholder="Phone (+1 555 000 0000)"
                      value={newGuardianPhone}
                      onChange={(e) => setNewGuardianPhone(e.target.value)}
                      required
                      className="px-3 py-2 bg-white rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-purple-600"
                    />
                  </div>
                  <div className="flex justify-end gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setIsAdding(false)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-colors cursor-pointer"
                    >
                      Add Guardian
                    </button>
                  </div>
                </form>
              ) : (
                <button
                  onClick={() => setIsAdding(true)}
                  className="w-full py-3 px-4 rounded-2xl border-2 border-dashed border-purple-200 hover:border-purple-400 text-purple-700 text-xs font-bold flex items-center justify-center gap-2 hover:bg-purple-50/50 transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Another Guardian Contact</span>
                </button>
              )}

              {/* Security guarantee footnote */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-4 h-4 text-purple-600 flex-shrink-0" />
                <span>Guardians receive verified verification codes before linking.</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}