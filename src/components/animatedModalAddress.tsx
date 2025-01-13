"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import { p } from "framer-motion/client";
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
              Selectionnez  l'une de nos{" "}
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

const PlaneIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
    </svg>
  );
};

const VacationIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" />
      <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" />
      <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" />
      <path d="M15 9l-3 5.196" />
      <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25" />
    </svg>
  );
};

const ElevatorIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
      <path d="M10 10l2 -2l2 2" />
      <path d="M10 14l2 2l2 -2" />
    </svg>
  );
};

const FoodIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 20c0 -3.952 -.966 -16 -4.038 -16s-3.962 9.087 -3.962 14.756c0 -5.669 -.896 -14.756 -3.962 -14.756c-3.065 0 -4.038 12.048 -4.038 16" />
    </svg>
  );
};

const MicIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9" />
      <path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z" />
    </svg>
  );
};

const ParachuteIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M22 12a10 10 0 1 0 -20 0" />
      <path d="M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3" />
      <path d="M2 12l10 10l-3.5 -10" />
      <path d="M15.5 12l-3.5 10l10 -10" />
    </svg>
  );
};