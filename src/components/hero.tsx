"use client"

import { motion } from "framer-motion"
import { Carousel } from "./carousel"
import { AnimatedModalAddress } from "./animatedModalAddress"

export function Hero() {
  return (
    <div className="relative h-screen">
      <Carousel />
      
      <div className="absolute inset-0 bg-black bg-opacity-50 z-5 flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100 
          }}
          className="text-center text-white max-w-6xl mx-auto"
        >
          <motion.h1 
            className="px-4 md:px-0 text-4xl md:text-7xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Maîtriser votre logistique de A à Z  C&apos;est notre <br className="md:hidden" /> B.A - BA
          </motion.h1>
          
          <motion.p
            className="px-4 md:px-0 text-2xl md:text-4xl  text-white/80  mb-8 max-w-4xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Nous sommes à votre service pour vos Frets, Envois courriers, Achat par Correspondance et divers. <br className="md:hidden" />C'est nous.
            
          </motion.p>
          
          
          <AnimatedModalAddress />
          
        </motion.div>
      </div>
    </div>
  )
}

