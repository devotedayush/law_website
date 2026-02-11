'use client';

import React, { useEffect, useRef } from 'react';

const sections = [
    { id: 'legal', label: 'Legal & Regulatory' },
    { id: 'tax', label: 'Tax Advisory' },
    { id: 'research', label: 'Market Research' },
    { id: 'hcm', label: 'Human Capital' },
];

const ServicesNav = ({
    activeId,
    onSelect,
}: {
    activeId: string;
    onSelect: (id: string) => void;
}) => {
    const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

    /* Auto-scroll the active tab into view on mobile */
    useEffect(() => {
        const btn = buttonRefs.current[activeId];
        btn?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    }, [activeId]);

    return (
        <div className="sticky top-0 z-40 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-neutral-200/80">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <nav className="flex overflow-x-auto scrollbar-hide -mx-2">
                    {sections.map(({ id, label }) => (
                        <button
                            key={id}
                            ref={(el) => { buttonRefs.current[id] = el; }}
                            onClick={() => onSelect(id)}
                            className={`px-4 py-3.5 text-sm font-medium whitespace-nowrap transition-colors duration-200 border-b-2 shrink-0 cursor-pointer ${
                                activeId === id
                                    ? 'text-[#4A6FA5] border-[#4A6FA5]'
                                    : 'text-neutral-400 border-transparent hover:text-neutral-700'
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default ServicesNav;
