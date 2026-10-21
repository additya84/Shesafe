import React, { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext(null)

const DEFAULT_USER = {
  id: "user-1",
  name: "Maya Johnson",
  email: "maya@example.com",
  phone: "+1 (555) 234-5678",
  joinedAt: "October 2026",
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const stored = localStorage.getItem("shesafe_session")
      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  })

  const [registeredUsers, setRegisteredUsers] = useState(() => {
    try {
      const stored = localStorage.getItem("shesafe_registered_users")
      return stored ? JSON.parse(stored) : [DEFAULT_USER]
    } catch {
      return [DEFAULT_USER]
    }
  })

  // Save registered users list
  useEffect(() => {
    try {
      localStorage.setItem("shesafe_registered_users", JSON.stringify(registeredUsers))
    } catch (e) {
      console.error(e)
    }
  }, [registeredUsers])

  // Save active session
  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem("shesafe_session", JSON.stringify(currentUser))
      } else {
        localStorage.removeItem("shesafe_session")
      }
    } catch (e) {
      console.error(e)
    }
  }, [currentUser])

  // Lightning-fast login with zero artificial delay
  const login = (email, password) => {
    const trimmedEmail = email.trim().toLowerCase()
    const existing = registeredUsers.find((u) => u.email.toLowerCase() === trimmedEmail)

    const userToLogin = existing || {
      id: "user-" + Date.now(),
      name: trimmedEmail.split("@")[0].replace(/[^a-zA-Z]/g, " ").trim() || "User",
      email: trimmedEmail,
      phone: "+1 (555) 000-0000",
      joinedAt: new Date().toLocaleDateString(),
    }

    if (!existing) {
      setRegisteredUsers((prev) => [...prev, userToLogin])
    }

    setCurrentUser(userToLogin)
    return { success: true, user: userToLogin }
  }

  // Fast registration
  const register = ({ name, email, phone, password }) => {
    const trimmedEmail = email.trim().toLowerCase()
    const newUser = {
      id: "user-" + Date.now(),
      name: name.trim() || "Safety User",
      email: trimmedEmail,
      phone: phone.trim() || "+1 (555) 000-0000",
      joinedAt: new Date().toLocaleDateString(),
    }

    setRegisteredUsers((prev) => {
      const filtered = prev.filter((u) => u.email.toLowerCase() !== trimmedEmail)
      return [...filtered, newUser]
    })

    setCurrentUser(newUser)
    return { success: true, user: newUser }
  }

  // Quick guest login
  const loginAsGuest = () => {
    const guestUser = {
      id: "guest-" + Date.now(),
      name: "Guest Explorer",
      email: "guest@shesafe.app",
      phone: "+1 (555) 999-8888",
      joinedAt: "Just now",
      isGuest: true,
    }
    setCurrentUser(guestUser)
    return { success: true, user: guestUser }
  }

  const logout = () => {
    setCurrentUser(null)
  }

  const value = {
    currentUser,
    isAuthenticated: !!currentUser,
    login,
    register,
    loginAsGuest,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
