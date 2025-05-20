import React from 'react';
import "../sass/components/PricingPlans.scss";

const plans = [
    { title: 'FREE', price: 0 },
    { title: 'PERSONAL', price: 25 },
    { title: 'BUSINESS', price: 50, featured: true },
    { title: 'ULTIMATE', price: 99 },
];

const PricingPlans = () => {
    return (
        <section className="pricing-section py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <p className="subtitle">QUALITY HAS ITS PRICE</p>
                    <h2 className="title">Pricings & Plans</h2>
                    <div className="underline mx-auto"></div>
                </div>
                <div className="row justify-content-center g-0">
                    {plans.map((plan, idx) => (
                        <div key={idx} className="col-12 col-sm-6 col-lg-3 mb-3 px-0">
                            <div className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                                <div className="card-header text-center text-uppercase font-weight-bold">
                                    {plan.title}
                                </div>

                                {/* Ціновий блок */}
                                <div className="price-block">
                                    <div className="price text-center">
                                        <div className="amount-line">
                                            <span className="symbol">$</span>
                                            <span className="amount">{plan.price}</span>
                                        </div>
                                        <span className="per-month">/per month</span>
                                    </div>

                                </div>

                                {/* Контентний блок */}
                                <div className="card-body text-center bg-white">
                                    <p>
                                        Fusce fermentum placerat magna ac pharetra. Aliquam euismod elit non ipsum{' '}
                                        <span className="text-primary">lacinia</span> consectetur.
                                    </p>
                                    <button className={`btn ${plan.featured ? 'btn-white-blue' : 'btn-primary'}`}>
                                        ORDER NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingPlans;
