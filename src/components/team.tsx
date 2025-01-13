"use client"

import { motion } from "framer-motion"
import { ImageWithSkeleton } from "./image-with-skeleton"
import { Progress } from "./ui/progress"
import Link from "next/link"



export function Team() {
  return (
    <section className="min-h-screen bg-gray-200 relative overflow-hidden px-6">
      <div className="absolute top-0 right-0 w-2 md:w-4 h-full bg-blue-500" />
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row gap-4 items-center j max-w-5xl mx-auto px-4 ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute bottom-48 md:bottom-44 left-0 z-10 bg-transparent">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <svg width="80" height="80" viewBox="0 0 100 100" className="fill-current">
                  <rect x="0" y="0" width="33" height="33" className="fill-red-500" />
                  <rect x="33" y="0" width="33" height="33" className="fill-blue-500" />
                  <rect x="66" y="0" width="33" height="33" className="fill-green-500" />
                  <rect x="0" y="33" width="33" height="33" className="fill-yellow-500" />
                  <rect x="63" y="60" width="33" height="33" className="fill-blue-500" />
                </svg>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:hidden justify-center"
            >
             
                <h1 className="text-4xl  font-bold text-gray-900 mb-4 pb-2">MESSAGE DE NOTRE CEO</h1>
                <h2 className="text-2xl text-blue-500 font-semibold mb-6">Eric Limbaya</h2>
            
      
            </motion.div>
            <ImageWithSkeleton
              src="/ceo.png"
              alt="CEO Portrait"
              width={400}
              height={600}
              className="rounded-lg "
            />
          </motion.div>

          <div className="space-y-8  -mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full hidden md:block -mt-10">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Message de notre President et CEO</h1>
                <h2 className="text-2xl text-blue-500 font-semibold mb-6">Eric Limbaya</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
              Je suis heureux de vous annoncer que vos problèmes de Transport de Collis et Envois ont été résolus, nous permettant de reprendre un fonctionnement normal de nos activités.
              L&apos; expérience acquise au fil du temps montre qu&apos;une écoute active des besoins et souhaits permet au monde du travail de poursuivre son évolution.
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-4"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Envois</span>
                  <span className="text-sm font-medium">99%</span>
                </div>
                <Progress value={95} className="h-2" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="space-y-4"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Fret aerien et Maritime</span>
                  <span className="text-sm font-medium">95%</span>
                </div>
                <Progress value={88} className="h-2" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex gap-4 mt-10"
            >
              <Link href={"#contact"}  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Devenir Partner
              </Link>
              
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

