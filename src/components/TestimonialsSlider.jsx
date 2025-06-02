import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../sass/components/TestimonialsSlider.scss";

import avatar1 from "../assets/img/slider/slider-img-1.jpg";
import avatar2 from "../assets/img/slider/slider-img-2.jpg";
import avatar3 from "../assets/img/slider/slider-img-3.jpg";
import avatar4 from "../assets/img/slider/slider-img-4.jpg";
import avatar5 from "../assets/img/slider/slider-img-5.jpg";
import avatar6 from "../assets/img/slider/slider-img-6.jpg";

const testimonials = [
    {
        text: "Once upon a time all the Rivers combined to protest against the action of the Sea in making their waters salt. “When we come to you,” said they to the Sea.",
        author: "John Doe",
        role: "CEO, THE RIVERS COMPANY",
        avatar: avatar1
    },
    {
        text: "A shoe is not only a design, but it's a part of your body language, the way you walk. The way you're going to move is quite dictated by your shoes.",
        author: "Dean Winchester",
        role: "UX DESIGNER, GOOGLE INC.",
        avatar: avatar2
    },
    {
        text: "Once upon a time all the Rivers combined to protest against the action of the Sea in making their waters salt. “When we come to you,” said they to the Sea.",
        author: "Sarah Paul",
        role: "CREATIVE DIRECTOR, PIXEL INC.",
        avatar: avatar3
    },
    {
        text: "A shoe is not only a design, but it's a part of your body language, the way you walk. The way you're going to move is quite dictated by your shoes.",
        author: "Michael Scott",
        role: "PRODUCT OWNER, DUNDER MIFFLIN",
        avatar: avatar4
    },
    {
        text: "Once upon a time all the Rivers combined to protest against the action of the Sea in making their waters salt. “When we come to you,” said they to the Sea.",
        author: "Angela White",
        role: "UI SPECIALIST, APPWORKS",
        avatar: avatar5
    },
    {
        text: "A shoe is not only a design, but it's a part of your body language, the way you walk. The way you're going to move is quite dictated by your shoes.",
        author: "Oscar Martin",
        role: "LEAD DESIGNER, NEW ERA",
        avatar: avatar6
    },
];

const groupedTestimonials = [];
for (let i = 0; i < testimonials.length; i += 2) {
    groupedTestimonials.push(testimonials.slice(i, i + 2));
}

const TestimonialsSlider = () => {
    return (
        <>
            <div className="testimonials-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <p className="subtitle">QUALITY HAS ITS PRICE</p>
                            <h2 className="title">Pricings & Plans</h2>
                            <div className="divider"></div>
                        </div>
                    </div>

                    <Carousel controls={false} indicators={true} interval={5000}>
                        {groupedTestimonials.map((group, index) => (
                            <Carousel.Item key={index}>
                                <div className="row testimonial-slide">
                                    {group.map((item, i) => (
                                        <div className="col-md-6 testimonial-item" key={i}>
                                            <blockquote>{item.text}</blockquote>
                                            <div className="author">
                                                <img src={item.avatar} alt={item.author} />
                                                <div>
                                                    <p className="name">{item.author}</p>
                                                    <p className="role">{item.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>

            {/* CTA з сірим фоном ПІД слайдером */}
            <div className="cta-footer">
                <div className="container">
                    <div className="row nowrap-row align-items-center">
                        <div className="col-md-auto cta-text-container">
                            <p className="cta-text">
                                <strong>Like what you see?</strong> <thin>Get this great theme now!</thin>
                            </p>
                        </div>
                        <div className="col-md-auto buttons-container ms-auto">
                            <button className="btn btn-outline-dark">VIEW FEATURES</button>
                            <button className="btn btn-primary">DOWNLOAD NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialsSlider;
