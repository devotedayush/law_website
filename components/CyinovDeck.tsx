import React from 'react';

const DeckCard = ({ number, title, description }: { number: string, title: string, description: string }) => (
    <div className="bg-white border border-neutral-200 p-8 rounded-lg min-w-[300px] md:min-w-[350px] flex-shrink-0 flex flex-col justify-between h-[300px] snap-center">
        <div>
            <span className="text-4xl font-light text-neutral-300 mb-4 block">{number}</span>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3 font-sans">
                {title}
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed font-sans">
                {description}
            </p>
        </div>
    </div>
);

const CyinovDeck = () => {
    const items = [
        {
            title: "Brand Fortress",
            description: "We don't just file forms; we build moats around your business. From trademark registration to objection handling, we ensure your name, logo, and slogan become untouchable assets."
        },
        {
            title: "Fashion Law",
            description: "Specialized vertical for designers and retail brands. We protect your sketches, patterns, and collections from knock-offs using Design Act registrations and aggressive copyright strategies."
        },
        {
            title: "Creator Economy",
            description: "For agencies and influencers. We audit brand collaboration contracts, ensure ASCI compliance, and protect your digital content rights so you truly own what you create."
        },
        {
            title: "Market Intelligence",
            description: "Data before decisions. We provide deep-dive market research reports and competitor benchmarking so you know exactly where to strike before launching a new product."
        },
        {
            title: "Corporate Tax",
            description: "Moving beyond \"filing returns.\" We design tax structures that minimize liability and maximize efficiency, ensuring you keep more of what you earn while staying 100% compliant."
        },
        {
            title: "Startup Launchpad",
            description: "From \"Idea\" to \"Incorporation.\" We handle entity formation (Pvt. Ltd., LLP), founder agreements, and equity splitting—setting the foundation right so it doesn't crack later."
        },
        {
            title: "HR & Talent",
            description: "People are your engine. We draft employment contracts, NDAs, and ESOP pools that retain top talent and protect company secrets from walking out the door."
        },
        {
            title: "Regulatory Health",
            description: "A proactive audit of your business. We scan your operations for legal and statutory gaps (Labour Laws, GDPR, Companies Act) and fix them before the notice arrives."
        },
        {
            title: "Contract Lifecycle",
            description: "We draft, vet, and negotiate your high-stakes deals—vendor agreements, licensing deals, and franchise contracts—ensuring there are no trapdoors in the fine print."
        },
        {
            title: "Litigation Strategy",
            description: "When peace talks fail. As IPR specialists, we provide strategic counsel on infringement suits, cease & desist notices, and settlement negotiations to resolve conflicts swiftly."
        }
    ];

    return (
        <section className="bg-[#FAF9F6] p-6 md:p-12 lg:p-20 border-t border-neutral-200">
            <div className="max-w-7xl w-full mx-auto">
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">
                        THE CYINOV DECK
                    </h2>
                </div>
                
                <div className="flex overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 gap-6 scrollbar-hide snap-x">
                    {items.map((item, index) => (
                        <DeckCard
                            key={index}
                            number={`${index + 1}.`}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CyinovDeck;
