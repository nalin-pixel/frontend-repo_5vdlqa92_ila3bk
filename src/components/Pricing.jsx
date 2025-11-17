export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      bestFor: 'Solo owners or freelancers',
      price: '$97/mo',
      highlights: ['VoiceLine or ChatLine', 'TrustLine basics', '500 automations/mo', 'Email support']
    },
    {
      name: 'Growth',
      bestFor: 'Small to mid businesses',
      price: '$297/mo',
      highlights: ['Full VoiceLine + ChatLine + TrustLine + SalesLine', '5,000 automations', 'Priority support']
    },
    {
      name: 'Scale',
      bestFor: 'Agencies & multi-location teams',
      price: '$797/mo',
      highlights: ['Everything in Growth + FlowLine + ClientLine CRM', 'Custom workflows', '24/7 support']
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900">Simple, scalable plans — no surprises.</h2>
          <p className="mt-3 text-gray-700">Whether you’re just starting or managing multiple locations, Siteline has a plan that fits. Every plan comes with onboarding, support, and a free trial.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((p, idx) => (
            <div key={p.name} className={`relative rounded-2xl border bg-white p-6 shadow-sm ${idx===1 ? 'border-indigo-300 shadow-indigo-100' : 'border-gray-200'}`}>
              {idx===1 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow">Most popular</div>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-gray-900">{p.name}</h3>
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{p.price}</p>
              </div>
              <p className="mt-1 text-sm text-gray-600">{p.bestFor}</p>
              <ul className="mt-4 space-y-2">
                {p.highlights.map(h => (
                  <li key={h} className="flex items-center gap-2 text-gray-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" /> {h}
                  </li>
                ))}
              </ul>
              <a href="#trial" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2.5 text-white font-semibold hover:bg-black/90">Start your free trial</a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-600">Need white-label access? Agency and reseller options available.</p>
      </div>
    </section>
  )
}
