import { useState, useEffect } from "react";

// Trocar tamanho de tela

export function Resize() {
    const [isMobile, setIsMobile] = useState([
        window.innerWidth
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setIsMobile(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    })

    return isMobile;
}

// Verificar se é ADM

export function IsAdm() {
    const [isAdm, setIsAdm] = useState("")

    useEffect(() => {
        setIsAdm(false)
    })

    return isAdm;
}