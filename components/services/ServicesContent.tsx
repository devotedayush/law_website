'use client';

import React, { useState, useRef, useCallback } from 'react';
import ServicesNav from './ServicesNav';
import ServiceSection from './ServiceSection';
import { legalServices, taxServices, researchServices, hcmServices } from './servicesData';

const categories = [
    { data: legalServices, bgClass: 'bg-[#F3F2ED]' },
    { data: taxServices, bgClass: 'bg-[#FAF9F6]' },
    { data: researchServices, bgClass: 'bg-[#C5D5E8]' },
    { data: hcmServices, bgClass: 'bg-[#F3F2ED]' },
];

const ServicesContent = () => {
    const [activeId, setActiveId] = useState('legal');
    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleSelect = useCallback((id: string) => {
        setActiveId(id);
        wrapperRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, []);

    const active = categories.find((c) => c.data.id === activeId)!;

    return (
        <div ref={wrapperRef} className="relative">
            <ServicesNav activeId={activeId} onSelect={handleSelect} />
            <ServiceSection
                key={active.data.id}
                category={active.data}
                bgClass={active.bgClass}
            />
        </div>
    );
};

export default ServicesContent;
