import React from 'react';

const icons: Record<string, React.ReactNode> = {
    "Brand Fortress": (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    "Fashion Law": (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46 16 2 12 5.5 8 2l-4.38 1.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>
    ),
    "Creator Economy": (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
    ),
    "Market Intelligence": (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
    ),
    "Corporate Tax": (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    ),
    "Startup Launchpad": (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
    ),
    "HR & Talent": (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    "Regulatory Health": (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
    ),
    "Contract Lifecycle": (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    ),
    "Litigation Strategy": (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    ),
};

const DeckCard = ({ number, title, description, icon, slug }: { number: string, title: string, description: string, icon: React.ReactNode, slug: string }) => (
    <div className="group relative bg-[#C5D5E8] rounded-2xl w-[260px] md:w-[280px] shrink-0 snap-center transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        <div className="p-6">
            <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-white/40 flex items-center justify-center text-[#4A6FA5] group-hover:text-[#3B5D8A] group-hover:bg-white/60 transition-all duration-300">
                    {icon}
                </div>
                <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-neutral-500/60">{number}</span>
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
            <a href={`/solutions#${slug}`} className="text-[0.7rem] font-medium text-[#4A6FA5] group-hover:text-[#3B5D8A] transition-colors duration-300">
                Learn more &rarr;
            </a>
        </div>
    </div>
);

const CyinovDeck = () => {
    const items = [
        {
            title: "Brand Fortress",
            slug: "brand-fortress",
            description: "We don't just file forms; we build moats around your business. From trademark registration to objection handling, we ensure your name, logo, and slogan become untouchable assets."
        },
        {
            title: "Fashion Law",
            slug: "fashion-law",
            description: "Specialized vertical for designers and retail brands. We protect your sketches, patterns, and collections from knock-offs using Design Act registrations and aggressive copyright strategies."
        },
        {
            title: "Creator Economy",
            slug: "creator-economy",
            description: "For agencies and influencers. We audit brand collaboration contracts, ensure ASCI compliance, and protect your digital content rights so you truly own what you create."
        },
        {
            title: "Market Intelligence",
            slug: "market-intelligence",
            description: "Data before decisions. We provide deep-dive market research reports and competitor benchmarking so you know exactly where to strike before launching a new product."
        },
        {
            title: "Corporate Tax",
            slug: "corporate-tax",
            description: "Moving beyond \"filing returns.\" We design tax structures that minimize liability and maximize efficiency, ensuring you keep more of what you earn while staying 100% compliant."
        },
        {
            title: "Startup Launchpad",
            slug: "startup-launchpad",
            description: "From \"Idea\" to \"Incorporation.\" We handle entity formation (Pvt. Ltd., LLP), founder agreements, and equity splitting—setting the foundation right so it doesn't crack later."
        },
        {
            title: "HR & Talent",
            slug: "hr-talent",
            description: "People are your engine. We draft employment contracts, NDAs, and ESOP pools that retain top talent and protect company secrets from walking out the door."
        },
        {
            title: "Regulatory Health",
            slug: "regulatory-health",
            description: "A proactive audit of your business. We scan your operations for legal and statutory gaps (Labour Laws, GDPR, Companies Act) and fix them before the notice arrives."
        },
        {
            title: "Contract Lifecycle",
            slug: "contract-lifecycle",
            description: "We draft, vet, and negotiate your high-stakes deals—vendor agreements, licensing deals, and franchise contracts—ensuring there are no trapdoors in the fine print."
        },
        {
            title: "Litigation Strategy",
            slug: "litigation-strategy",
            description: "When peace talks fail. As IPR specialists, we provide strategic counsel on infringement suits, cease & desist notices, and settlement negotiations to resolve conflicts swiftly."
        }
    ];

    return (
        <section className="bg-[#FAF9F6] p-6 md:p-12 lg:p-20 flex items-center justify-center border-t border-neutral-200">
            <div className="max-w-7xl w-full">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    <div className="lg:w-1/6 pt-2">
                        <span className="uppercase tracking-widest text-xs font-bold text-neutral-800/60 block mb-2">
                            Our
                        </span>
                        <span className="uppercase tracking-widest text-xs font-bold text-neutral-800/60 block">
                            Services
                        </span>
                    </div>
                    <div className="lg:w-5/6">
                        <div className="mb-16">
                            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.1]">
                                The Cyinov Deck
                            </h2>
                        </div>
                        <div className="flex overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 gap-6 scrollbar-hide snap-x">
                            {items.map((item, index) => (
                                <DeckCard
                                    key={index}
                                    number={`${index + 1}.`}
                                    title={item.title}
                                    description={item.description}
                                    icon={icons[item.title]}
                                    slug={item.slug}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CyinovDeck;
