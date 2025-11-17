import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Outcomes', href: '#outcomes' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'How it works', href: '#how' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-fuchsia-500 shadow-sm" />
            <span className="font-semibold text-gray-900 tracking-tight">Siteline</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} className="hover:text-gray-900 transition-colors">{n.label}</a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#demo" className="text-sm font-medium text-gray-700 hover:text-gray-900">Watch demo</a>
            <a href="#trial" className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Start free trial
            </a>
          </div>

          <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2">
              {navItems.map((n) => (
                <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">{n.label}</a>
              ))}
              <a href="#trial" className="rounded-md px-3 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 text-center">Start free trial</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
