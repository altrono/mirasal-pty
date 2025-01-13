"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export function AnimatedModalAddress() {
  const images = [
    "cape-town.png",
    "kin.png",
    "joburg.png",
    "lushi.png",
    "lunda.png",
    "benin.png",

    ];
  const details = [
    {
        name: "Cape Town, SA",
        address: "215 Voortrekker Road BellVille 7530 Cape Town SA",
        ref: "",
        contacts: ["+27 71 925 0250"],
        direction: "https://www.google.com/maps/search/?api=1&query=215+Voortrekker+Road+BellVille"
    },
    {
        name: "Kinshasa, RDC",
        address: "76 Avenue Victoire Kasa Vubu Kinshasa",
        ref: "Rond-Point Kimpwanza Entree Grande Porte au 1ere Niveau",
        contacts: ["+243 81 887 5291"],
        direction: "https://www.google.com/maps/search/?api=1&query=76+Avenue+Victoire+Kasa+Vubu+Kinshasa+drc"
    },
    {
        name: "Johannesburg, SA",
        address: "51 Frances Street Yeoville, Johnnesburg",
        ref: "En Diagonal du Restaurant Zando Voir Car Wash",
        contacts: ["+27 74 365 6384", "+27 81 492 1517", "+27 84 899 5959"],
        direction: "https://www.google.com/maps/search/?api=1&query=51+Frances+Street+Yeoville+Johnnesburg+Gauteng+SA",
    }, 
    {
        name: "Lubumbashi, RDC",
        address: "94 Avenue Kasai Coin Avenue Tabora Lubumbashi Centre Ville",
        ref: "En Diagonal du FEC KATANGA",
        contacts: ["+243 90 112 9222", "+243 81 375 6928"],
        direction: "https://www.google.com/maps/search/?api=1&query=94+Avenue+Kasai+Lubumbashi"
    },
    
    {
        name: "Lunda, Angola",
        address: "",
        ref: "Voir Denzu",
        contacts: ["+243 81 887 5291"],
        direction: ""
    },
    {
        name: "Benin",
        address: "Carre N115(c/115), Benin",
        ref: "Derrière l'église Saint Michel En face de l' Ambassade du Senegal Saint Paul",
        contacts: ["+229 97 286 123", "+229 94 556 526", "+229 97 015 540"],
        direction: "https://www.google.com/maps/search/?api=1&query=Carré+centre+saint+Paul+Benin"
    },
   
  ]
  return (
    <div className="  flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-blue-500 dark:bg-white dark:text-blue-500 text-white flex justify-center group/modal-btn px-4 py-2">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Nous Contacter
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ✈️
          </div>
        </ModalTrigger>
        <ModalBody className="z-50">
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Selectionnez  l&apos;une de nos{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-blue-500 dark:border-neutral-700 border border-gray-200">
                Branches
              </span>{" "}
              ! <br />🌎
            </h4>
            <div className="grid grid-cols-3 justify-center items-center h-[500px] max-h-[500px]">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 gap-2 bg-slate-950  dark:border-neutral-700 border border-neutral-100 flex flex-col md:flex-row overflow-hidden"
                >
                  <Image
                    src={"/" + image}
                    alt={details[idx].name}
                    width="500"
                    height="500"
                    className=" rounded-bl-md h-20 w-full md:h-40 md:w-40 object-cover "
                  />
                  <div className="text-left flex flex-col justify-center gap-2">
                    <div className="">
                        <h4 className="font-medium text-sm text-blue-500">{details[idx].name}</h4>
                        <p className="text-gray-500 text-[8px] max-w-28 md:max-w-40">{details[idx].address}</p>
                        {details[idx].ref && <p className="text-gray-500 text-[10px] max-w-28 md:max-w-40">Ref:  <span className="text-white">{details[idx].ref}</span></p>}
                        {details[idx].contacts.map((pn) => (<p key={pn} className="text-gray-500 text-[10px]">Tel: {<span className="text-white">{pn}</span>}</p>))}
                    
                    </div>
                    {details[idx].direction && <Link href={details[idx].direction} target="_blank" className="flex items-center justify-center mb-2">
                        <Image alt="google map" src={"/google-maps.png"} width={30} height={30} />
                    </Link>}
                  </div>
                </motion.div>
              ))}
            </div>
            
          </ModalContent>
        
        </ModalBody>
      </Modal>
    </div>
  );
}




