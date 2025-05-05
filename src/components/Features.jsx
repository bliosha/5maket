import React from "react";
import "../sass/components/Features.scss";


const features = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                   className="lucide lucide-monitor-icon lucide-monitor">
            <rect width="20" height="14" x="2" y="3" rx="2"/>
            <line x1="8" x2="16" y1="21" y2="21"/>
            <line x1="12" x2="12" y1="17" y2="21"/>
        </svg>,
        title: "Responsive",
        description:
            "Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.",
        active: true,
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                   className="lucide lucide-settings-icon lucide-settings">
            <path
                d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
            <circle cx="12" cy="12" r="3"/>
        </svg>,
        title: "Customizable",
        description:
            "Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.",
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                   className="lucide lucide-facebook-icon lucide-facebook">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>,
        title: "Lovely design",
        description:
            "Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.",
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                   className="lucide lucide-tablet-smartphone-icon lucide-tablet-smartphone">
            <rect width="10" height="14" x="3" y="8" rx="2"/>
            <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"/>
            <path d="M8 18h.01"/>
        </svg>,
        title: "Mobile Friendly",
        description:
            "Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum lacinia consectetur.",
    },
];

const FeaturesSection = () => {
    return (
        <section className="features-section text-center">
            <div className="container">
                <h6 className="text-primary fw-bold">PRODUCT OVERVIEW</h6>
                <h2 className="fw-bold mb-2">List of amazing features</h2>
                <div className="divider mx-auto mb-5"/>
                <div className="row">
                {features.map((feature, index) => (
                        <div key={index} className="col-md-3 col-sm-6 mb-4">
                            <div className={`feature-icon ${feature.active ? "active" : ""}`}>
                                {feature.icon}
                            </div>
                            <h5 className="fw-semibold mt-3">{feature.title}</h5>
                            <p className="text-muted small">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;