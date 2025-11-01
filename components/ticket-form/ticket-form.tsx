'use client'
import { useState } from 'react'
import { UploadInput } from './upload-input'
import { TextInput } from './text-input'
import { Button } from './button'

export const TicketForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        curp: ''
    });

    // Manejar cambios en los inputs
    const handleInputChange = (field: string) => (value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    // Validar si el formulario está completo
    const isFormValid = () => {
        return (
            formData.nombre.trim() !== '' &&
            formData.email.trim() !== '' &&
            formData.curp.trim().length === 18 // CURP tiene 18 caracteres
        );
    };

    return (
        <div>
            <UploadInput /> {/* Opcional */}

            <div className='flex flex-col gap-6'>
                <TextInput
                    label='Nombre Completo' 
                    placeholder='Angel Mejia'
                    required={true}
                    value={formData.nombre}
                    onChange={handleInputChange('nombre')}
                />
                
                <TextInput
                    label='Correo Electrónico' 
                    placeholder='correo@ejemplo.com'
                    type='email'
                    required={true}
                    value={formData.email}
                    onChange={handleInputChange('email')}
                />
                
                <TextInput
                    label='CURP' 
                    placeholder='CURP (18 caracteres)'
                    required={true}
                    maxLength={18}
                    transformUppercase={true}
                    value={formData.curp}
                    onChange={handleInputChange('curp')}
                />
                
                <Button 
                    disabled={!isFormValid()}
                    formData={formData}
                />
            </div>
        </div>
    )
}