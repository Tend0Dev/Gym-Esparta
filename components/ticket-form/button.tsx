"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface ButtonProps {
    disabled?: boolean;
    formData?: {
        nombre: string;
        email: string;
        curp: string;
    };
}

export const Button = ({ disabled = false, formData }: ButtonProps) => {
    const router = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        if (formData) {
            // Guardar datos en localStorage o context para usarlos en payment
            localStorage.setItem("userData", JSON.stringify(formData));
        }
        
        router.push("/payment");
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            disabled={disabled}
            className={`
                bg-Orange-500 text-accent-foreground w-full rounded-xl py-4 text-xl font-bold 
                ${disabled 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-Orange-500 hover:bg-Orange-700 cursor-pointer'
                }
            `}
        >
            Proceder con el pago
        </button>
    );
};