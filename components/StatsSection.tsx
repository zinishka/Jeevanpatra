'use client'

export default function StatsSection() {
  const stats = [
    { number: '50M+', label: 'Registrations Completed' },
    { number: '2000+', label: 'Government Centers' },
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <section className="bg-govt-blue text-white py-16 md:py-24">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
