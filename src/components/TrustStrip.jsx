import { Star, ShieldCheck, Clock, Sparkles } from 'lucide-react'

export default function TrustStrip() {
  const items = [
    { icon: Star, text: '5-star results across industries' },
    { icon: ShieldCheck, text: 'Secure by design' },
    { icon: Clock, text: 'Live in 24 hours' },
    { icon: Sparkles, text: 'Supercharge your existing team — not replace them' },
  ]
  return (
    <section className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-3 rounded-xl border border-gray-200/60 bg-white/80 px-4 py-3 shadow-sm hover:shadow transition">
              <item.icon className="h-5 w-5 text-indigo-600" />
              <p className="text-sm text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
