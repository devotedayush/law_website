import React from 'react';
import { Shield, BarChart3, Scale, Users } from 'lucide-react';

const services = [
    {
        title: "Legal Compliance",
        description: "From IPR & trademarks to regulatory health checks, we build brand fortresses and keep your operations audit-ready.",
        icon: Shield,
        href: "/services?s=legal",
    },
    {
        title: "Tax Advisory",
        description: "Proactive tax structuring that minimizes liability and maximizes efficiency, ensuring you stay 100% compliant.",
        icon: Scale,
        href: "/services?s=tax",
    },
    {
        title: "Market Research",
        description: "Deep-dive market research, competitor benchmarking, and data-driven insights so you know exactly where to strike.",
        icon: BarChart3,
        href: "/services?s=research",
    },
    {
        title: "Human Capital",
        description: "Employment contracts, HR policies, and talent strategies that protect the company and empower the people.",
        icon: Users,
        href: "/services?s=hcm",
    }
];

const PillarCard = ({ index, title, description, icon: Icon, href }: {
    index: number;
    title: string;
    description: string;
    icon: any;
    href: string;
}) => (
    <div className="group relative bg-[#C5D5E8] rounded-2xl w-[260px] md:w-[280px] shrink-0 snap-center transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        <div className="p-6">
            <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-white/40 flex items-center justify-center text-[#4A6FA5] group-hover:text-[#3B5D8A] group-hover:bg-white/60 transition-all duration-300">
                    <Icon strokeWidth={1.5} size={22} />
                </div>
                <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-neutral-500/60">{`${index + 1}.`}</span>
            </div>
            <h3 className="text-base font-semibold text-neutral-900 mb-2 font-sans leading-snug">
                {title}
            </h3>
            <p className="text-neutral-700 text-[0.78rem] leading-relaxed font-sans line-clamp-3">
                {description}
            </p>
        </div>
        <div className="h-px mx-6 bg-neutral-400/30 group-hover:bg-neutral-400/50 transition-colors duration-300" />
        <div className="px-6 py-4">
            <a href={href} className="text-[0.7rem] font-medium text-[#4A6FA5] group-hover:text-[#3B5D8A] transition-colors duration-300">
                Learn more &rarr;
            </a>
        </div>
    </div>
);

const Services = () => {
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
                            <a href="https://wa.me/918800203969" target="_blank" rel="noopener noreferrer" className="bg-[#4A6FA5] text-white px-6 py-3 rounded text-sm font-medium hover:bg-[#3B5D8A] transition-colors duration-200">
                                Schedule Meet
                            </a>
                        </div>
                        <div className="flex overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 gap-6 scrollbar-hide snap-x">
                            {services.map((service, index) => (
                                <PillarCard
                                    key={index}
                                    index={index}
                                    title={service.title}
                                    description={service.description}
                                    icon={service.icon}
                                    href={service.href}
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
