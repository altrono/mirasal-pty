"use client"
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import { Medal } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 px-5 max-w-6xl mx-auto">
      <div className="container mx-auto w-full">
        
        <div className="flex flex-col md:flex-row justify-center  items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
           
            <Image
                src="/ceo.png"
                alt="Team collaboration"
                width={450}
                height={450}
                className="w-full rounded-full"
            />
          
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <div className=" md:text-pretty">
              <h2 className="text-2xl font-bold">
              Nous faisons du commerce mondial une réalité
              </h2>
              <p className="text-gray-400 mb-2">
              At <span className="text-blue-500 text-xl font-bold tracking-widest leading-[2rem]">Mirasal </span>, We believe in building long-term relationships, not just completing projects. Our goal is to help your business scale and succeed by providing the digital tools and expertise you need to stay competitive in the fast-evolving tech world. With our focus on results-driven solutions, you can trust us to deliver measurable growth and tangible outcomes.
              </p>
              <p className="text-gray-400 mb-1 text-left">
              How We Help You Succeed:
              </p>
              
              <div className="flex flex-col  md:flex-row">
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                    Learn More About Our Team
                </Button>
                <button className="flex gap-2 items-center justify-center  rounded-lg">      
                    <Medal className="w-10 h-10 text-blue-500" />
                    <span className="text-blue-500">Work With the Experts</span>
                </button>
              </div>
              
            </div>
          </motion.div>
        </div>
       
      </div>
    </section>
  )
}
