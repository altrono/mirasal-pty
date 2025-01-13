import { Booking } from "@/components/booking"
import { Footer } from "@/components/footer"
import { Gallery } from "@/components/galleries"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Team } from "@/components/team"
import { Testimonials } from "@/components/testimonials"
import { WhatsAppButton } from "@/components/whatsapp-button"


export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Team />
      <Testimonials />
      <Booking />  
      <Footer /> 
      <WhatsAppButton />
    </main>
  )
}