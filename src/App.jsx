import React, { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { SafetyProvider } from "./context/SafetyContext"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import EmergencyCallModal from "./components/EmergencyCallModal"
import FloatingSosButton from "./components/FloatingSosButton"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <AuthProvider>
      <SafetyProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Fallback route */}
          <Route path="*" element={<Home />} />
        </Routes>
        
        {/* Global Emergency Components available everywhere */}
        <EmergencyCallModal />
        <FloatingSosButton />
      </SafetyProvider>
    </AuthProvider>
  )
}

export default App