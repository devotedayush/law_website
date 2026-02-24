import React from 'react';
import { Globe, TrendingUp, Cpu } from 'lucide-react';

const visionItems = [
    {
        icon: Globe,
        title: 'Global Expansion Support',
        description: 'Cross-border compliance and market-entry strategies for companies going international.',
    },
    {
        icon: TrendingUp,
        title: 'Scalable Frameworks',
        description: 'Consulting models that grow with you — from seed stage to enterprise scale.',
    },
    {
        icon: Cpu,
        title: 'AI-Augmented Advisory',
        description: 'Integrating intelligent tools into compliance monitoring, research, and risk assessment.',
    },
];

const FutureVision = () => {
    return (
        <>
            {/* Part A — Vision Items (beige) */}
            <section className="bg-[#F3F2ED] p-6 md:p-12 lg:p-20 flex items-center justify-center">
                <div className="max-w-7xl w-full">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                        <div className="lg:w-1/6 pt-2">
                            <span className="uppercase tracking-widest text-xs font-bold text-neutral-500 block mb-2">
                                Future
                            </span>
                            <span className="uppercase tracking-widest text-xs font-bold text-neutral-500 block">
                                Vision
                            </span>
                        </div>
                        <div className="lg:w-5/6">
                            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-800 leading-[1.1] mb-12">
                                Future-Ready Consulting
                            </h2>
                            <div className="space-y-8">
                                {visionItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={item.title} className="flex items-start gap-5">
                                            <div className="w-11 h-11 rounded-xl bg-[#C5D5E8]/40 flex items-center justify-center text-[#4A6FA5] shrink-0">
                                                <Icon strokeWidth={1.5} size={22} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg md:text-xl font-semibold text-neutral-900 mb-1">
                                                    {item.title}
                                                </h3>
                                                <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Part B — CTA Band (dark) */}
            <section className="bg-[#4A6FA5] text-white p-6 md:p-12 lg:p-20 flex items-center justify-center">
                <div className="max-w-3xl w-full text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-tight">
                        Ready to Transform<br />Your Business?
                    </h2>
                    <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                        Let&apos;s build a strategy that protects what you&apos;ve built and accelerates where you&apos;re headed.
                    </p>
                    <a
                        href="https://wa.me/918800203969"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-neutral-900 px-8 py-4 rounded text-sm font-medium hover:bg-[#C5D5E8] transition-colors duration-200"
                    >
                        Talk to a Consultant
                    </a>
                </div>
            </section>
        </>
    );
};

export default FutureVision;
