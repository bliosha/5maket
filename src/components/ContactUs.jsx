import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../sass/components/ContactUs.scss";

const ContactUs = () => {
    return (
        <section className="contact-section">
            <Container>
                <Row className="text-center mb-5">
                    <Col>
                        <p className="section-subtitle">STAY IN TOUCH</p>
                        <h2 className="section-title">Contact us</h2>
                        <div className="divider"></div>
                    </Col>
                </Row>
                <Row className="contact-info text-center">
                    <Col md={4} className="mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-phone-icon lucide-phone">
                            <path
                                d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>
                        </svg>
                        <p>Phone: (415) 124-5678</p>
                        <p>Fax: (412) 123-8290</p>
                    </Col>
                    <Col md={4} className="mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-map-pin-icon lucide-map-pin">
                            <path
                                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <p>1001 Brickell Bay Dr.<br/>Suite 1900<br/>Miami, FL 33131</p>
                    </Col>
                    <Col md={4} className="mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-mail-icon lucide-mail">
                            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/>
                            <rect x="2" y="4" width="20" height="16" rx="2"/>
                        </svg>
                        <p>support@yourname.com</p>
                    </Col>
                </Row>
            </Container>

            <div className="contact-form-wrapper">
                <Container className="bg-black">
                    <Row>
                        <Col md={6}>
                            <Form>
                                <Form.Group controlId="formName" className="mb-3">
                                <Form.Control type="text" placeholder="NAME *" required />
                                </Form.Group>
                                <Form.Group controlId="formEmail" className="mb-3">
                                    <Form.Control type="email" placeholder="EMAIL *" required />
                                </Form.Group>
                                <Form.Group controlId="formSubject" className="mb-3">
                                    <Form.Control type="text" placeholder="SUBJECT *" required />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="formMessage" className="mb-3">
                                <Form.Control as="textarea" rows={10} placeholder="MESSAGE *" required />
                            </Form.Group>
                            <div className="button-wrapper">
                                <Button type="submit" className="send-button">SEND MESSAGE</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="map-background"></div>
        </section>
    );
};

export default ContactUs;