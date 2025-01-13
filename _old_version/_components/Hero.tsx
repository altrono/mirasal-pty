"use client"

import { motion } from "framer-motion"
import { Carousel } from "./carousel"


export function Hero() {
    return (
      <div className="relative h-screen pt-20">
        <Carousel />
        
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100 
            }}
            className="text-center text-white"
          >
            <motion.h1 
              className="text-2xl md:text-6xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Maîtriser votre logistique de A à Z, <br /> C&apos; est notre B.A - BA
            </motion.h1>
            
            <motion.p
              className="text-xl mt-16 text-white/80 italic mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              
            </motion.p>
            
            <motion.button
              className="bg-white text-blue-500 px-8 py-3 font-semibold hover:bg-white/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              Nous Contacter
            </motion.button>
          </motion.div>
        </div>
      </div>
    )
  }