import { useState, useEffect } from "react"

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