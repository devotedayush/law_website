export interface SolutionItem {
    id: string;
    number: string;
    title: string;
    icon: string;
    headline: string;
    description: string;
    deliverables: string[];
}

export const solutions: SolutionItem[] = [
    {
        id: "contract-lifecycle",
        number: "01",
        title: "Contract Lifecycle",
        icon: "Contract Lifecycle",
        headline: "No trapdoors in the fine print — ever.",
        description:
            "Contracts are the backbone of every business relationship, yet most companies treat them as formalities rather than strategic instruments. Our Contract Lifecycle practice handles the full spectrum — from initial drafting and negotiation to renewal management and dispute resolution. We work on vendor agreements, licensing deals, franchise contracts, SaaS subscriptions, joint ventures, and every other commercial arrangement that keeps your business moving. Every clause is reviewed through the lens of enforceability under Indian law, commercial reasonableness, and downside protection. We don't just draft contracts — we engineer agreements that protect your interests at every stage.",
        deliverables: [
            "Commercial contract drafting — vendor, licensing, distribution, franchise",
            "Contract review and redlining with risk commentary",
            "SaaS, API, and technology licensing agreements",
            "Joint venture and collaboration agreement structuring",
            "Contract dispute resolution and breach remediation advisory",
        ],
    },
    {
        id: "litigation-strategy",
        number: "02",
        title: "Litigation Strategy",
        icon: "Litigation Strategy",
        headline: "When peace talks fail — resolve conflicts swiftly and strategically.",
        description:
            "Litigation is not a failure of strategy — sometimes it's the strategy itself. As IPR specialists, we bring deep expertise to infringement suits, passing-off actions, design piracy claims, and domain name disputes. But our approach is never litigation-first. We begin with a strategic assessment: is this a case best won in court, through mediation, or via a well-crafted settlement? When we do litigate, we do it with precision — combining injunctive relief strategies with commercial negotiation to resolve disputes in the fastest, most cost-effective manner. Our team has represented clients before the Delhi High Court, IPAB, and various District Courts across India.",
        deliverables: [
            "Trademark and copyright infringement suits with interim injunction strategy",
            "Cease & desist notices and pre-litigation negotiation",
            "Design piracy and trade dress passing-off actions",
            "Domain name dispute resolution (INDRP / UDRP proceedings)",
            "Settlement negotiation and mediation for commercial disputes",
        ],
    },
    {
        id: "brand-fortress",
        number: "03",
        title: "Brand Fortress",
        icon: "Brand Fortress",
        headline: "We don't just file forms — we build moats around your business.",
        description:
            "Your brand is your most valuable intangible asset, and in India's fast-moving market, it's under constant threat. At Cyinov, we go beyond routine trademark filings to construct a comprehensive IP defence system around your name, logo, tagline, and trade dress. We handle the entire lifecycle — from clearance searches and applications to opposition proceedings and renewals — ensuring your identity remains exclusively yours. Whether you're a bootstrapped D2C brand or a legacy enterprise expanding into new categories, our Brand Fortress practice gives you the legal armour to grow without looking over your shoulder.",
        deliverables: [
            "Comprehensive trademark search and clearance reports across all 45 classes",
            "End-to-end trademark registration (wordmarks, device marks, sound marks)",
            "Opposition and rectification proceedings before the Trademark Registry",
            "Brand licensing, co-branding, and franchise IP structuring",
            "Cease & desist enforcement and domain name dispute resolution",
        ],
    },
    {
        id: "fashion-law",
        number: "04",
        title: "Fashion Law",
        icon: "Fashion Law",
        headline: "Specialized protection for designers and retail brands.",
        description:
            "India's fashion and lifestyle industry is booming — and so is the knock-off economy. Our Fashion Law vertical is purpose-built for designers, apparel brands, and retail businesses that need to protect their creative output from imitation. We leverage the Design Act, Copyright Act, and trademark laws in combination to build layered protection for your sketches, patterns, collections, and brand identity. From runway to retail shelf, we ensure your originality stays original. We also advise on influencer collaborations, retail licensing, and supply-chain IP risks — the legal blind spots most fashion businesses discover only after the damage is done.",
        deliverables: [
            "Design registration under the Designs Act, 2000 for patterns, textiles, and products",
            "Copyright protection for original sketches, lookbooks, and creative assets",
            "Anti-counterfeiting strategy including customs recordal and market surveillance",
            "Retail and franchise licensing agreements with IP safeguards",
            "Influencer and brand collaboration contracts with usage-rights clarity",
        ],
    },
    {
        id: "creator-economy",
        number: "05",
        title: "Creator Economy",
        icon: "Creator Economy",
        headline: "Legal infrastructure for influencers and the agencies behind them.",
        description:
            "The creator economy runs on content, but the contracts behind it are often an afterthought. We work with influencer management agencies, individual creators, and brands to audit and structure collaboration agreements that protect everyone's interests. From ensuring ASCI compliance on sponsored content to securing digital content rights and revenue-share clarity, we bring legal rigour to an industry that moves at the speed of social media. Whether you're a creator scaling to seven figures or an agency managing fifty talents, our practice ensures the business side of content creation is as polished as the content itself.",
        deliverables: [
            "Brand collaboration and sponsorship agreement drafting and review",
            "ASCI (Advertising Standards Council of India) compliance audits",
            "Content licensing, syndication, and digital rights management",
            "Talent management and exclusivity agreements for agencies",
            "Revenue-share structuring and payment dispute resolution",
        ],
    },
    {
        id: "market-intelligence",
        number: "06",
        title: "Market Intelligence",
        icon: "Market Intelligence",
        headline: "Data before decisions — know exactly where to strike.",
        description:
            "Launching a product, entering a new geography, or evaluating an acquisition without market intelligence is like navigating without a map. Our Market Intelligence practice delivers deep-dive research reports and competitor benchmarking that give you a decisive information advantage. We combine primary research, regulatory landscape analysis, and industry benchmarking to produce actionable insights tailored to your specific business context. Whether you need a pre-launch feasibility study, a competitive positioning analysis, or a regulatory risk assessment for a new vertical, our research team delivers clarity before you commit capital.",
        deliverables: [
            "Industry and sector-specific market research reports",
            "Competitor benchmarking and positioning analysis",
            "Pre-launch feasibility studies with regulatory risk mapping",
            "Consumer sentiment and demand analysis for new product categories",
            "Custom research briefs for investor presentations and board strategy sessions",
        ],
    },
    {
        id: "corporate-tax",
        number: "07",
        title: "Corporate Tax",
        icon: "Corporate Tax",
        headline: "Moving beyond filing returns — designing structures that save.",
        description:
            "Tax compliance is table stakes. What separates growing businesses from stagnant ones is proactive tax structuring that minimises liability while remaining fully compliant with Indian tax law. Our Corporate Tax practice goes beyond annual filings to design efficient structures across direct tax, indirect tax (GST), transfer pricing, and international taxation. We work with startups optimising their Section 80-IAC benefits, mid-market companies restructuring for GST efficiency, and enterprises navigating cross-border transfer pricing regulations. The goal is simple: you keep more of what you earn, and every rupee saved is a rupee reinvested.",
        deliverables: [
            "Corporate tax planning and structure optimisation (Direct Tax & GST)",
            "Transfer pricing documentation and compliance for cross-border transactions",
            "Startup tax benefits advisory (Section 80-IAC, Angel Tax exemptions)",
            "Tax due diligence for mergers, acquisitions, and fundraising rounds",
            "Assessment and appellate representation before Income Tax authorities",
        ],
    },
    {
        id: "startup-launchpad",
        number: "08",
        title: "Startup Launchpad",
        icon: "Startup Launchpad",
        headline: "From idea to incorporation — setting the foundation right.",
        description:
            "The decisions you make in your first ninety days as a company echo for years. Choosing the wrong entity structure, drafting a vague co-founder agreement, or misallocating equity can create fractures that surface only during fundraising or exits — when the stakes are highest. Our Startup Launchpad practice handles the full incorporation stack: entity selection (Pvt. Ltd., LLP, OPC), founder agreements, equity vesting schedules, ESOP pools, and regulatory registrations. We also guide DPIIT recognition, Startup India benefits, and seed-stage compliance so you can focus on building your product, not untangling paperwork.",
        deliverables: [
            "Entity formation — Private Limited, LLP, OPC, Section 8 Company",
            "Founder and co-founder agreements with vesting and exit clauses",
            "ESOP pool design, grant letters, and trust deed structuring",
            "DPIIT recognition and Startup India benefit applications",
            "Seed-stage compliance setup (PF, ESI, GST, Shops & Establishment)",
        ],
    },
    {
        id: "hr-talent",
        number: "09",
        title: "HR & Talent",
        icon: "HR & Talent",
        headline: "People are your engine — protect it with the right legal framework.",
        description:
            "Your team is your most strategic asset, and the legal architecture around employment can make or break your ability to attract, retain, and protect talent. Our HR & Talent practice drafts employment contracts, non-disclosure agreements, non-compete clauses, and ESOP documentation that are enforceable, fair, and aligned with Indian labour law. We also advise on workplace policies (POSH, leave, remote work), termination protocols, and employee dispute resolution. Whether you're a 10-person startup hiring your first CTO or a 500-person company restructuring your HR policies, we ensure your people framework scales with your ambition.",
        deliverables: [
            "Employment contracts, offer letters, and appointment letters (compliant with state-specific Shops & Establishment Acts)",
            "NDA, non-compete, and IP assignment agreements",
            "POSH (Prevention of Sexual Harassment) policy drafting and ICC constitution",
            "ESOP documentation — scheme rules, grant letters, exercise notices",
            "Termination, severance, and exit process advisory",
        ],
    },
    {
        id: "regulatory-health",
        number: "10",
        title: "Regulatory Health",
        icon: "Regulatory Health",
        headline: "A proactive audit — fix gaps before the notice arrives.",
        description:
            "Most businesses discover compliance gaps only after a government notice lands on their desk. Our Regulatory Health practice takes a proactive approach: we conduct a comprehensive audit of your operations against applicable laws — Labour Laws, Companies Act, FEMA, GDPR/DPDP Act, sector-specific regulations — and produce a prioritised remediation roadmap. Think of it as a legal health check-up for your business. We identify statutory gaps, assess penalty exposure, and implement fixes before regulators come knocking. For businesses operating across multiple states or entering regulated sectors, this practice is not optional — it's essential.",
        deliverables: [
            "360-degree regulatory compliance audit across all applicable statutes",
            "Gap analysis report with risk scoring and remediation priorities",
            "Labour law compliance (PF, ESI, Gratuity, Bonus, Minimum Wages)",
            "Data protection and privacy compliance (DPDP Act / GDPR readiness)",
            "Ongoing compliance calendar and monitoring retainer",
        ],
    },
];
