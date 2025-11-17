import { useState } from 'react'

const faqs = [
  { q: 'Is there a free trial?', a: 'Yes — you get full access for 14 days, no card required.' },
  { q: 'How fast can I get started?', a: 'Most businesses are live within 24 hours with ready-made workflows.' },
  { q: 'Will Siteline work with my current tools?', a: 'Yes — it integrates with major calendars, CRMs, and payment systems. Custom setups available on Scale plans.' },
  { q: 'Is my data secure?', a: 'Yes — encrypted storage and verified integrations.' },
  { q: 'Can I customize it?', a: 'Absolutely — start with templates, then tweak workflows to match your business perfectly.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Common questions</h2>
        <div className="mt-6 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {faqs.map((f, idx) => (
            <div key={f.q} className="p-4">
              <button className="flex w-full items-center justify-between text-left" onClick={() => setOpen(open === idx ? -1 : idx)}>
                <span className="font-medium text-gray-900">{f.q}</span>
                <span className="ml-4 text-gray-500">{open===idx ? '-' : '+'}</span>
              </button>
              {open===idx && <p className="mt-2 text-gray-600">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
