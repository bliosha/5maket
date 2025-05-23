import React from 'react';
import "../sass/components/HeroSection.scss";
import phones from "/src/assets/img/verticle-phone.png";
const HeroSection = () => {
    return (
        <section className="hero-section d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center">
                    {/* Текстовий блок зліва */}
                    <div className="col-md-6">
                        <p className="intro">INTRODUCING LUCID THEME</p>
                        <h1 className="title">Carefully crafted and<br />beautiful landing page.</h1>
                        <p className="description">
                            Etiam ullamcorper et turpis eget hendrerit. Praesent varius risus mi, at elementum magna ultricies accumsan.
                            Cras venenatis lacus sed dolor placerat tempus. Morbi blandit at neque ut imperdiet.
                        </p>
                        <div className="buttons">
                            <a href="#download" className="btn btn-download">DOWNLOAD NOW</a>
                            <a href="#features" className="btn btn-view">VIEW FEATURES</a>
                        </div>
                    </div>

                    {/* Зображення праворуч */}
                    <div className="col-md-6 text-center">
                        <img src={phones} alt="Phones" className="phones-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;