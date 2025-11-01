import React, { useState, useEffect } from 'react'

interface UploadInputProps {
  onUploadChange?: (uploaded: boolean) => void;
  onFileSelect?: (file: File | null) => void;
  preview?: string;
}

export const UploadInput = ({ onUploadChange, onFileSelect, preview }: UploadInputProps) => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (preview) {
      setPreviewUrl(preview);
      setFileUploaded(true);
    }
  }, [preview]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileUploaded(true);
      onUploadChange?.(true);
      onFileSelect?.(file);

      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      resetUpload();
    }
  };

  const resetUpload = () => {
    setFileUploaded(false);
    setPreviewUrl(null);
    onUploadChange?.(false);
    onFileSelect?.(null);
  };

  return (
    <div className='mb-4'>
      <p className='text-accent text-lg'>
        Sube tu foto <span className="text-gray-400 text-sm">(Opcional)</span>
      </p>

      <label className='bg-black/10 border border-neutral-500 border-dashed px-4 py-3 block w-full rounded-lg cursor-pointer mb-2 relative overflow-hidden'>
        <div className='bg-neutral-300 size-20 grid place-content-center rounded-lg  mx-auto mb-2 relative border border-Neutral-500/70'>
          {/* 👇 Si hay preview, mostramos la imagen en lugar del ícono */}
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="preview"
              className="size-20 object-cover rounded-lg  shadow-md"
            />
          ) : (
            <img src="/icon-upload.svg" alt="upload" className="w-6 h-6" />
          )}
        </div>

        <input
          className='hidden'
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <p className='text-center'>Subir archivo</p>
      </label>

      {/* ✅ Botón eliminar (solo si hay imagen) */}
      {previewUrl && (
        <div className="flex justify-center mb-2">
          <button
            type="button"
            onClick={resetUpload}
            className="text-xs text-red-500 hover:text-red-600 underline cursor-pointer"
          >
            Eliminar foto
          </button>
        </div>
      )}

      {fileUploaded && (
        <p className="text-green-500 text-[11px] text-center mt-1">
          ¡Archivo subido correctamente!
        </p>
      )}

      <p className='text-muted-foreground text-[11px] text-center'>
        Formato permitido: JPG, PNG (max 800x400px)
      </p>
    </div>
  )
}
