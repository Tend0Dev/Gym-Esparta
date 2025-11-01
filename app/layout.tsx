import type { Metadata } from "next"
import { Inter, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import PayPalProvider from "./paypal-provider"

const inter = Inter({ subsets: ["latin"] })
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gimnasio Esparta - Forja tu Cuerpo, Forja tu Espíritu",
  description: "El mejor gimnasio para transformar tu cuerpo y mente",
  keywords: "gimnasio, entrenamiento, fitness, esparta, ejercicio, musculación",
  
  // Open Graph para Facebook, LinkedIn, WhatsApp, etc.
  openGraph: {
    title: "Gimnasio Esparta - Forja tu Cuerpo, Forja tu Espíritu",
    description: "El mejor gimnasio para transformar tu cuerpo y mente",
    url: "https://gym-esparta.vercel.app/", 
    siteName: "Gimnasio Esparta",
    images: [
      {
        url: "/images/metatag-main.jpg", // o la URL completa de tu imagen
        width: 1200,
        height: 630,
        alt: "Gimnasio Esparta - Transforma tu cuerpo",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Gimnasio Esparta - Forja tu Cuerpo, Forja tu Espíritu",
    description: "El mejor gimnasio para transformar tu cuerpo y mente",
    images: ["/images/metatag-main.jpg"], // o la URL completa
    creator: "@gimnasioesparta", // Reemplaza con tu usuario de Twitter si tienes
  },
  
  // Otros meta tags importantes
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    // Agrega aquí tu Google Search Console si la tienes
    // google: "tu-codigo-de-verificacion",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Favicon y apple touch icon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <PayPalProvider>
          {children}
          <Analytics />
        </PayPalProvider>
      </body>
    </html>
  )
}