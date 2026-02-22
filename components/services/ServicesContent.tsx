'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ServicesNav from './ServicesNav';
import ServiceSection from './ServiceSection';
import { legalServices, taxServices, researchServices, hcmServices } from './servicesData';

const categories = [
    { data: legalServices, bgClass: 'bg-[#F3F2ED]' },
    { data: taxServices, bgClass: 'bg-[#FAF9F6]' },
    { data: researchServices, bgClass: 'bg-[#FAF9F6]' },
    { data: hcmServices, bgClass: 'bg-[#F3F2ED]' },
];

const validIds = categories.map((c) => c.data.id);

const ServicesContent = () => {
    const searchParams = useSearchParams();
    const initialId = searchParams.get('s');
    const [activeId, setActiveId] = useState(
        initialId && validIds.includes(initialId) ? initialId : 'legal'
    );
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
