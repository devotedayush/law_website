import React from 'react';

const stats = [
    { value: '4+', label: 'Core Disciplines' },
    { value: '50+', label: 'Clients Served' },
    { value: '100%', label: 'Compliance Rate' },
];

const AboutUs = () => {
    return (
        <section className="bg-[#F3F2ED] p-6 md:p-12 lg:p-20 flex items-center justify-center">
            <div className="max-w-7xl w-full">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    <div className="lg:w-1/6 pt-2">
                        <span className="uppercase tracking-widest text-xs font-bold text-neutral-500 block mb-2">
                            About
                        </span>
                        <span className="uppercase tracking-widest text-xs font-bold text-neutral-500 block">
                            Us
                        </span>
                    </div>
                    <div className="lg:w-5/6">
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-800 leading-[1.1] mb-8">
                            Who We Are
                        </h2>
                        <p className="text-neutral-600 text-base md:text-lg leading-relaxed max-w-3xl mb-16">
                            Founded in 2025, Cyinov Consulting is a multidisciplinary consulting firm
                            headquartered in India. We operate at the intersection of legal compliance,
                            tax advisory, market research, and human capital — delivering integrated
                            solutions that help businesses scale without blind spots. Our team combines
                            deep domain expertise with a founder-first mindset, ensuring that every
                            recommendation is practical, actionable, and built for real-world execution.
                        </p>
                        <div className="border-t border-[#C5D5E8] pt-10">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                                {stats.map((stat) => (
                                    <div key={stat.label}>
                                        <span className="text-5xl md:text-6xl font-bold text-neutral-900 block mb-2">
                                            {stat.value}
                                        </span>
                                        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4A6FA5]">
                                            {stat.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
