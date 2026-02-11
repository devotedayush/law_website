import React from 'react';

const SolutionsCTA = () => {
    return (
        <section className="bg-[#4A6FA5] text-white p-6 md:p-12 lg:p-20 flex items-center justify-center">
            <div className="max-w-3xl w-full text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-tight">
                    Need a Custom<br />Solution?
                </h2>
                <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                    Every business is unique. Tell us about your challenges and we&apos;ll craft a tailored combination of our practice areas to address your specific needs.
                </p>
                <a
                    href="/contact"
                    className="inline-block bg-white text-neutral-900 px-8 py-4 rounded text-sm font-medium hover:bg-[#C5D5E8] transition-colors duration-200"
                >
                    Talk to a Consultant
                </a>
            </div>
        </section>
    );
};

export default SolutionsCTA;
