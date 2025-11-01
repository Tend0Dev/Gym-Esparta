'use client'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

export default function PayPalProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  if (!paypalClientId) {
    console.error("PayPal Client ID no encontrada. Verifica tus variables de entorno.");
    return <>{children}</>; // Renderiza los children sin PayPal
  }

  return (
    <PayPalScriptProvider 
      options={{ 
        clientId: paypalClientId,
        currency: "MXN",
        intent: "capture"
      }}
      deferLoading={false}
    >
      {children}
    </PayPalScriptProvider>
  )
}