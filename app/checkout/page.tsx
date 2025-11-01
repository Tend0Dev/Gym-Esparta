import { HeroTicket } from "@/components/ticket-form/hero-ticket";
import { TicketForm } from "@/components/ticket-form/ticket-form";
import Link from "next/link"
import { Header } from '@/components/header';

export default function Checkout() {

  return (
    <section className="min-h-screen w-[375px] mx-auto py-25 space-y-10">
      <Header />

      <HeroTicket />
      <TicketForm />


    </section>
  )
}