"use client"

import { motion } from "framer-motion"
import { ForkliftIcon as Fork,  ShipIcon as Ship, PlaneIcon as Plane, TruckIcon as Truck } from 'lucide-react'
import { AnimatedModalAddress } from "./animatedModalAddress"

const services = [
  {
    icon: Plane,
    title: "Fret aérien",
    description: "Prêts à faire décoller votre chaîne d'approvisionnement, quels que soient le poids et les dimensions de votre fret ?",

  },
  
  {
    icon: Ship,
    title: "Fret maritime",
    description: "L’océan n’aura plus de secret pour vous grâce à nos solutions de fret maritime.",

  },
  {
    icon: Fork,
    title: "Transport de colis",
    description: "Vous recherchez une solution de haute qualité pour transporter rapidement vos expéditions mono et multi-colis ? ",
  },
  {
    icon: Truck,
    title: "Transport routier",
    description: "Transportez vos marchandises par voie terrestre avec"
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4  mt-20 text-blue-500">Nos Services</h2>
          <p className="text-gray-500">Que peut faire Mirasal Pty pour vous ?</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg text-center group hover:bg-blue-500 transition-colors duration-300"
            >
              <div className="mb-4 flex justify-center">
                <service.icon className="h-12 w-12 text-blue-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-500 group-hover:text-white">{service.title}</h3>
              <p className="text-gray-600 mb-4 group-hover:text-white">{service.description}</p>
            
            </motion.div>
          ))}
        </div>
        <AnimatedModalAddress />
      </div>
    </section>
  )
}

