'use client'

import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-govt-navy text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-govt-orange rounded-lg flex items-center justify-center font-bold">
                JP
              </div>
              <span className="text-xl font-bold">JeevanPatra</span>
            </div>
            <p className="text-blue-100">
              Official government portal for vital registration in India.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-blue-100">
              <li><Link href="#" className="hover:text-white transition-colors">Birth Registration</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Death Registration</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Certificate Issuance</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Record Management</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-blue-100">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-6">
              <Link href="#" className="text-blue-100 hover:text-govt-orange transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-blue-100 hover:text-govt-orange transition-colors">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="text-blue-100 hover:text-govt-orange transition-colors">
                <Linkedin size={24} />
              </Link>
              <Link href="#" className="text-blue-100 hover:text-govt-orange transition-colors">
                <Mail size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-100">
            © 2024 JeevanPatra. Government of India. All rights reserved.
          </p>
          <div className="flex gap-6 text-blue-100 text-sm">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
