import React, { useState } from "react"
import { Shield, Zap, Users, MapPin, Heart, Phone, AlertCircle } from "lucide-react"

export default function FAQ() {
  const questions = [
    {
      id: 1,
      question: "What is SheSafe?",
      answer:
        "SheSafe is a women-focused emergency safety platform designed to provide rapid SOS assistance, location sharing, and trusted guardian networks at your fingertips.",
    },
    {
      id: 2,
      question: "How does SOS work?",
      answer:
        "When activated, SheSafe triggers your configured emergency workflow: alerting your selected guardians, sharing your location, and enabling rapid emergency contact.",
    },
    {
      id: 3,
      question: "What are emergency guardians?",
      answer:
        "Emergency guardians are trusted family members, friends, or contacts you designate to receive alerts and location information when you activate the SOS feature.",
    },
    {
      id: 4,
      question: "Can I add multiple guardians?",
      answer:
        "Yes, you can add multiple guardians to your safety network. All selected contacts will receive emergency alerts simultaneously.",
    },
    {
      id: 5,
      question: "How does location sharing work?",
      answer:
        "Location sharing is activated only during configured emergency workflows. Your location is shared with your selected guardians for the duration of the emergency session.",
    },
    {
      id: 6,
      question: "What is Shake-to-SOS?",
      answer:
        "Shake-to-SOS is a future mobile app feature that will allow rapid phone movement to trigger the emergency workflow without needing to press buttons.",
    },
    {
      id: 7,
      question: "Will SheSafe become a mobile application?",
      answer:
        "Yes, SheSafe is planned as a full mobile application with all the emergency features including shake-to-SOS, real-time location tracking, and push notifications.",
    },
    {
      id: 8,
      question: "Is my information private?",
      answer:
        "SheSafe is designed with privacy as a core principle. Your data is encrypted, and location sharing only occurs during configured emergency workflows with your selected guardians.",
    },
  ]

  return (
    <section className="py-24 bg-gray-very-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-dark mb-4">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-2">
          {questions.map((q) => (
            <div key={q.id} className="bg-white rounded-2xl p-6 border border-charcoal-dark/10">
              <div className="flex items-between justify-between cursor-pointer hover:border-primary DEFAULT transition-colour">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary DEFAULT" />
                  <span className="text-lg font-medium text-charcoal-dark">{q.question}</span>
                </div>

                <svg
                  className="w-5 h-5 text-charcoal-dark/40 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M5 12h3M5 18h3M5 6h3" />
                </svg>
              </div>

              <p className="mt-3 text-sm text-charcoal-dark/60 line-clamp-3">
                {q.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}