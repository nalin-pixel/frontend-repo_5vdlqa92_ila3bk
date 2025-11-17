import { Phone, MessageCircle, Sparkles, Workflow, BadgeCheck, Contact } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Phone,
    title: 'VoiceLine',
    subtitle: 'Answers, books, and follows up',
    desc: 'Never miss another call. VoiceLine greets callers, books appointments, and handles scheduling automatically — 24/7.',
  },
  {
    icon: MessageCircle,
    title: 'ChatLine',
    subtitle: 'Conversations that convert',
    desc: 'SMS, website chat, and social messages answered instantly. ChatLine qualifies leads and routes them straight to booking or payment.',
  },
  {
    icon: BadgeCheck,
    title: 'TrustLine',
    subtitle: '5-star reputation, built automatically',
    desc: 'Ask for reviews at the perfect time, respond instantly, and promote your best ones online — no manual work.',
  },
  {
    icon: Sparkles,
    title: 'SalesLine',
    subtitle: 'Funnels that actually follow through',
    desc: 'Capture leads, send offers, and nurture them to conversion — all triggered automatically from the first interaction.',
  },
  {
    icon: Workflow,
    title: 'FlowLine',
    subtitle: 'Your business on autopilot',
    desc: 'Automate repetitive tasks, reminders, and reschedules. Keep operations consistent while you focus on growth.',
  },
  {
    icon: Contact,
    title: 'ClientLine',
    subtitle: 'Your CRM, filled for you',
    desc: 'Every call, chat, and review logged automatically. Full visibility, no data entry.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-indigo-50/40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Everything your business needs to run on autopilot — and look good doing it.</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="group relative overflow-hidden rounded-2xl bg-white p-6 border border-gray-200 shadow-sm hover:shadow-lg transition">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/0 via-indigo-600/0 to-fuchsia-600/0 opacity-0 group-hover:opacity-100 group-hover:from-blue-600/10 group-hover:via-indigo-600/10 group-hover:to-fuchsia-600/10 blur-xl transition" />
              <f.icon className="relative h-6 w-6 text-indigo-600" />
              <h3 className="relative mt-4 text-lg font-semibold text-gray-900">{f.title} <span className="text-gray-500 font-normal">— {f.subtitle}</span></h3>
              <p className="relative mt-2 text-sm text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
