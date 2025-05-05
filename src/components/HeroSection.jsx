import React from 'react';
import "../sass/components/HeroSection.scss";
import { Container, Button } from 'react-bootstrap';

const HeroSection = () => {
    return (
        <section className="hero-section d-flex align-items-center">
            <Container fluid>
                <div className="content-container">
                    <div className="text-content">
                        <p className="intro-text">
                            <span className="label">INTRODUCING LUCID THEME</span>
                        </p>
                        <h1>
                            Carefully crafted and<br />
                            beautiful landing page.
                        </h1>
                        <p className="description ">
                            Etiam ullamcorper et turpis eget hendrerit. Praesent varius risus mi,
                            at elementum magna ultricies accumsan. Cras venenatis lacus sed dolor
                            placerat tempus. Morbi blandit at neque ut imperdiet.
                        </p>
                        <div className="btn-group">
                            <Button variant="primary">DOWNLOAD NOW</Button>
                            <Button variant="outline-light">VIEW FEATURES</Button>
                        </div>
                    </div>
                    <div className="image-content">
                        <div className="phone-images" />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;
