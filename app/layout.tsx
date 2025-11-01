import type { Metadata } from "next"
import { Inter, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import PayPalProvider from "./paypal-provider" // Asegúrate de crear este archivo

const inter = Inter({ subsets: ["latin"] })
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gimnasio Esparta - Forja tu Cuerpo, Forja tu Espíritu",
  description: "El mejor gimnasio para transformar tu cuerpo y mente",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        <PayPalProvider>
          {children}
          <Analytics />
        </PayPalProvider>
      </body>
    </html>
  )
}