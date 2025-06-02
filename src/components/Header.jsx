import React, { useState, useEffect } from "react";
import "../sass/components/Header.scss";
import logo from "../assets/img/backgrounds/logo.png";

const Header = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("#home");

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const navItems = [
        { href: "#home", label: "Home" },
        { href: "#features", label: "Features" },
        { href: "#about", label: "About" },
        { href: "#testimonials", label: "Testimonials" },
        { href: "#pricing", label: "Pricing" },
        { href: "#contact", label: "Contact" },
    ];

    // Scroll and section tracking
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Detect currently visible section
            const sections = navItems.map((item) =>
                document.querySelector(item.href)
            );
            let current = "#home";

            for (let section of sections) {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 120 && rect.bottom >= 120) {
                        current = `#${section.id}`;
                        break;
                    }
                }
            }

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check on load

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
            <div className="container-fluid h-100">
                <div className="row w-100 h-100 align-items-center">
                    <div className="col-md-3 d-flex align-items-center justify-content-between">
                        <div className="logo">
                            <span className="lucid-logo-text">
                              <span className="lucid-main">LUCID</span>
                              <div className="lucid-sub-container">
                                  <span className="lucid-sub">ONEPAGE</span>
                                  <span className="lucid-sub">THEME</span>
                              </div>
                            </span>
                        </div>
                        <button
                            className="navbar-toggler d-md-none"
                            type="button"
                            onClick={handleNavCollapse}
                            aria-expanded={!isNavCollapsed}
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="col-md-9">
                        <nav className="navbar navbar-expand-md justify-content-center">
                            <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`} id="navbarNav">
                                <ul className="navbar-nav">
                                    {navItems.map((item) => (
                                        <li key={item.href} onClick={handleNavCollapse} className="nav-item">
                                            <a
                                                href={item.href}
                                                className={`nav-link ${activeSection === item.href ? "active" : ""}`}
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
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
