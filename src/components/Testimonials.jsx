export default function Testimonials() {
  const quotes = [
    { quote: '“Siteline cut our no-shows by half and keeps the phone ringing after hours. It’s like having an all-day receptionist.”', author: 'Lisa Martin, Spa Owner' },
    { quote: '“Our reviews doubled in a month, and every message gets answered instantly. Siteline’s worth every dollar.”', author: 'Derek Hall, Roofing Contractor' },
    { quote: '“We replaced two admin hires with Siteline automations and scaled without stress.”', author: 'Natalie Brooks, Dental Clinic Director' },
  ]

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 p-1">
          <div className="rounded-3xl bg-white p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              {quotes.map((q) => (
                <blockquote key={q.author} className="rounded-2xl border border-gray-200/70 bg-white p-6 shadow-sm">
                  <p className="text-gray-900">{q.quote}</p>
                  <footer className="mt-4 text-sm text-gray-600">— {q.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
