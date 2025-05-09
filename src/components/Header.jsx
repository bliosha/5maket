import React, { useState, useEffect } from "react";
import "../sass/components/_header.scss";
import logo from "../assets/img/logo.png";

const Header = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [scrolled, setScrolled] = useState(false);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`site-header position-fixed w-100 top-0 start-0 zindex-100 ${scrolled ? 'scrolled' : ''}`}>
            <div className="container-fluid h-100">
                <div className="row w-100 h-100 align-items-center">
                    <div className="col-md-3 d-flex align-items-center justify-content-between">
                        <div className="logo">
                            <img src={logo} alt="Lucid Logo" className="img-fluid" />
                        </div>
                        <button
                            className="navbar-toggler d-md-none"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded={!isNavCollapsed ? true : false}
                            aria-label="Toggle navigation"
                            onClick={handleNavCollapse}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="col-md-9">
                        <nav className="navbar navbar-expand-md justify-content-center">
                            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                                <ul className="navbar-nav">
                                    <li onClick={handleNavCollapse} className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                                    <li onClick={handleNavCollapse} className="nav-item"><a className="nav-link" href="#features">Features</a></li>
                                    <li onClick={handleNavCollapse} className="nav-item"><a className="nav-link" href="#about">About</a></li>
                                    <li onClick={handleNavCollapse} className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
                                    <li onClick={handleNavCollapse} className="nav-item"><a className="nav-link" href="#pricing">Pricing</a></li>
                                    <li onClick={handleNavCollapse} className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
