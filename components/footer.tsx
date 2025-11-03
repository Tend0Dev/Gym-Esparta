import { Dumbbell, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:flex md:place-content-evenly gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-accent p-2 rounded-lg">
                <Dumbbell className="h-5 w-5 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-accent">ESPARTA</h3>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Forja tu cuerpo, forja tu espíritu. El mejor gimnasio para tu transformación.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="hover:text-accent transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#planes" className="hover:text-accent transition-colors">
                  Planes
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-accent transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* <div>
            <h4 className="font-semibold mb-4 text-accent">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-accent/10 p-2 rounded-lg hover:bg-accent/20 transition-colors">
                <Facebook className="h-5 w-5 text-accent" />
              </a>
              <a href="#" className="bg-accent/10 p-2 rounded-lg hover:bg-accent/20 transition-colors">
                <Instagram className="h-5 w-5 text-accent" />
              </a>
              <a href="#" className="bg-accent/10 p-2 rounded-lg hover:bg-accent/20 transition-colors">
                <Twitter className="h-5 w-5 text-accent" />
              </a>
            </div>
          </div> */}
        </div>

        <div className="border-t border-accent/20 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; 2025 Gimnasio Esparta. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
