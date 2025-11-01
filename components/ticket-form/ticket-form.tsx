'use client'
import { useState, useEffect } from 'react'
import { UploadInput } from './upload-input'
import { TextInput } from './text-input'
import { Button } from './button'

export const TicketForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    curp: '',
    foto: '' // base64
  });

  // 🔹 Cargar datos desde localStorage sin perder propiedades
  useEffect(() => {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setFormData(prev => ({ ...prev, ...parsed }));
    }
  }, []);

  // 🔹 Guardar solo los datos permitidos (nombre, email, foto)
  useEffect(() => {
    const { nombre, email, foto } = formData;
    localStorage.setItem('userData', JSON.stringify({ nombre, email, foto }));
  }, [formData.nombre, formData.email, formData.foto]);

  // 🔹 Manejar cambios de texto
  const handleInputChange = (field: keyof typeof formData) => (value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // 🔹 Recibir imagen desde UploadInput
  const handleUploadChange = (file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData(prev => ({ ...prev, foto: reader.result as string }));
      };
      reader.readAsDataURL(file);
    } else {
      setFormData(prev => ({ ...prev, foto: '' }));
    }
  };

  // 🔹 Validar formulario de forma segura
  const isFormValid = () => {
    return (
      (formData.nombre?.trim() ?? '') !== '' &&
      (formData.email?.trim() ?? '') !== '' &&
      (formData.curp?.trim()?.length ?? 0) === 18
    );
  };

  return (
    <div>
      {/* Subida de imagen */}
      <UploadInput 
        onFileSelect={handleUploadChange}
        preview={formData.foto}
      />

      <div className='flex flex-col gap-6'>
        {/* Nombre */}
        <TextInput
          label='Nombre Completo'
          placeholder='Angel Mejia'
          required
          value={formData.nombre}
          onChange={handleInputChange('nombre')}
        />

        {/* Correo */}
        <TextInput
          label='Correo Electrónico'
          placeholder='correo@ejemplo.com'
          type='email'
          required
          value={formData.email}
          onChange={handleInputChange('email')}
        />

        {/* CURP */}
        <TextInput
          label='CURP'
          placeholder='CURP (18 caracteres)'
          required
          maxLength={18}
          transformUppercase
          value={formData.curp}
          onChange={handleInputChange('curp')}
        />

        {/* Botón de envío */}
        <Button disabled={!isFormValid()} formData={formData} />
      </div>
    </div>
  )
}
