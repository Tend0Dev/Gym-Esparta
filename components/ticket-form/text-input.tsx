import React from 'react'

interface Props {
    label: string;
    placeholder: string;
    type?: 'text' | 'email' | 'number';
    maxLength?: number;
    required?: boolean;
    value?: string;
    onChange?: (value: string) => void;
    transformUppercase?: boolean;
}

export const TextInput = ({ 
    label, 
    placeholder, 
    type = 'text', 
    maxLength, 
    required = false,
    value,
    onChange,
    transformUppercase = false
}: Props) => {
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = e.target.value;
        
        // Transformar a mayúsculas si está habilitado
        if (transformUppercase) {
            newValue = newValue.toUpperCase();
        }
        
        // Limitar longitud si hay maxLength
        if (maxLength && newValue.length > maxLength) {
            newValue = newValue.slice(0, maxLength);
        }
        
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <div className='flex flex-col'>
            <label className='mb-3 text-lg text-accent' htmlFor={label}>
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                id={label}
                type={type}
                placeholder={placeholder}
                className='border border-Neutral-500 rounded-lg h-11 px-3'
                maxLength={maxLength}
                required={required}
                value={value ?? ''}
                onChange={handleChange}
            />
            {required && (
                <p className="text-red-500 text-sm mt-1">Este campo es obligatorio</p>
            )}
        </div>
    )
}