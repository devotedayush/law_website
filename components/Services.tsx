'use client';

import React, { useState } from 'react';
import { Shield, BarChart3, Scale, Users } from 'lucide-react';

const services = [
    {
        title: "Legal Compliance",
        description: "From IPR & trademarks to regulatory health checks, we build brand fortresses and keep your operations audit-ready.",
        icon: Shield
    },
    {
        title: "Tax Advisory",
        description: "Proactive tax structuring that minimizes liability and maximizes efficiency, ensuring you stay 100% compliant.",
        icon: Scale
    },
    {
        title: "Market Research",
        description: "Deep-dive market research, competitor benchmarking, and data-driven insights so you know exactly where to strike.",
        icon: BarChart3
    },
    {
        title: "Human Capital",
        description: "Employment contracts, HR policies, and talent strategies that protect the company and empower the people.",
        icon: Users
    }
];

const AccordionItem = ({ index, title, description, icon: Icon, isOpen, onToggle }: {
    index: number;
    title: string;
    description: string;
    icon: any;
    isOpen: boolean;
    onToggle: () => void;
}) => (
    <div className="border-b border-neutral-300 last:border-b-0">
        <button
            onClick={onToggle}
            className="w-full flex items-center gap-5 py-6 md:py-8 text-left cursor-pointer group"
        >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 w-8 shrink-0">
                0{index + 1}
            </span>
            <div className="w-11 h-11 rounded-xl bg-neutral-800 flex items-center justify-center text-neutral-300 group-hover:text-white group-hover:bg-neutral-700 transition-all duration-300 shrink-0">
                <Icon strokeWidth={1.5} size={22} />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-neutral-900 font-sans flex-1">
                {title}
            </h3>
            <div className={`w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-neutral-500 ${isOpen ? 'bg-[#4A6FA5] border-[#4A6FA5]' : ''}`}>
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                >
                    <line x1="7" y1="1" x2="7" y2="13" stroke={isOpen ? 'white' : 'currentColor'} strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="1" y1="7" x2="13" y2="7" stroke={isOpen ? 'white' : 'currentColor'} strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </div>
        </button>
        <div
            className="grid transition-all duration-300 ease-in-out"
            style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
        >
            <div className="overflow-hidden">
                <div className="pl-[3.25rem] md:pl-[3.75rem] pb-8 pr-10">
                    <p className="text-neutral-600 text-sm md:text-base leading-relaxed font-sans max-w-xl">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    </div>
);

const Services = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-[#F3F2ED] p-6 md:p-12 lg:p-20 flex items-center justify-center">
            <div className="max-w-7xl w-full">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    <div className="lg:w-1/6 pt-2">
                        <span className="uppercase tracking-widest text-xs font-bold text-neutral-500 block mb-2">
                            Our
                        </span>
                        <span className="uppercase tracking-widest text-xs font-bold text-neutral-500 block">
                            Service
                        </span>
                    </div>
                    <div className="lg:w-5/6">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-800 leading-[1.1]">
                                The 4-Pillar <br />
                                Shield
                            </h2>
                            <button className="bg-[#2C2C2C] text-white px-6 py-3 rounded text-sm font-medium hover:bg-[#4A6FA5] transition-colors duration-200">
                                Schedule Meet
                            </button>
                        </div>
                        <div className="border-t border-neutral-300">
                            {services.map((service, index) => (
                                <AccordionItem
                                    key={index}
                                    index={index}
                                    title={service.title}
                                    description={service.description}
                                    icon={service.icon}
                                    isOpen={openIndex === index}
                                    onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
