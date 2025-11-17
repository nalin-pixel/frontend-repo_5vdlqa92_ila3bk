import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.20),rgba(255,255,255,0))]" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-gradient-to-b from-blue-200/40 via-indigo-200/30 to-fuchsia-200/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Automate the busywork. Grow your business — even when you’re off the clock.
            </motion.h1>
            <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1,duration:0.6}} className="mt-6 text-lg text-gray-700">
              Siteline connects voice, chat, reviews, and workflows so your business never misses a call, a lead, or a chance to earn. Get more bookings, better reviews, and smoother days — automatically.
            </motion.p>
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2,duration:0.6}} className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#trial" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 hover:opacity-95 transition">
                Start your 14-day free trial
              </a>
              <a href="#demo" className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50">
                Watch the 90-second demo
              </a>
            </motion.div>
            <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.35}} className="mt-4 text-sm text-gray-600">
              The all-in-one automation system built for small businesses who want professional-grade power without enterprise bloat.
            </motion.p>
            <div className="mt-8">
              <p className="text-sm text-gray-500">Used daily by local service providers, clinics, and agencies who trust Siteline to capture every lead, follow up instantly, and turn first-time customers into repeat ones.</p>
            </div>
          </div>
          <div className="relative h-[520px] rounded-2xl overflow-hidden border border-white/40 shadow-xl">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/0 via-white/0 to-white/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
