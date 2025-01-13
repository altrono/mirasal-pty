"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    text: "You’re a great team player and you constantly help others meet their customer requests. Well done!",
    author: "Oga Michael Onyetu",
    role: "Client regulier, Nigeria"
  },
  {
    text: "Je tiens à vous remercier pour l'excellent service que vous nous avez offert. Nous sommes totalement satisfaits de la qualité de votre travail et de votre professionnalisme.",
    author: "Lilly Masuaku",
    role: "Client loyal, Lubumbashi"
  },
  {
    text: "Vous avez vraiment dépassé nos attentes et nous apprécions vraiment votre diligence et votre attention aux détails. Nous espérons avoir l'occasion de travailler à nouveau avec vous dans le futur.",
    author: "Cedrick Kimbokoto",
    role: "Premiere fois, Benin"
  }
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id='testimonials' className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-blue-500">Avis positifs</h2>
          <p className="text-black/80">Temoignages de nos valuable clients</p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Quote className="mx-auto h-12 w-12 text-gray-800 mb-6" />
              <p className="text-xl text-gray-800 mb-6 italic">{testimonials[current].text}</p>
              <h3 className="text-blue-500 font-bold text-lg">
                {testimonials[current].author}
              </h3>
              <p className="text-white-500">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

