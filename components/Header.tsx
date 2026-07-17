'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container flex justify-between items-center py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-govt-blue rounded-lg flex items-center justify-center text-white font-bold">
            JP
          </div>
          <span className="text-xl font-bold text-govt-navy hidden sm:inline">JeevanPatra</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link href="#services" className="text-govt-navy hover:text-govt-blue transition-colors">
            Services
          </Link>
          <Link href="#features" className="text-govt-navy hover:text-govt-blue transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-govt-navy hover:text-govt-blue transition-colors">
            How It Works
          </Link>
          <Link href="#faq" className="text-govt-navy hover:text-govt-blue transition-colors">
            FAQ
          </Link>
        </nav>

        <button className="hidden md:block btn-primary">
          Get Started
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t p-4 flex flex-col gap-4">
          <Link href="#services" className="text-govt-navy hover:text-govt-blue transition-colors">
            Services
          </Link>
          <Link href="#features" className="text-govt-navy hover:text-govt-blue transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-govt-navy hover:text-govt-blue transition-colors">
            How It Works
          </Link>
          <Link href="#faq" className="text-govt-navy hover:text-govt-blue transition-colors">
            FAQ
          </Link>
          <button className="btn-primary w-full">
            Get Started
          </button>
        </nav>
      )}
    </header>
  )
}
