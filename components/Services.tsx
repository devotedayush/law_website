import React from 'react';
import { Shield, BarChart3, Scale, Users } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <div className="group flex flex-col items-start p-8 border border-neutral-300 rounded-lg hover:border-neutral-400 transition-colors duration-300 h-full bg-transparent">
        <div className="mb-6 text-neutral-800">
            <Icon strokeWidth={1.5} size={48} />
        </div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-4 font-sans">
            {title}
        </h3>
        <p className="text-neutral-600 text-sm leading-relaxed font-sans">
            {description}
        </p>
    </div>
);

const Services = () => {
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
                            <button className="bg-[#2C2C2C] text-white px-6 py-3 rounded text-sm font-medium hover:bg-neutral-800 transition-colors duration-200">
                                Schedule Meet
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {services.map((service, index) => (
                                <ServiceCard
                                    key={index}
                                    title={service.title}
                                    description={service.description}
                                    icon={service.icon}
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
