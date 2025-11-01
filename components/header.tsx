"use client"

import { Dumbbell } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  const hamburguerIcon = (
    <HamburgerMenuIcon className='size-7 cursor-pointer' style={{ color: '#e8000c' }} />
  )
  const closeIcon = (
    <Cross1Icon className='size-7 cursor-pointer' style={{ color: '#e8000c' }} />
  )


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (

    
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-secondary/40 backdrop-blur-sm border-b border-accent/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/">
            <div className="flex items-center gap-3">
              <div className="bg-accent p-2 rounded-lg">
                <Dumbbell className="h-6 w-6 text-secondary" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-accent tracking-wider">ESPARTA</h1>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-secondary-foreground hover:text-accent transition-colors">
              Inicio
            </a>
            <a href="/#planes" className="text-secondary-foreground hover:text-accent transition-colors">
              Planes
            </a>
            <a href="/#contacto" className="text-secondary-foreground hover:text-accent transition-colors">
              Contacto
            </a>
            {/* <Button className="bg-accent hover:bg-accent/90 text-secondary">Únete Ahora</Button> */}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-accent text-2xl font-bold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? closeIcon : hamburguerIcon}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col items-center gap-4 bg-secondary/90 mt-4 rounded-lg">
            <a
              href="/"
              className="text-secondary-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </a>
            <a
              href="/#planes"
              className="text-secondary-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Planes
            </a>
            <a
              href="/#contacto"
              className="text-secondary-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </a>
            {/* <Button className="bg-accent hover:bg-accent/90 text-secondary w-full">Únete Ahora</Button> */}
          </nav>
        )}
      </div>
    </header>
  )
}
