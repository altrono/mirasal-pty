import Image from "next/image";
import { Header } from "./components/header";
import { WhatsAppButton } from "./components/whatsap-button";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <WhatsAppButton />
      <section className="flex flex-col justify-center items-center min-h-screen pt-20">
        <h1 className="text-2xl font-bold text-red-500">Mirasal Boost 1 (PTY) <br />
        Ltd (2024783173/07)</h1>
        <h2 className="text-black font-medium text-xl my-4">CAPE TOWN/FREIGHT JOHANNESBURG </h2>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <p className="text-black">CONTACT: (+27) 68 099 8539 / (+27) 71 925 0250 </p>
            <p className="text-black">EMAIL: mirasalboost1@gmail.com</p>
          </div>
          <div className="fle flex-col">
            <p className="text-black">COUNT NAME: MIRASAL BOOST 1 </p>
            <p className="text-black">ACCOUNT NUMBER: 63132025792 </p>
            <p className="text-black">BANK NAME: F.N.B. </p>
          </div>
        
        </div>
         <Image src={'/ceo.png'}  alt="ceo" width={300} height={300} className="rounded-full -rotate-300"/>
          <h2 className="text-black">ARRIVE BIENTÔT ! ! !</h2>
      </section>
    </main>
  );
}
