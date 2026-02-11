import React from 'react';

const columns = [
    {
        heading: 'Our Values',
        items: [
            'Integrity in every interaction',
            'Transparency over ambiguity',
            'Excellence as a non-negotiable standard',
        ],
    },
    {
        heading: 'Quality Standards',
        items: [
            'Multi-layer review on every deliverable',
            'Industry-specific compliance benchmarks',
            'Continuous professional development',
        ],
    },
    {
        heading: 'Client Promise',
        items: [
            'Response within 24 hours, always',
            'No hidden fees or surprise billing',
            'Proactive risk alerts and updates',
        ],
    },
];

const ValuesCommitment = () => {
    return (
        <section className="bg-[#FAF9F6] p-6 md:p-12 lg:p-20 flex items-center justify-center border-t border-neutral-200">
            <div className="max-w-7xl w-full">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    <div className="lg:w-1/6 pt-2">
                        <span className="uppercase tracking-widest text-xs font-bold text-neutral-500 block mb-2">
                            Values
                        </span>
                        <span className="uppercase tracking-widest text-xs font-bold text-neutral-500 block mb-2">
                            Quality &
                        </span>
                        <span className="uppercase tracking-widest text-xs font-bold text-neutral-500 block">
                            Commitment
                        </span>
                    </div>
                    <div className="lg:w-5/6">
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-800 leading-[1.1] mb-12">
                            Our Commitment to Excellence
                        </h2>
                        <div className="flex overflow-x-auto pb-4 pl-6 -mr-6 md:mr-0 md:pl-0 md:grid md:grid-cols-3 gap-10 scrollbar-hide snap-x snap-mandatory">
                            {columns.map((col) => (
                                <div key={col.heading} className="min-w-[200px] max-w-[240px] shrink-0 snap-start md:min-w-0 md:max-w-none md:shrink">
                                    <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4A6FA5] pb-4 border-b border-[#C5D5E8] mb-6">
                                        {col.heading}
                                    </h3>
                                    <ul className="space-y-4">
                                        {col.items.map((item) => (
                                            <li key={item} className="flex items-start gap-3 text-neutral-700 text-sm leading-relaxed">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#4A6FA5] mt-1.5 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValuesCommitment;
