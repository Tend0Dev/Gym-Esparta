'use client'
import { useEffect, useRef, useState } from 'react'
import { Dumbbell, Download } from 'lucide-react'
import * as htmlToImage from 'html-to-image'
import { PersonIcon } from "@radix-ui/react-icons"

interface CardMembershipProps {
  userData: {
    nombre?: string;
    email?: string;
    foto?: string;
  };
}

export const CardMembership = ({ userData }: CardMembershipProps) => {
  const [planName, setPlanName] = useState("")
  const cardRef = useRef<HTMLDivElement>(null)

  const personIcon = (
      <PersonIcon className='size-9 cursor-pointer'/>
    )

  useEffect(() => {
    const name = localStorage.getItem("selectedPlanName")
    if (name) setPlanName(name)
  }, [])

  // 🔹 Obtener imagen de fondo
  const getBackgroundImage = () => {
    switch (planName.toLowerCase()) {
      case "guerrero":
        return "/images/guerrero-card.png"
      case "espartano":
        return "/images/espartano-card.png"
      case "leyenda":
        return "/images/leyenda-card.png"
      default:
        return "/images/bg-default.jpg"
    }
  }

  // 🔹 Fecha dinámica
  const today = new Date()
  const meses = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sept", "oct", "nov", "dic"]
  const mesActual = meses[today.getMonth()]
  let mesSiguienteIndex = today.getMonth() + 1
  let añoSiguiente = today.getFullYear()
  if (mesSiguienteIndex > 11) {
    mesSiguienteIndex = 0
    añoSiguiente += 1
  }
  const mesSiguiente = meses[mesSiguienteIndex]
  const dia = today.getDate()
  const year = today.getFullYear()
  const fechaTexto = `${dia} ${mesActual} ${year} / ${dia} ${mesSiguiente} ${añoSiguiente}`

  // 🧾 Descargar la tarjeta como imagen
  const handleDownload = async () => {
    if (cardRef.current) {
      const dataUrl = await htmlToImage.toPng(cardRef.current, { quality: 1 })
      const link = document.createElement('a')
      link.download = `${userData.nombre || 'membresia'}.png`
      link.href = dataUrl
      link.click()
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        ref={cardRef}
        className="w-[450px] h-72 rounded-xl p-6 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${getBackgroundImage()})` }}
      >
        <div className="absolute inset-0 bg-black/30 rounded-xl"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-accent p-2 rounded-lg">
              <Dumbbell className="h-6 w-6 text-secondary" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-accent tracking-wider">
              ESPARTA
            </h1>
          </div>

          <p className="text-gray-100 font-semibold mb-4 ml-2">{fechaTexto}</p>
          <p className="text-center text-2xl mb-2 font-bold text-accent uppercase">{planName || "PLAN"}</p>

          <div className="flex items-center gap-4">
            {userData.foto ? (  
              <img
                src={userData.foto}
                alt="Foto de usuario"
                className="size-20 rounded-lg object-cover border border-accent"
              />
            ) : (
              <div className="size-20 rounded-lg bg-gray-400 flex items-center justify-center text-gray-700 text-sm">
                {personIcon}
              </div>
            )}
            <div>
              <h2 className="text-lg font-semibold text-white">{userData.nombre || 'Nombre no disponible'}</h2>
              <p className="text-gray-200 text-sm">{userData.email || 'Correo no disponible'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🟡 Botón para descargar */}
      <button
        onClick={handleDownload}
        className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/80 transition"
      >
        <Download className="w-5 h-5" />
        Descargar tarjeta
      </button>
    </div>
  )
}
