import React from 'react';
import Image from 'next/image';

const ClientMarquee = () => {
    const clients = [
        "/images/client1.png",
        "/images/client2.png",
        "/images/client3.png",
        "/images/client4.png",
        "/images/client5.png",
        "/images/client6.png",
        "/images/client7.png",
        "/images/client8.png",
        "/images/client9.png",
    ];

    return (
        <section className="bg-white py-16 overflow-hidden border-t border-neutral-100">
             <div className="mb-12 text-center">
                    <h2 className="text-2xl font-medium tracking-tight text-neutral-400">
                        TRUSTED BY
                    </h2>
                </div>
            <div className="relative w-full max-w-[100vw]">
                <div className="flex w-max animate-marquee gap-16 items-center">
                    {/* First set of images */}
                    {clients.map((client, index) => (
                        <div key={`client-1-${index}`} className="relative w-[150px] h-[80px] grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                            <Image
                                src={client}
                                alt={`Client ${index + 1}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {clients.map((client, index) => (
                        <div key={`client-2-${index}`} className="relative w-[150px] h-[80px] grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                            <Image
                                src={client}
                                alt={`Client ${index + 1}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientMarquee;
