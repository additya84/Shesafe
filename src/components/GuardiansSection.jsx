import React from "react"
import { Link, Users, Plus } from "react-router-dom"
import { Users as UsersIcon, Plus as PlusIcon } from "lucide-react"

export default function GuardianSection() {
  const guardians = [
    { id: 1, name: "Anita Sharma", relation: "Sister", phone: "+91 98765 43210", color: "purple-600" },
    { id: 2, name: "Rahul Kumar", relation: "Brother", phone: "+91 87654 32109", color: "purple-500" },
    { id: 3, name: "Priya Singh", relation: "Friend", phone: "+91 76543 21098", color: "purple-400" },
  ]

  return (
    <section id="guardians" className="py-24 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider">
              <UsersIcon className="w-3.5 h-3.5" />
              <span>Personal Safety Circle</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-outfit tracking-tight">
              Choose the people who always have your back.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Build your private emergency circle with family and trusted friends. When you activate SOS, SheSafe immediately alerts all of them simultaneously with your safety status.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm mt-0.5">
                  S
                </div>
                <p className="text-sm text-slate-700">
                  <strong className="font-semibold text-slate-900">Simultaneous Alert:</strong> All guardians receive emergency pings at once.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm mt-0.5">
                  P
                </div>
                <p className="text-sm text-slate-700">
                  <strong className="font-semibold text-slate-900">Privacy Protected:</strong> Location shared only when SOS is explicitly triggered.
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

          {/* Right Guardian Cards Column */}
          <div className="lg:col-span-6">
            <div className="space-y-4">
              {guardians.map((g) => (
                <div
                  key={g.id}
                  className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-purple-300 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 font-bold flex items-center justify-center text-sm">
                      {g.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900">{g.name}</h4>
                      <p className="text-xs text-slate-500">{g.relation}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500">{g.phone}</p>
                </div>
              ))}
            </div>

            <div>
              <Link
                to="/register"
                className="w-full py-3 px-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg transition-all"
              >
                Add Guardian →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}