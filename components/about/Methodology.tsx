import React from 'react';

const steps = [
    {
        number: '01',
        title: 'Discovery & Diagnosis',
        description: 'We uncover client challenges and pinpoint root causes through structured analysis and data review.',
    },
    {
        number: '02',
        title: 'Strategy Design',
        description: 'A tailored roadmap is built around your business goals, litigation cycle (if any), risk appetite, and growth timeline.',
    },
    {
        number: '03',
        title: 'Implementation',
        description: 'We execute across all disciplines — filings, registrations, contracts, agreements, and compliance frameworks.',
    },
    {
        number: '04',
        title: 'Monitoring & Optimization',
        description: 'Ongoing tracking ensures nothing slips through the cracks as regulations and markets shift.',
    },
    {
        number: '05',
        title: 'Scale & Evolve',
        description: 'As your business grows, we evolve the strategy — expanding protections, entering new markets, and future-proofing operations.',
    },
];

const Methodology = () => {
    return (
        <section className="bg-[#F3F2ED] p-6 md:p-12 lg:p-20 flex items-center justify-center">
            <div className="max-w-7xl w-full">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    <div className="lg:w-1/6 pt-2">
                        <span className="uppercase tracking-widest text-xs font-bold text-neutral-500 block mb-2">
                            Our
                        </span>
                        <span className="uppercase tracking-widest text-xs font-bold text-neutral-500 block">
                            Methodology
                        </span>
                    </div>
                    <div className="lg:w-5/6">
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-800 leading-[1.1] mb-12">
                            Our Consulting Framework
                        </h2>
                        <div className="border-t border-neutral-300">
                            {steps.map((step) => (
                                <div
                                    key={step.number}
                                    className="border-b border-neutral-300 py-6 md:py-8 flex flex-col md:flex-row md:items-center gap-3 md:gap-8"
                                >
                                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4A6FA5] w-8 shrink-0">
                                        {step.number}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 md:w-72 shrink-0">
                                        {step.title}
                                    </h3>
                                    <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
