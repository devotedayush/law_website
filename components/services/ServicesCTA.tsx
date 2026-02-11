import React from 'react';

const ServicesCTA = () => {
    return (
        <section className="bg-[#4A6FA5] text-white p-6 md:p-12 lg:p-20 flex items-center justify-center">
            <div className="max-w-3xl w-full text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-tight">
                    Not Sure Where<br />to Start?
                </h2>
                <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                    Tell us about your business and we&apos;ll recommend the right combination of services to keep you compliant, competitive, and growing.
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-white text-neutral-900 px-8 py-4 rounded text-sm font-medium hover:bg-[#C5D5E8] transition-colors duration-200"
                >
                    Talk to a Consultant
                </a>
            </div>
        </section>
    );
};

export default ServicesCTA;
