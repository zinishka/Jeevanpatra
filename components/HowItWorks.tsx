'use client'

import { CheckCircle } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Visit Portal',
      description: 'Access JeevanPatra and select the registration type'
    },
    {
      number: '2',
      title: 'Provide Details',
      description: 'Fill in required information and upload documents'
    },
    {
      number: '3',
      title: 'Verification',
      description: 'Government officials verify your application'
    },
    {
      number: '4',
      title: 'Receive Certificate',
      description: 'Get your official certificate via digital/physical mode'
    }
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, secure, and straightforward registration process
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-govt-blue text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-govt-navy mb-2 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center text-sm">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[40%] h-1 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
