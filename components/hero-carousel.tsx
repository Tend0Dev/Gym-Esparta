"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    image: "/images/musculo.jpeg",
    title: "FORJA TU CUERPO",
    subtitle: "Entrena como un guerrero espartano",
  },
  {
    image: "/images/pesas.jpg",
    title: "SUPERA TUS LÍMITES",
    subtitle: "Cada día es una nueva batalla",
  },
  {
    image: "/images/grupo.jpg",
    title: "FORJA TU ESPÍRITU",
    subtitle: "La disciplina es tu mejor arma",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [timer, setTimer] = useState<NodeJS.Timeout>()

  const startTimer = () => {
    if (timer) clearInterval(timer)
    const newTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    setTimer(newTimer)
  }

  useEffect(() => {
    startTimer()
    return () => {
      if (timer) clearInterval(timer)
    }
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    startTimer() // Reinicia el temporizador
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    startTimer() // Reinicia el temporizador
  }

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden pt-16">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-secondary/60 z-10" />
            <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill priority className="object-cover" />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="text-center px-4">
                  <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-accent mb-4 tracking-wider">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-secondary-foreground mb-8">{slide.subtitle}</p>
                  <a href="#planes" className="bg-accent hover:bg-accent/80 text-secondary text-lg px-8 py-6 rounded-xl hover:transition-colors">
                    Comienza Tu Transformación
                  </a>
                </div>
              </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-secondary/50 hover:bg-secondary/80 text-accent p-2 rounded-full transition-all hover:cursor-pointer"
        aria-label="Anterior"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-secondary/50 hover:bg-secondary/80 text-accent p-2 rounded-full transition-all hover:cursor-pointer"
        aria-label="Siguiente"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-accent w-8" : "bg-secondary-foreground/50"
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
