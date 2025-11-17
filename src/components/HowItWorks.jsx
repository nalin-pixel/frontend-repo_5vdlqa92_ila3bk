export default function HowItWorks() {
  const steps = [
    { title: 'Connect', desc: 'Sync your phone, calendar, and business tools in minutes.' },
    { title: 'Automate', desc: 'Turn on proven workflows that capture, convert, and follow up.' },
    { title: 'Grow', desc: 'Sit back as calls, messages, and reviews flow in — automatically.' },
  ]
  return (
    <section id="how" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Launch Siteline in 3 simple steps</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-gradient-to-br from-blue-200 via-indigo-200 to-fuchsia-200 blur-2xl" />
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold">{i+1}</div>
              <h3 className="relative mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="relative mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
