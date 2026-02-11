import React from 'react';
import { ArrowRight } from 'lucide-react';

const AttorneyCard = ({ name, role, image }: { name: string, role: string, image: string }) => (
    <div className="group relative w-full h-[400px] rounded-xl overflow-hidden cursor-pointer bg-neutral-200">
        <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

        <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -rotate-45">
            <ArrowRight size={24} />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="border-t border-white/40 pt-4 flex justify-between items-end gap-4">
                <h3 className="text-xl font-semibold leading-tight w-1/2">
                    {name}
                </h3>
                <span className="text-xs font-light text-neutral-200 text-right w-1/2">
                    {role}
                </span>
            </div>
        </div>
    </div>
);

const Attorneys = () => {
    const attorneys = [
        {
            name: "Shauryanker Kaushik",
            role: "Founder & Head - Legal & Regulatory Compliance",
            image: "/images/shauryanker_kaushik.png"
        },
        {
            name: "Ankur Kaushik",
            role: "Head - Human Capital Management",
            image: "/images/ankur_kaushik.png"
        },
        {
            name: "Anuj Kaushik",
            role: "Head - Tax Advisory",
            image: "/images/anuj_kaushik.png"
        },
        {
            name: "Rajeev Kaushik",
            role: "Head - Market & Product Research",
            image: "/images/rajeev_kaushik.png"
        }
    ];

    return (
        <section className="bg-[#F3F2ED] p-6 md:p-12 lg:p-20 flex items-center justify-center">
            <div className="max-w-7xl w-full">
                <div className="flex flex-col lg:flex-col gap-12 lg:gap-16 items-center">

                    {/* Content */}
                    <div className="w-full text-center">

                        {/* Headline */}
                        <div className="mb-16 max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.2]">
                                <span className="text-neutral-400">Our Experts</span> <span className="text-neutral-800">Are Dedicated To Excellence In Execution, Integrity & Transparency</span>
                            </h2>
                        </div>

                        {/* Attorneys Grid */}
                        <div className="flex overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 scrollbar-hide snap-x">
                            {attorneys.map((attorney, index) => (
                                <div key={index} className="min-w-[280px] md:min-w-full snap-center">
                                    <AttorneyCard
                                        name={attorney.name}
                                        role={attorney.role}
                                        image={attorney.image}
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Attorneys;
