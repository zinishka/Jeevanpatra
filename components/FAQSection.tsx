'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What documents are required for birth registration?',
      answer: 'You need hospital discharge summary, vaccination certificate, and parent identification. Digital copies are acceptable.'
    },
    {
      question: 'How long does the registration process take?',
      answer: 'Most registrations are completed within 7 business days after verification. Digital certificates are issued instantly.'
    },
    {
      question: 'What is the registration fee?',
      answer: 'Birth and death registration is completely free. Government of India subsidizes all vital registration services.'
    },
    {
      question: 'Can I access my records online?',
      answer: 'Yes, registered users can access all records through their dashboard 24/7 with proper authentication.'
    },
    {
      question: 'Is the data completely secure?',
      answer: 'All data is encrypted with AES-256 and stored on government-approved servers with regular security audits.'
    },
    {
      question: 'What if I need to update my records?',
      answer: 'You can request updates through the portal. Verification officials will review and process your request.'
    }
  ]

  return (
    <section id="faq" className="py-20 md:py-32 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-govt-navy text-left">{faq.question}</h3>
                <ChevronDown
                  size={24}
                  className={`text-govt-blue flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t bg-gray-50 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
