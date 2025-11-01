import React, { useState } from 'react'

interface UploadInputProps {
    onUploadChange?: (uploaded: boolean) => void;
}

export const UploadInput = ({ onUploadChange }: UploadInputProps) => {
    const [fileUploaded, setFileUploaded] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileUploaded(true);
            if (onUploadChange) {
                onUploadChange(true);
            }
        } else {
            setFileUploaded(false);
            if (onUploadChange) {
                onUploadChange(false);
            }
        }
    };

    return (
        <div className='mb-4'>
            <p className='text-accent text-lg'>Sube tu foto <span className="text-gray-400 text-sm">(Opcional)</span></p>
            <label className='bg-black/10 border border-neutral-500 border-dashed px-4 py-3 block w-full rounded-lg cursor-pointer mb-2'>
                <div className='bg-neutral-300 size-[50px] grid place-content-center rounded-xl border border-neutral-500/70 mx-auto mb-2 '>
                    <img src="/icon-upload.svg" alt="upload" />
                </div>
                <input 
                    className='hidden' 
                    type="file" 
                    onChange={handleFileChange}
                /> 
                <p className='text-center'>Subir archivo</p>
            </label>
            {fileUploaded && (
                <p className="text-green-500 text-[11px] text-center">¡Archivo subido correctamente!</p>
            )}
            <p className='text-muted-foreground text-[11px] text-center'>Formato permitido: JPG, PNG (max 800x400px)</p>
        </div>
    )
}