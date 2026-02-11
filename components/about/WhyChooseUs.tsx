import React from 'react';
import { Layers, Users, Heart, Lightbulb } from 'lucide-react';

const pillars = [
    {
        icon: Layers,
        title: 'Integrated Approach',
        points: [
            'Legal, tax, and strategy under one roof',
            'No siloed advice — every recommendation connects',
            'Single point of contact for all business needs',
        ],
    },
    {
        icon: Users,
        title: 'Founder-First Mindset',
        points: [
            'We speak business, not just legalese',
            'Solutions designed for real-world execution',
            'Startup-friendly pricing and engagement models',
        ],
    },
    {
        icon: Heart,
        title: 'Relationship Driven',
        points: [
            'Long-term partnerships, not transactional billing',
            'Proactive compliance alerts and check-ins',
            'Dedicated teams that know your business deeply',
        ],
    },
    {
        icon: Lightbulb,
        title: 'Innovation Led',
        points: [
            'Technology-driven research and analytics',
            'Modern frameworks for traditional problems',
            'Continuous process improvement and automation',
        ],
    },
];

const WhyChooseUs = () => {
    return (
        <section className="bg-[#FAF9F6] p-6 md:p-12 lg:p-20 flex items-center justify-center border-t border-neutral-200">
            <div className="max-w-7xl w-full">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    <div className="lg:w-1/6 pt-2">
                        <span className="uppercase tracking-widest text-xs font-bold text-neutral-500 block mb-2">
                            Why
                        </span>
                        <span className="uppercase tracking-widest text-xs font-bold text-neutral-500 block">
                            Choose Us
                        </span>
                    </div>
                    <div className="lg:w-5/6">
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-800 leading-[1.1] mb-12">
                            Why Choose Cyinov
                        </h2>
                        <div className="flex overflow-x-auto pb-4 pl-6 -mr-6 md:mr-0 md:pl-0 md:grid md:grid-cols-2 gap-6 scrollbar-hide snap-x snap-mandatory">
                            {pillars.map((pillar) => {
                                const Icon = pillar.icon;
                                return (
                                    <div
                                        key={pillar.title}
                                        className="bg-white rounded-2xl p-6 md:p-8 min-w-[220px] max-w-[260px] shrink-0 snap-start md:min-w-0 md:max-w-none md:shrink"
                                    >
                                        <div className="w-11 h-11 rounded-xl bg-[#C5D5E8]/30 flex items-center justify-center text-[#4A6FA5] mb-5">
                                            <Icon strokeWidth={1.5} size={22} />
                                        </div>
                                        <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-4">
                                            {pillar.title}
                                        </h3>
                                        <ul className="space-y-2.5">
                                            {pillar.points.map((point) => (
                                                <li key={point} className="flex items-start gap-3 text-neutral-600 text-sm leading-relaxed">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4A6FA5] mt-1.5 shrink-0" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
