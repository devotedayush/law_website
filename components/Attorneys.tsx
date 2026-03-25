import React from 'react';

const AttorneyCard = ({ name, role, image }: { name: string; role: string; image: string }) => (
    <div className="group relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1">
        <div className="aspect-[3/4] overflow-hidden bg-neutral-200">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
            />
        </div>
        <div className="flex min-h-[5.5rem] flex-col justify-start p-5">
            <h3 className="text-base font-semibold text-neutral-900 leading-tight mb-1">
                {name}
            </h3>
            <p className="text-xs text-neutral-500 leading-snug">
                {role}
            </p>
        </div>
    </div>
);

const Attorneys = () => {
    const attorneys = [
        {
            name: "Shauryanker",
            role: "Founder & Head - Legal & Regulatory Compliance",
            image: "/images/shauryanker_kaushik.png",
        },
        {
            name: "Tapsi Anand",
            role: "Co-Founder & Head - HR & Marketing",
            image: "/images/Tapsi Anand.jpeg",
        },
        {
            name: "Ankur",
            role: "Head - Human Capital Management",
            image: "/images/ankur_kaushik.png",
        },
        {
            name: "Anuj",
            role: "Head - Tax Advisory",
            image: "/images/anuj_kaushik.jpeg",
        },
        {
            name: "Rajeev",
            role: "Head - Market & Product Research",
            image: "/images/rajeev_kaushik.png",
        },
        {
            name: "Navdeep Singh",
            role: "Litigation Advisor & Counsel - Civil Law, Commercial Law, IBC, Company Law, Arbitration, Consumer Protection",
            image: "/images/Navdeep Singh.png",
        },
        {
            name: "Richa Pachori",
            role: "Counsel - Civil, Criminal & Corporate including Commercial Contracts",
            image: "/images/Richa Pachori.png",
        },
    ];

    // First row: 3 cards
    const topRow = attorneys.slice(0, 3);
    // Second row: remaining 4 cards
    const bottomRow = attorneys.slice(3);

    return (
        <section className="bg-[#F3F2ED] p-6 md:p-12 lg:p-20 flex items-center justify-center">
            <div className="max-w-7xl w-full">
                {/* Headline */}
                <div className="mb-16 max-w-4xl mx-auto text-center">
                    <span className="uppercase tracking-widest text-xs font-bold text-neutral-500 block mb-6">
                        Our Team
                    </span>
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.2]">
                        <span className="text-neutral-400">Our Experts</span>{' '}
                        <span className="text-neutral-800">
                            Are Dedicated To Excellence In Execution, Integrity & Transparency
                        </span>
                    </h2>
                </div>

                {/* Top Row — 3 cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 max-w-5xl mx-auto">
                    {topRow.map((attorney, index) => (
                        <AttorneyCard
                            key={index}
                            name={attorney.name}
                            role={attorney.role}
                            image={attorney.image}
                        />
                    ))}
                </div>

                {/* Bottom Row — 4 cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {bottomRow.map((attorney, index) => (
                        <AttorneyCard
                            key={index + 3}
                            name={attorney.name}
                            role={attorney.role}
                            image={attorney.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Attorneys;
