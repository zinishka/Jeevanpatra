'use client'

import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-govt-blue to-govt-navy text-white py-20 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Record of Life
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Official government portal for birth and death registration in India. Recording every life with dignity and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-govt-orange text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold flex items-center justify-center gap-2">
                Register Now
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-govt-blue transition-colors font-semibold">
                Learn More
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-govt-orange rounded-lg flex items-center justify-center">
                    👶
                  </div>
                  <div>
                    <h3 className="font-semibold">Birth Registration</h3>
                    <p className="text-blue-100 text-sm">Complete in 5 minutes</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-govt-orange rounded-lg flex items-center justify-center">
                    📋
                  </div>
                  <div>
                    <h3 className="font-semibold">Death Registration</h3>
                    <p className="text-blue-100 text-sm">Secure & verified</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-govt-orange rounded-lg flex items-center justify-center">
                    🔒
                  </div>
                  <div>
                    <h3 className="font-semibold">Data Security</h3>
                    <p className="text-blue-100 text-sm">Government approved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
