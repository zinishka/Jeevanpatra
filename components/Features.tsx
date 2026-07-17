'use client'

import { CheckCircle, Zap, Users, Globe } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Zap size={24} />,
      title: 'Fast Processing',
      description: 'Get your registration completed in minutes with our streamlined process'
    },
    {
      icon: <Shield size={24} />,
      title: 'Secure & Safe',
      description: 'Military-grade encryption protects your personal information'
    },
    {
      icon: <Users size={24} />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support in multiple languages'
    },
    {
      icon: <Globe size={24} />,
      title: 'Digital Records',
      description: 'Access your records anytime, anywhere with digital certificates'
    }
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose JeevanPatra?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leading the digital transformation in vital registration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-govt-orange mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-govt-navy mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
