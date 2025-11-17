export default function Outcomes() {
  const items = [
    'Recover missed leads automatically with text-back and instant response.',
    'Fill your schedule — reduce no-shows and rebook cancellations automatically.',
    'Build your reputation — generate, monitor, and respond to reviews.',
    'Follow up faster — messages customers instantly while competitors wait.',
    'Get paid sooner — automate invoices and reminders with a friendly tone.'
  ]

  return (
    <section id="outcomes" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Why small businesses switch to Siteline</h2>
            <div className="mt-6 space-y-3">
              {items.map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" />
                  <p className="text-gray-700">{t}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a href="#demo" className="inline-flex items-center rounded-md bg-gray-900 px-5 py-3 text-white font-semibold hover:bg-black/90">See Siteline in action → Schedule a quick demo</a>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-indigo-200 via-fuchsia-200 to-amber-200" />
            <p className="mt-4 text-sm text-gray-600">Boost your existing team. Siteline handles the repetitive follow-ups so your staff can focus on high‑value moments. No replacements — just superpowers.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
