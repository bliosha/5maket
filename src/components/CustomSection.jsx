import React from "react";
import "../sass/components/CustomSection.scss";
import phone from "../assets/img/laid-phone2.png";

const CustomSection = () => {
    return (
        <section className="custom-section">
            <div className="container">
                <div className="row align-items-center">
                    {/* Ліва частина: текст */}
                    <div className="col-md-6 text-content">
                        <p className="details">DIP INTO THE DETAILS</p>
                        <h2 className="title">Super easy to customize</h2>
                        <div className="underline"></div>
                        <p className="description">
                            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
                            a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                            per inceptos himenaeos.
                        </p>
                    </div>

                    {/* Права частина: телефон */}
                    <div className="col-md-6 image-content">
                        <img
                            src={phone}
                            alt="Smartphone"
                            className="phone-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomSection;
