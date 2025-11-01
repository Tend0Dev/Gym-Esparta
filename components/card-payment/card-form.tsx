import React from 'react'
import { TextInput } from '../ticket-form/text-input';

export const CardForm  = () => {
  return (
    <div>
        <TextInput
          label="Nombre Completo"
          placeholder="e.g. Jane Appleseed"
        />
        <TextInput
          label="Número de Tarjeta"
          placeholder="e.g. 0000 0000 0000 0000"
          maxLength={16}
        />
        <TextInput
          label="Fecha de Expiración"
          placeholder="MM/AA"
          maxLength={5}
        />
        <TextInput
          label="CVC"
          placeholder="000"
          maxLength={3}
        />
    </div>
  )
}
