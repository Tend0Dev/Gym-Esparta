"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { PaypalButton } from "@/components/card-payment/paypal-button"

export default function Payment() {
  const [planName, setPlanName] = useState("")
  const [planPrice, setPlanPrice] = useState("")

  useEffect(() => {
    const name = localStorage.getItem("selectedPlanName")
    const price = localStorage.getItem("selectedPlanPrice")
    if (name && price) {
      setPlanName(name)
      setPlanPrice(price)
    }
  }, [])

  return (
    <div className="w-[375px] m-auto pt-25 space-y-10">
      <Header />

      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow text-center">
        <h1 className="text-2xl font-bold mb-4">Selecciona tu método de pago</h1>
        <p className="mb-2 ">
          Plan: <strong className="text-accent text-lg">{planName || "No seleccionado"}</strong>
        </p>
        <p className="mb-6 ">Precio del plan:</p>
        <div className="text-4xl font-extrabold mb-8">${planPrice || "0"}</div>

      </div>

      <PaypalButton totalValue={planPrice || "0"} invoice={planName || "No seleccionado"} />
    </div>
  )
}
