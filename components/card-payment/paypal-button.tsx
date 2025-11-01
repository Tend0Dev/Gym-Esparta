'use client'
import React from 'react'
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'

interface PaypalInterface {
    totalValue: string;
    invoice: string;
}

export const PaypalButton: React.FC<PaypalInterface> = (props) => {
  const [{ isPending }] = usePayPalScriptReducer();

  // Muestra un loading mientras PayPal se carga
  if (isPending) {
    return (
      <div className="flex justify-center items-center h-20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        <span className="ml-2">Cargando PayPal...</span>
      </div>
    );
  }

  return (
    <PayPalButtons 
        style={{ 
            layout: 'vertical',
            shape: 'rect',
            color: 'gold'
        }}
        createOrder={(data, actions) => {
            if (!actions.order) {
                throw new Error('PayPal order actions not available');
            }
            
            return actions.order.create({
                intent: 'CAPTURE',
                purchase_units: [
                    {
                        description: 'Gracias por seleccionar el plan: ' + props.invoice,
                        amount: {
                            currency_code: 'MXN',
                            value: props.totalValue,
                        }
                    }
                ]
            })
        }}

        onApprove={async (data, actions) => {
            if (!actions.order) {
                console.error('PayPal order actions not available');
                return;
            }
            
            try {
                const order = await actions.order.capture();
                console.log('Order captured:', order);
                // Aquí puedes agregar lógica después del pago exitoso
                alert('¡Pago exitoso!');
            } catch (error) {
                console.error('Error capturing order:', error);
                alert('Error en el pago');
            }
        }}

        onError={(error) => {
            console.error('PayPal error:', error);
            alert('Error al cargar PayPal');
        }}
    />
  )
}