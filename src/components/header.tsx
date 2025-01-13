"use client"

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Phone, Clock, MapPin, Menu, X } from 'lucide-react'
import Link from 'next/link'

export function Header() {


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  const headerBackground = useTransform(
    scrollY,
    [0, 150],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  )

  useEffect(() => {
    const updateScrollStatus = () => {

    }

    window.addEventListener('scroll', updateScrollStatus)
    return () => window.removeEventListener('scroll', updateScrollStatus)
  }, [])

  const menuItems = [
    { name: 'D\'accueil', href: '#gohome' },
    { name: 'Nos Services', href: '#services' },
    { name: 'Qui sommes-nous', href: '#about' },
    { name: 'Nous Contacter', href: '#contact' }
  ]

  return (
    <motion.header 
      style={{ backgroundColor: headerBackground }}
      className="fixed top-0 left-0 right-0 z-10 text-white"
    >
      {/* Top Bar - Hidden on Mobile */}
      <div className="hidden md:block bg-blue-500 py-2">
        <div className="container mx-auto px-4 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-white" />
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=215+Voortrekker+Road+BellVille"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white/60 transition-colors"
                >
                  215 Voortrekker Road, BellVille 7530, Cape Town, SA
                </Link>
              
              
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-white" />
                <span className="text-sm">+27 71-925-0250</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-white" />
            <span className="text-sm">Mon-Friday: 8:30 AM - 16:30 PM</span> |
            <span className="text-sm">Saturday: 8:30 AM - 12:30 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white px-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="py-2">
              <img alt='mother city logo'src={'logo.png'}  />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="text-black hover:text-blue-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-8 w-8 text-blue-500 font-bold" />
              ) : (
                <Menu className="h-8 w-8 text-blue-500 font-bold" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-6 py-4">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-blue-500 hover:text-blue-800 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              
              {/* Mobile Contact Info */}
              <div className="mt-6 pt-6 border-t border-blue-200 space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-green-500" />
                  <Link
                    href="https://www.google.com/maps/search/?api=1&query=215+Voortrekker+Road+BellVille"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 hover:text-blue-800 transition-colors"
                  >
                    215 Voortrekker Road, BellVille 7530, Cape Town, SA
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-blue-500">+27 71-925-0250</span>
                </div>
                <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-500" />
                <span className="text-sm text-blue-500">Mon-Friday: 8:30 AM - 16:30 PM |</span>  <span className="text-sm text-blue-500">Saturday: 8:30 AM - 12:30 PM</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}




