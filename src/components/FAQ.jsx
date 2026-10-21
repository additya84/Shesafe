import React, { useState } from "react"
import { ChevronDown, HelpCircle, ShieldAlert, Sparkles } from "lucide-react"

export default function FAQ() {
  const [openId, setOpenId] = useState(1)

  const questions = [
    {
      id: 1,
      question: "What is SheSafe and how does it protect me?",
      answer:
        "SheSafe is a women-focused personal emergency response platform. In moments of danger, it lets you trigger immediate SOS alerts, notify your personal circle of trusted guardians, share real-time GPS tracking, and sound deterrent alarms or dial emergency services with a single tap.",
    },
    {
      id: 2,
      question: "How does the SOS emergency trigger work?",
      answer:
        "When you tap the SOS button (or shake your phone on mobile), a 3-second safety countdown begins to prevent accidental false alarms. Once the timer completes, your coordinates are locked, priority SMS and push alerts are blasted to all your designated guardians, and the live tracking portal goes active.",
    },
    {
      id: 3,
      question: "Who can be added as an Emergency Guardian?",
      answer:
        "You can add any trusted person: parents, siblings, roommates, colleagues, or close friends. Guardians receive emergency notifications via SMS and web link, meaning they don't even need the app installed to view your emergency location.",
    },
    {
      id: 4,
      question: "How accurate is the location sharing, and is it always tracking me?",
      answer:
        "No, SheSafe NEVER tracks your daily whereabouts. Location sharing is activated ONLY during an active emergency SOS. It uses high-precision GPS (accurate within 3–5 meters) and updates continuously until you enter your safe PIN to end the emergency.",
    },
    {
      id: 5,
      question: "What happens if I lose internet connection during an emergency?",
      answer:
        "SheSafe includes automatic offline SMS fallback. If mobile data or Wi-Fi is lost, your phone automatically dispatches encrypted emergency SMS texts with your last recorded coordinates to your guardians.",
    },
    {
      id: 6,
      question: "Is SheSafe free to use?",
      answer:
        "Yes, SheSafe's core emergency features—including unlimited guardians, SOS alerts, GPS location broadcast, and siren tools—are 100% free because personal safety should be accessible to everyone.",
    },
    {
      id: 7,
      question: "Will there be a dedicated mobile app?",
      answer:
        "Yes! While SheSafe is available as an installable progressive web app (PWA) right now, native iOS and Android versions featuring Shake-to-SOS background triggers and lockscreen emergency widgets are currently in beta testing.",
    },
  ]

  const toggleQuestion = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-outfit tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Everything you need to know about setting up and using SheSafe for personal protection.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {questions.map((q) => {
            const isOpen = openId === q.id
            return (
              <div
                key={q.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-purple-300 bg-purple-50/40 shadow-sm"
                    : "border-slate-200 hover:border-purple-200 bg-white"
                }`}
              >
                <button
                  onClick={() => toggleQuestion(q.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-bold font-outfit transition-colors ${
                    isOpen ? "text-purple-900" : "text-slate-800"
                  }`}>
                    {q.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? "bg-purple-600 text-white rotate-180" : "bg-slate-100 text-slate-500"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed animate-fade-in border-t border-purple-100/50">
                    <p>{q.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Help footer card */}
        <div className="mt-12 bg-slate-50 rounded-2xl p-6 text-center border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-800">Still have questions?</h4>
            <p className="text-xs text-slate-500">Our safety advocates and support team are here 24/7.</p>
          </div>
          <a
            href="mailto:support@shesafe.app"
            className="text-xs font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 px-4 py-2.5 rounded-xl transition-colors"
          >
            Contact Safety Team
          </a>
        </div>

      </div>
    </section>
  )
}