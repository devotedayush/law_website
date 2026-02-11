import React from 'react';
import { BarChart3, ShieldCheck, Users, Activity } from 'lucide-react';

const items = [
    {
        icon: BarChart3,
        title: 'Data-Driven Insights',
        description: 'Market research powered by real-time analytics and proprietary benchmarking tools.',
    },
    {
        icon: ShieldCheck,
        title: 'Compliance Automation',
        description: 'Automated statutory tracking so deadlines and filings are never missed.',
    },
    {
        icon: Users,
        title: 'Client Portal',
        description: 'A single dashboard for document management, project tracking, and communication.',
    },
    {
        icon: Activity,
        title: 'Performance Monitoring',
        description: 'Continuous KPI tracking that ties consulting outcomes to measurable business impact.',
    },
];

const TechInnovation = () => {
    return (
        <section className="bg-[#C5D5E8] p-6 md:p-12 lg:p-20 flex items-center justify-center">
            <div className="max-w-7xl w-full">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    <div className="lg:w-1/6 pt-2">
                        <span className="uppercase tracking-widest text-xs font-bold text-neutral-800/60 block mb-2">
                            Technology
                        </span>
                        <span className="uppercase tracking-widest text-xs font-bold text-neutral-800/60 block">
                            & Innovation
                        </span>
                    </div>
                    <div className="lg:w-5/6">
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.1] mb-6">
                            Built for the Modern Era
                        </h2>
                        <p className="text-neutral-700 text-base md:text-lg leading-relaxed max-w-2xl mb-12">
                            We leverage technology to deliver faster, more accurate, and more transparent consulting — because great advice should be backed by great systems.
                        </p>
                        <div className="flex overflow-x-auto pb-4 pl-6 -mr-6 md:mr-0 md:pl-0 md:grid md:grid-cols-2 gap-6 scrollbar-hide snap-x snap-mandatory">
                            {items.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={item.title}
                                        className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 md:p-8 min-w-[220px] max-w-[260px] shrink-0 snap-start md:min-w-0 md:max-w-none md:shrink"
                                    >
                                        <div className="w-11 h-11 rounded-xl bg-white/40 flex items-center justify-center text-[#4A6FA5] mb-5">
                                            <Icon strokeWidth={1.5} size={22} />
                                        </div>
                                        <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-neutral-700 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
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

export default TechInnovation;
