"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { ImageWithSkeleton } from "./image-with-skeleton"

export function Footer() {
  return (
    <footer className="bg-white  py-12 border-t border-gray-">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center ">
              <ImageWithSkeleton src="/logo-od.png" alt="logo" width={100} height={100}  className="rounded-full  p-1"  />
              <div className="flex flex-col">
              <h3 className="text-xl text-red-500 font-bold">Mirasal Boost 1 (PTY)</h3>
              <h3 className="text-xl text-red-500 font-bold "> Ltd (2024783173/07) </h3>
              </div>
            </div>
            <p className="text-gray-800 pl-4 max-w-[300px]">
                Nous  sommes à votre service pour vos Frets et Fnvois coouriers, Achat par Correspondace et divers.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-800 ">215 Voortrekker Road, BellVille 7530, Cape Town, SA</p>
            <p className="text-gray-800">Phone: +27 78-971-4069</p>
            <p className="text-gray-800">Email: info@mirasal.co.za</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#"  className="text-gray-800 hover:text-black transition-colors">
                <Facebook />
              </a>
              <a href="#" className="text-gray-800 hover:text-black transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-gray-800 hover:text-black transition-colors">
                <Twitter />
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p className="text-gray-800">&copy; {new Date().getFullYear()} Powered by AltroTech. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

