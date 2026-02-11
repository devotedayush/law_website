import React from 'react';

const ServicesHero = () => {
    return (
        <section className="relative w-full min-h-[60vh] bg-[#FAF9F6] flex items-center">
            <div className="p-6 md:p-12 lg:p-20 w-full max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    <div className="lg:w-1/6 pt-2">
                        <span className="uppercase tracking-widest text-xs font-bold text-neutral-400 block mb-2">
                            Our
                        </span>
                        <span className="uppercase tracking-widest text-xs font-bold text-neutral-400 block">
                            Services
                        </span>
                    </div>
                    <div className="lg:w-5/6">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900 mb-8 leading-tight">
                            Comprehensive Solutions<br />for Every Business Need
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-500 max-w-2xl leading-relaxed font-light mb-10">
                            From legal compliance and tax advisory to market research and human capital — we deliver integrated, technology-driven solutions that help you scale with confidence.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-[#4A6FA5] text-white px-8 py-4 rounded text-sm font-medium hover:bg-[#3B5D8A] transition-colors duration-200"
                        >
                            Schedule a Consultation
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;
