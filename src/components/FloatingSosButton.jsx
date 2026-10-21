import React from "react"
import { useSafety } from "../context/SafetyContext"
import { PhoneCall, AlertCircle, VolumeX, BellRing } from "lucide-react"

export default function FloatingSosButton() {
  const {
    openCallModal,
    startSos,
    cancelSos,
    isSosActive,
    countdown,
    isSirenPlaying,
    stopSiren,
  } = useSafety()

  return (
    <aside
      aria-label="Emergency actions"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto"
    >
      {/* If siren is sounding, show immediate mute button */}
      {isSirenPlaying && (
        <button
          onClick={stopSiren}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-bold shadow-xl border border-rose-500 animate-pulse hover:bg-slate-800 transition-all cursor-pointer"
        >
          <VolumeX className="w-4 h-4 text-rose-400" />
          <span>Silence Siren</span>
        </button>
      )}

      {/* Speed Dial Button */}
      <button
        onClick={openCallModal}
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xl shadow-emerald-700/30 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer border border-emerald-400/40"
        title="Open Emergency Speed Dial"
      >
        <PhoneCall className="w-5 h-5 animate-pulse" />
        <span className="hidden sm:inline">Emergency Call</span>
      </button>

      {/* Big SOS Trigger Button */}
      <button
        onClick={isSosActive ? cancelSos : startSos}
        className={`group relative flex items-center justify-center rounded-full shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 cursor-pointer ${
          isSosActive
            ? "w-16 h-16 sm:w-20 sm:h-20 bg-rose-600 text-white ring-8 ring-rose-300 animate-pulse"
            : countdown !== null
            ? "w-16 h-16 sm:w-20 sm:h-20 bg-amber-500 text-white ring-8 ring-amber-300"
            : "w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-rose-600 via-rose-700 to-purple-800 text-white ring-4 ring-rose-200 hover:ring-8 hover:ring-rose-300"
        }`}
        title={isSosActive ? "Click to cancel SOS" : "Emergency SOS Trigger"}
      >
        {countdown !== null ? (
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black">{countdown}</span>
            <span className="text-[9px] font-bold uppercase">Cancel</span>
          </div>
        ) : isSosActive ? (
          <div className="flex flex-col items-center">
            <BellRing className="w-6 h-6 animate-bounce" />
            <span className="text-[10px] font-black tracking-wider">STOP</span>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <AlertCircle className="w-6 h-6 sm:w-7 sm:h-7" />
            <span className="text-xs sm:text-sm font-black tracking-wider">SOS</span>
          </div>
        )}
      </button>
    </aside>
  )
}
