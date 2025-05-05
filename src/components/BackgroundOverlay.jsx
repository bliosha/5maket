import React, { useEffect, useState } from "react";
import "../sass/components/_header.scss"; // або створений _overlay.scss

const BackgroundOverlay = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setActive(window.scrollY > 10); // активується після 100px скролу
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return <div className={`background-overlay ${active ? "active" : ""}`} />;
};

export default BackgroundOverlay;
