export default function UseCases() {
  const items = [
    { title: 'Local Services', desc: 'Book more jobs without extra staff.' },
    { title: 'Clinics & Salons', desc: 'Cut no-shows and fill last-minute openings.' },
    { title: 'Home Services', desc: 'Automate quotes, reminders, and follow-ups.' },
    { title: 'Agencies', desc: 'Resell automation to clients under your own brand.' },
    { title: 'Law Offices', desc: 'Intake, reminders, and document follow-up handled.' },
    { title: 'Dental & Chiropractic', desc: 'Recall campaigns and reschedules on autopilot.' },
  ]

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Built for the way small businesses actually work</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => (
            <div key={c.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow transition">
              <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
              <p className="mt-2 text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
