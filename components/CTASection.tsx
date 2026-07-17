'use client'

import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-govt-blue to-govt-navy text-white py-20 md:py-32">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Register?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Join millions of Indians using JeevanPatra for vital registration. Get your certificate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-govt-orange text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-lg flex items-center justify-center gap-2">
              Register Now
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-govt-blue transition-colors font-semibold text-lg">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
