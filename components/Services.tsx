'use client'

import { FileText, BarChart3, Shield, Clock } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <FileText size={32} />,
      title: 'Birth Registration',
      description: 'Register your newborn with official government records. Complete documentation and verification.'
    },
    {
      icon: <FileText size={32} />,
      title: 'Death Registration',
      description: 'File death records with proper legal documentation and government certification.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Certificate Issuance',
      description: 'Get official certificates for birth and death records with digital verification.'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Record Management',
      description: 'Manage, update, and access your vital records anytime, anywhere.'
    }
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive vital registration services designed for the people of India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-govt-blue mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-govt-navy mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
