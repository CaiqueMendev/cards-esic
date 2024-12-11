import React from 'react'

const CardButton = ({

    // Default Card

    text = "",
    type = "green",
    onClick,
    disabled = false,
    className = "",

}) => {

    // Estilização Base
    const baseStyles = "text-base py-2 px-4 font-bold rounded-lg flex items-center justify-center uppercase tracking-tight ";

    // Estilizações Específicas
    const typeStyles = {

        // Botão Verde
        green: "bg-[#128065] text-white hover:bg-[#16A085]",

        // Botão Azul
        blue: "bg-[#1564C0] text-white hover:bg-[#1A75D1]",

    };

    // Botão Desativado
    const disabledStyles = "opacity-50 cursor-not-allowed";

    // Construção do className
    const computedClass = `${baseStyles} ${
        disabled ? disabledStyles : typeStyles[type]
    } ${className}`;

    // ----------------------------------------------------
  
    return (
        <button
            className={computedClass}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
    
};

export default CardButton;