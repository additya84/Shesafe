import React, { createContext, useContext, useState, useEffect, useRef } from "react"

const SafetyContext = createContext(null)

const INITIAL_GUARDIANS = [
  { id: 1, name: "Mom (Sarah)", phone: "+15552345678", relation: "Mother", initial: "M", color: "bg-purple-600" },
  { id: 2, name: "Dad (David)", phone: "+15553456789", relation: "Father", initial: "D", color: "bg-pink-600" },
  { id: 3, name: "Jessica R.", phone: "+15554567890", relation: "Best Friend / Roommate", initial: "J", color: "bg-indigo-600" },
]

export function SafetyProvider({ children }) {
  // State for Guardians
  const [guardians, setGuardians] = useState(() => {
    try {
      const stored = localStorage.getItem("shesafe_guardians")
      return stored ? JSON.parse(stored) : INITIAL_GUARDIANS
    } catch {
      return INITIAL_GUARDIANS
    }
  })

  // Save guardians to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("shesafe_guardians", JSON.stringify(guardians))
    } catch (e) {
      console.error(e)
    }
  }, [guardians])

  // SOS State
  const [isSosActive, setIsSosActive] = useState(false)
  const [countdown, setCountdown] = useState(null)
  const [isSirenPlaying, setIsSirenPlaying] = useState(false)
  const [callModalOpen, setCallModalOpen] = useState(false)

  // Real-time Geolocation State
  const [location, setLocation] = useState({
    latitude: 40.7829, // Default fallback (Central Park)
    longitude: -73.9654,
    accuracy: 5,
    timestamp: new Date().toLocaleTimeString(),
    isLive: false,
    address: "Central Park Ave, New York, NY",
    loading: false,
    error: null,
  })

  // Web Audio Context for Authentic Instant Siren
  const audioCtxRef = useRef(null)
  const oscillatorRef = useRef(null)
  const gainNodeRef = useRef(null)
  const sirenIntervalRef = useRef(null)

  // Start real siren sound using Web Audio API
  const startSiren = () => {
    try {
      if (isSirenPlaying) return
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      if (!AudioCtx) return

      const ctx = new AudioCtx()
      audioCtxRef.current = ctx

      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = "sawtooth"
      osc.frequency.setValueAtTime(700, ctx.currentTime)

      gain.gain.setValueAtTime(0.3, ctx.currentTime)
      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start()
      oscillatorRef.current = osc
      gainNodeRef.current = gain

      // Sweep frequency up and down for authentic emergency siren
      let high = false
      sirenIntervalRef.current = setInterval(() => {
        if (!oscillatorRef.current || !audioCtxRef.current) return
        const nextFreq = high ? 700 : 1050
        oscillatorRef.current.frequency.exponentialRampToValueAtTime(
          nextFreq,
          audioCtxRef.current.currentTime + 0.35
        )
        high = !high
      }, 400)

      setIsSirenPlaying(true)
    } catch (err) {
      console.error("Web Audio siren failed to start:", err)
    }
  }

  // Stop siren sound
  const stopSiren = () => {
    try {
      if (sirenIntervalRef.current) {
        clearInterval(sirenIntervalRef.current)
        sirenIntervalRef.current = null
      }
      if (oscillatorRef.current) {
        oscillatorRef.current.stop()
        oscillatorRef.current.disconnect()
        oscillatorRef.current = null
      }
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close()
        audioCtxRef.current = null
      }
    } catch (err) {
      console.error("Error stopping siren:", err)
    } finally {
      setIsSirenPlaying(false)
    }
  }

  // Toggle siren
  const toggleSiren = () => {
    if (isSirenPlaying) {
      stopSiren()
    } else {
      startSiren()
    }
  }

  // Fetch real geolocation
  const fetchLocation = () => {
    if (!navigator.geolocation) {
      setLocation((prev) => ({ ...prev, error: "Geolocation not supported by device" }))
      return
    }

    setLocation((prev) => ({ ...prev, loading: true }))

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          latitude: Number(pos.coords.latitude.toFixed(5)),
          longitude: Number(pos.coords.longitude.toFixed(5)),
          accuracy: Math.round(pos.coords.accuracy),
          timestamp: new Date().toLocaleTimeString(),
          isLive: true,
          address: `Lat: ${pos.coords.latitude.toFixed(4)}, Lng: ${pos.coords.longitude.toFixed(4)}`,
          loading: false,
          error: null,
        })
      },
      (err) => {
        console.warn("Geolocation prompt skipped or denied:", err.message)
        setLocation((prev) => ({
          ...prev,
          loading: false,
          error: "Using standard GPS fallback coordinates",
        }))
      },
      { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
    )
  }

  // Auto-fetch location on mount
  useEffect(() => {
    fetchLocation()
    return () => stopSiren()
  }, [])

  // Trigger SOS sequence
  const startSos = () => {
    if (isSosActive) {
      cancelSos()
      return
    }

    setCountdown(3)
    fetchLocation()

    let count = 3
    const timer = setInterval(() => {
      count -= 1
      if (count > 0) {
        setCountdown(count)
      } else {
        clearInterval(timer)
        setCountdown(null)
        setIsSosActive(true)
        startSiren()
      }
    }, 800)
  }

  // Cancel SOS
  const cancelSos = () => {
    setCountdown(null)
    setIsSosActive(false)
    stopSiren()
  }

  // Guardian Management
  const addGuardian = (guardianData) => {
    const newEntry = {
      id: Date.now(),
      name: guardianData.name.trim(),
      phone: guardianData.phone.trim() || "+15550000000",
      relation: guardianData.relation?.trim() || "Trusted Contact",
      initial: (guardianData.name.trim().charAt(0) || "G").toUpperCase(),
      color: "bg-purple-600",
    }
    setGuardians((prev) => [...prev, newEntry])
    return newEntry
  }

  const removeGuardian = (id) => {
    setGuardians((prev) => prev.filter((g) => g.id !== id))
  }

  // One-click emergency calling
  const makeCall = (phoneNumber) => {
    const cleanNumber = String(phoneNumber).replace(/[^0-9+]/g, "")
    window.location.href = `tel:${cleanNumber}`
  }

  // Direct SMS dispatch with live Google Maps link
  const getGoogleMapsUrl = () => {
    return `https://www.google.com/maps?q=${location.latitude},${location.longitude}`
  }

  const sendEmergencySms = (targetPhone = "") => {
    const cleanPhone = targetPhone ? String(targetPhone).replace(/[^0-9+]/g, "") : ""
    const message = encodeURIComponent(
      `🚨 EMERGENCY SOS from SheSafe! I need immediate help. My current location is: ${getGoogleMapsUrl()} (Time: ${location.timestamp}). Please call me or send help immediately!`
    )
    window.location.href = `sms:${cleanPhone}?body=${message}`
  }

  const sendWhatsAppAlert = (targetPhone = "") => {
    const cleanPhone = targetPhone ? String(targetPhone).replace(/[^0-9]/g, "") : ""
    const message = encodeURIComponent(
      `🚨 *EMERGENCY SOS via SheSafe!*\nI need immediate assistance. Please check my live location now:\n📍 ${getGoogleMapsUrl()}\n⏱ Time: ${location.timestamp}`
    )
    const url = cleanPhone
      ? `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${message}`
      : `https://api.whatsapp.com/send?text=${message}`
    window.open(url, "_blank")
  }

  const value = {
    guardians,
    addGuardian,
    removeGuardian,
    isSosActive,
    countdown,
    startSos,
    cancelSos,
    isSirenPlaying,
    startSiren,
    stopSiren,
    toggleSiren,
    location,
    fetchLocation,
    getGoogleMapsUrl,
    callModalOpen,
    openCallModal: () => setCallModalOpen(true),
    closeCallModal: () => setCallModalOpen(false),
    makeCall,
    sendEmergencySms,
    sendWhatsAppAlert,
  }

  return <SafetyContext.Provider value={value}>{children}</SafetyContext.Provider>
}

export function useSafety() {
  const context = useContext(SafetyContext)
  if (!context) {
    throw new Error("useSafety must be used within a SafetyProvider")
  }
  return context
}
