import React from 'react';

const Mission = () => {
    return (
        <section className="relative w-full h-[600px] bg-neutral-900 text-white overflow-hidden flex items-center">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0">
                <img
                    src="/images/missionbuilding.jpeg"
                    alt="Mission Building"
                    className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-neutral-500/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-800/80 to-transparent" />
            </div>

            <div className="relative z-10 p-6 md:p-12 lg:p-20 w-full max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    <div className="lg:w-1/6 pt-2">
                        <span className="uppercase tracking-widest text-xs font-bold text-neutral-200 block">
                            Our Mission
                        </span>
                    </div>
                    <div className="lg:w-5/6">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-8 leading-tight">
                            Simplified Solutions, Amplified Success
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-100 max-w-2xl leading-relaxed font-light">
                            To revolutionize business consulting by providing integrated, technology-driven solutions that enable organizations to thrive in a rapidly evolving business landscape while maintaining the highest standards of compliance and operational excellence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
