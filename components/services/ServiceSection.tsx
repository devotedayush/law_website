'use client';

import React, { useState } from 'react';
import {
    Shield, Lock, FileText, Users, Building2, Landmark, Home, Scale,
    BookOpen, Receipt, Wallet, Building, Calculator,
    TrendingUp, FlaskConical, Search, Microscope,
    UserPlus, Clock, Banknote, GraduationCap,
    type LucideIcon,
} from 'lucide-react';
import type { ServiceCategory, ServiceItem } from './servicesData';

const iconMap: Record<string, LucideIcon> = {
    shield: Shield,
    lock: Lock,
    fileText: FileText,
    users: Users,
    building2: Building2,
    landmark: Landmark,
    home: Home,
    scale: Scale,
    bookOpen: BookOpen,
    receipt: Receipt,
    wallet: Wallet,
    building: Building,
    calculator: Calculator,
    trendingUp: TrendingUp,
    flaskConical: FlaskConical,
    search: Search,
    microscope: Microscope,
    userPlus: UserPlus,
    clock: Clock,
    banknote: Banknote,
    graduationCap: GraduationCap,
};

const ItemGrid = ({ items, hasDescriptions }: { items: ServiceItem[]; hasDescriptions: boolean }) => (
    <div
        className={`grid gap-4 ${
            hasDescriptions
                ? 'grid-cols-1 md:grid-cols-2'
                : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
        }`}
    >
        {items.map((item, i) => (
            <div
                key={i}
                className={`flex items-start gap-3 ${
                    hasDescriptions ? 'bg-white/60 rounded-xl p-4' : ''
                }`}
            >
                <span className="w-1.5 h-1.5 rounded-full bg-[#4A6FA5] mt-2 shrink-0" />
                <div>
                    <span className="text-sm font-medium text-neutral-800 block">
                        {item.title}
                    </span>
                    {item.description && (
                        <span className="text-xs text-neutral-500 leading-relaxed block mt-0.5">
                            {item.description}
                        </span>
                    )}
                </div>
            </div>
        ))}
    </div>
);

const ServiceSection = ({
    category,
    bgClass,
}: {
    category: ServiceCategory;
    bgClass: string;
}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id={category.id} className={`${bgClass} p-6 md:p-12 lg:p-20 flex items-center justify-center`}>
            <div className="max-w-7xl w-full">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Left label */}
                    <div className="lg:w-1/6 pt-2">
                        {category.label.map((line, i) => (
                            <span
                                key={i}
                                className="uppercase tracking-widest text-xs font-bold text-neutral-500 block mb-2 last:mb-0"
                            >
                                {line}
                            </span>
                        ))}
                    </div>

                    {/* Right content */}
                    <div className="lg:w-5/6">
                        {/* Title + subtitle */}
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-800 leading-[1.1] mb-6">
                            {category.title}
                        </h2>
                        <p className="text-neutral-600 text-base md:text-lg leading-relaxed max-w-3xl mb-6">
                            {category.subtitle}
                        </p>

                        {/* Optional long description */}
                        {category.description && (
                            <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-3xl mb-10">
                                {category.description}
                            </p>
                        )}

                        {/* Optional section sub-heading */}
                        {category.sectionHeading && (
                            <div className="mb-10">
                                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-800 mb-3">
                                    {category.sectionHeading}
                                </h3>
                                {category.sectionSubtitle && (
                                    <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
                                        {category.sectionSubtitle}
                                    </p>
                                )}
                            </div>
                        )}

                        {/* Accordion */}
                        <div className="border-t border-neutral-300">
                            {category.subServices.map((sub, index) => {
                                const Icon = iconMap[sub.icon] || Shield;
                                const isOpen = openIndex === index;
                                const hasGroups = sub.groups && sub.groups.length > 0;
                                const hasDescriptions = hasGroups
                                    ? sub.groups!.some((g) => g.items.some((item) => item.description))
                                    : sub.items.some((item) => item.description);

                                return (
                                    <div key={index} className="border-b border-neutral-300 last:border-b-0">
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className="w-full flex items-center gap-5 py-6 md:py-8 text-left cursor-pointer group"
                                        >
                                            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4A6FA5] w-8 shrink-0">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <div className="w-11 h-11 rounded-xl bg-[#C5D5E8]/30 flex items-center justify-center text-[#4A6FA5] group-hover:bg-[#C5D5E8]/50 transition-all duration-300 shrink-0">
                                                <Icon strokeWidth={1.5} size={22} />
                                            </div>
                                            <h3 className="text-lg md:text-xl font-semibold text-neutral-900 font-sans flex-1">
                                                {sub.title}
                                            </h3>
                                            <div
                                                className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                                                    isOpen
                                                        ? 'bg-[#4A6FA5] border-[#4A6FA5]'
                                                        : 'border-neutral-300 group-hover:border-neutral-500'
                                                }`}
                                            >
                                                <svg
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 14 14"
                                                    fill="none"
                                                    className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                                                >
                                                    <line x1="7" y1="1" x2="7" y2="13" stroke={isOpen ? 'white' : 'currentColor'} strokeWidth="1.5" strokeLinecap="round" />
                                                    <line x1="1" y1="7" x2="13" y2="7" stroke={isOpen ? 'white' : 'currentColor'} strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </div>
                                        </button>

                                        {/* Expanded content */}
                                        <div
                                            className="grid transition-all duration-300 ease-in-out"
                                            style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="pl-[3.25rem] md:pl-[3.75rem] pb-8 pr-4 md:pr-10">
                                                    <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-6 max-w-xl">
                                                        {sub.description}
                                                    </p>

                                                    {hasGroups ? (
                                                        <div className="space-y-8">
                                                            {sub.groups!.map((group, gi) => {
                                                                const groupHasDesc = group.items.some((item) => item.description);
                                                                return (
                                                                    <div key={gi}>
                                                                        <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4A6FA5] pb-3 border-b border-[#C5D5E8] mb-4">
                                                                            {group.heading}
                                                                        </h4>
                                                                        <ItemGrid items={group.items} hasDescriptions={groupHasDesc} />
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    ) : (
                                                        <ItemGrid items={sub.items} hasDescriptions={hasDescriptions} />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Optional process section */}
                        {category.process && (
                            <div className="mt-16 border-t border-[#C5D5E8] pt-12">
                                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-800 mb-3">
                                    {category.process.heading}
                                </h3>
                                <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-10">
                                    {category.process.subtitle}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                                    {category.process.steps.map((step, i) => (
                                        <div key={i}>
                                            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4A6FA5] block mb-3">
                                                {String(i + 1).padStart(2, '0')}
                                            </span>
                                            <h4 className="text-base font-semibold text-neutral-900 mb-1">
                                                {step.title}
                                            </h4>
                                            {step.description && (
                                                <p className="text-neutral-500 text-sm leading-relaxed">
                                                    {step.description}
                                                </p>
                                            )}
                                            {step.items && (
                                                <ul className="mt-2 space-y-1.5">
                                                    {step.items.map((item, j) => (
                                                        <li key={j} className="flex items-center gap-2 text-neutral-600 text-sm">
                                                            <span className="w-1 h-1 rounded-full bg-[#4A6FA5] shrink-0" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                {category.process.outcome && (
                                    <div className="mt-10 pt-6 border-t border-[#C5D5E8]">
                                        <p className="text-neutral-700 text-sm md:text-base font-medium">
                                            <span className="text-[#4A6FA5] font-semibold">Outcome:</span>{' '}
                                            {category.process.outcome}
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
