import React from 'react';
import "../sass/components/DeviceSection.scss";

import phones from "../assets/img/device/verticle-phone.png";

const DeviceSection = () => {
    return (
        <section className="device-section py-5">
            <div className="container">
                <div className="row align-items-center">
                    {/* LEFT IMAGE */}
                    <div className="col-md-6 text-center">
                        <img src={phones} alt="Phones" className="img-fluid phones-image" />
                    </div>

                    {/* RIGHT TEXT */}
                    <div className="col-md-6">
                        <h6 className="text-uppercase text-primary">Dip into the details</h6>
                        <h2 className="fw-bold mb-3">Beautiful on every device</h2>
                        <div className="divider mb-3"></div>
                        <p className="text-muted mb-4">
                            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec
                            tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
                        </p>
                        <ul className="list-unstyled text-feature-list">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"
                                     stroke-linejoin="round" className="lucide lucide-trophy-icon lucide-trophy">
                                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                                    <path d="M4 22h16"/>
                                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
                                </svg>
                                Awesome design
                            </li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mouse-icon lucide-mouse"><rect x="5" y="2" width="14" height="20" rx="7"/><path d="M12 6v4"/></svg>Fully responsive</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>Retina ready</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gauge-icon lucide-gauge"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>Tons of features and easy to use</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeviceSection;