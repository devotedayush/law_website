'use client';

import React, { useState } from 'react';

type FAQItem = {
    question: string;
    answer: string;
};

type FAQCategory = {
    category: string;
    items: FAQItem[];
};

const faqData: FAQCategory[] = [
    {
        category: "General Questions",
        items: [
            {
                question: "What makes Cyinov Consulting different from other consulting firms?",
                answer: "Our integrated approach sets us apart - we provide comprehensive solutions across legal, tax, market & product research, compliance, and HCM under one roof. This ensures seamless coordination and consistent quality across all business functions while saving you time and resources.",
            },
            {
                question: "Do you work with businesses of all sizes?",
                answer: "Yes, we serve clients ranging from startups to established enterprises. Our solutions are scalable and customized to meet the specific needs and budget of each business, regardless of its size.",
            },
            {
                question: "What industries do you specialize in?",
                answer: "We have expertise across multiple sectors including technology, healthcare, financial services, real estate, and education. Our team has specialized knowledge of industry-specific regulations and requirements.",
            },
        ],
    },
    {
        category: "Legal Consulting",
        items: [
            {
                question: "Can you help with business registration and setup?",
                answer: "Yes, we provide end-to-end support for business registration, including structure selection, documentation, licensing, and regulatory compliance. We also provide litigation and court management support to startups and businesses who are currently engaged in ongoing litigation or are willing to litigate in different judicial forums arising out of disputes such as Civil, Consumer, Corporate, Real Estate etc.",
            },
            {
                question: "Do you handle ongoing legal compliance?",
                answer: "Absolutely. We offer continuous legal support and compliance monitoring to ensure your business stays updated with the latest regulations and requirements.",
            },
        ],
    },
    {
        category: "Tax Advisory",
        items: [
            {
                question: "What tax services do you provide for Indian startups and businesses?",
                answer: "Our services include auditing, compliance with Indian tax regulations and law registrations, planning and structuring.",
            },
            {
                question: "Do you provide any tax services for international businesses and startups?",
                answer: "Our international tax services include cross-border transaction planning, transfer pricing, double taxation agreements, and compliance with international tax regulations.",
            },
            {
                question: "Can you help with tax disputes and audits?",
                answer: "Yes, we provide comprehensive support during tax audits and help resolve disputes with tax authorities, including representation and documentation support.",
            },
        ],
    },
    {
        category: "Market & Product Research",
        items: [
            {
                question: "How long does a typical market or product research project take?",
                answer: "Project timelines vary based on scope and complexity, typically ranging from 2-8 weeks. We'll provide a detailed timeline during initial consultation.",
            },
            {
                question: "Do you provide customized research reports?",
                answer: "Yes, all our research reports are tailored to your specific requirements and include actionable insights relevant to your business objectives.",
            },
        ],
    },
    {
        category: "Regulatory Compliance",
        items: [
            {
                question: "How do you stay updated with changing regulations?",
                answer: "Our team continuously monitors regulatory changes across industries. We have systems in place to immediately assess impact and update our clients about relevant changes.",
            },
            {
                question: "Do you provide compliance training for our team?",
                answer: "Yes, we offer customized compliance training programs for your staff, including workshops, online modules, and documentation guidelines.",
            },
        ],
    },
    {
        category: "Human Capital Management",
        items: [
            {
                question: "Can you help with recruitment?",
                answer: "Yes, we provide end-to-end recruitment services, including job analysis, candidate sourcing, screening, and onboarding support.",
            },
            {
                question: "Do you assist with HR policy development?",
                answer: "We help develop comprehensive HR policies aligned with industry standards and your organizational culture, ensuring legal compliance and best practices.",
            },
        ],
    },
    {
        category: "Engagement and Pricing",
        items: [
            {
                question: "How do you structure your fees?",
                answer: "We offer flexible engagement models including project-based, retainer-based, and hourly consultation options. Specific pricing depends on the scope of services and your requirements.",
            },
            {
                question: "Do you offer packaged services?",
                answer: "Yes, we offer bundled service packages that provide cost-effective solutions for businesses needing multiple services. These can be customized based on your needs.",
            },
        ],
    },
    {
        category: "Implementation and Support",
        items: [
            {
                question: "What kind of ongoing support do you provide?",
                answer: "We provide continuous support through dedicated account managers, regular review meetings, and a 24/7 support system for urgent queries.",
            },
            {
                question: "How do you ensure quality in service delivery?",
                answer: "We maintain strict quality control processes, conduct regular service audits, and actively seek client feedback to continuously improve our services.",
            },
        ],
    },
    {
        category: "Confidentiality and Security",
        items: [
            {
                question: "How do you handle sensitive business information?",
                answer: "We maintain strict confidentiality protocols and use secure systems for handling client information. All our staff sign comprehensive NDAs, and we follow industry-standard data protection practices.",
            },
        ],
    },
    {
        category: "Getting Started",
        items: [
            {
                question: "What is your client onboarding process?",
                answer: "Our onboarding process includes: Initial consultation to understand your needs, proposal submission with detailed scope and timeline, agreement finalization, and a kick-off meeting and project initiation.",
            },
            {
                question: "How quickly can you start working on our project?",
                answer: "After the initial consultation and agreement, we can typically begin work within 1-2 weeks, depending on the service requirements and current workload.",
            },
        ],
    },
];

const AccordionItem = ({ question, answer, isOpen, onToggle }: {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}) => (
    <div className="border-b border-neutral-200 last:border-b-0">
        <button
            onClick={onToggle}
            className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
        >
            <h3 className="text-sm md:text-base font-medium text-neutral-900 font-sans flex-1 pr-4">
                {question}
            </h3>
            <div className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-[#4A6FA5] border-[#4A6FA5]' : 'border-neutral-300 group-hover:border-neutral-500'}`}>
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                >
                    <line x1="6" y1="1" x2="6" y2="11" stroke={isOpen ? 'white' : 'currentColor'} strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="1" y1="6" x2="11" y2="6" stroke={isOpen ? 'white' : 'currentColor'} strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </div>
        </button>
        <div
            className="grid transition-all duration-300 ease-in-out"
            style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
        >
            <div className="overflow-hidden">
                <p className="text-neutral-600 text-sm leading-relaxed font-sans pb-5 pr-12">
                    {answer}
                </p>
            </div>
        </div>
    </div>
);

const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleCategoryChange = (index: number) => {
        setActiveCategory(index);
        setOpenIndex(0);
    };

    return (
        <section className="bg-[#FAF9F6] p-6 md:p-12 lg:p-20 flex items-center justify-center">
            <div className="max-w-7xl w-full">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    <div className="lg:w-1/6 pt-2">
                        <span className="uppercase tracking-widest text-xs font-bold text-neutral-500 block mb-2">
                            Frequently
                        </span>
                        <span className="uppercase tracking-widest text-xs font-bold text-neutral-500 block">
                            Asked
                        </span>
                    </div>
                    <div className="lg:w-5/6">
                        <div className="mb-12">
                            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-800 leading-[1.1]">
                                Questions &<br />Answers
                            </h2>
                        </div>

                        {/* Category Pills */}
                        <div className="flex flex-wrap gap-2 mb-10">
                            {faqData.map((cat, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleCategoryChange(index)}
                                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                                        activeCategory === index
                                            ? 'bg-[#4A6FA5] text-white'
                                            : 'bg-[#F3F2ED] text-neutral-600 hover:bg-[#C5D5E8]/40 hover:text-neutral-800'
                                    }`}
                                >
                                    {cat.category}
                                </button>
                            ))}
                        </div>

                        {/* FAQ Items */}
                        <div className="bg-white rounded-2xl p-6 md:p-8">
                            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#4A6FA5] mb-6">
                                {faqData[activeCategory].category}
                            </h3>
                            <div>
                                {faqData[activeCategory].items.map((item, index) => (
                                    <AccordionItem
                                        key={`${activeCategory}-${index}`}
                                        question={item.question}
                                        answer={item.answer}
                                        isOpen={openIndex === index}
                                        onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
