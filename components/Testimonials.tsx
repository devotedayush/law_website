import React from 'react';

const TestimonialCard = ({ quote, author, role }: { quote: string; author: string; role: string }) => (
    <div className="bg-[#FAF9F6] border-l-4 border-neutral-400 p-8 h-full flex flex-col justify-between">
        <p className="text-neutral-800 text-base leading-relaxed mb-8 font-serif">
            {quote}
        </p>
        <div>
            <p className="font-semibold text-neutral-900 text-sm uppercase tracking-wide">- {author}</p>
            <p className="text-neutral-600 text-xs uppercase tracking-wide ml-3">{role}</p>
        </div>
    </div>
);

const Testimonials = () => {
    const testimonials = [
        {
            quote: "I have been associated with Cyinov Consulting for several years and have consistently found the team to be exceptionally dedicated and enthusiastic professionals. They have advised me on drafting and reviewing Terms & Conditions, Privacy Policies, Non-Disclosure Agreements, and various other documents related to my IT projects. I wish them every success and would gladly recommend Cyinov Consulting for legal services in the areas of Cyber Law and Intellectual Property Rights.",
            author: "Puneet Hasija",
            role: "Cloud Software Architect",
        },
        {
            quote: "Cyinov Consulting has been instrumental in assisting us with real estate matters, particularly in navigating complex issues under the Real Estate (Regulation and Development) Act (RERA). The team\u2019s strong understanding of real estate law and RERA compliances made a tangible difference, and we highly recommend Cyinov Consulting for real estate and RERA-related legal services.",
            author: "Ankur, Director",
            role: "MNC Infra Capitals",
        },
        {
            quote: "Cyinov Consulting has been a reliable legal partner, assisting us effectively with vendor agreements and intellectual property rights. Their advice is clear, decisive, and client-focused, making complex legal issues easy to navigate. We highly recommend Cyinov Consulting for their professionalism and expertise.",
            author: "Nitin Bhardwaj, Co-Founder",
            role: "Radiohead Brands",
        },
    ];

    return (
        <section className="bg-[#C5D5E8] p-6 md:p-12 lg:p-20 flex items-center justify-center">
            <div className="max-w-7xl w-full">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    <div className="lg:w-1/6 pt-2">
                        <span className="uppercase tracking-widest text-xs font-bold text-neutral-800/60 block mb-2">
                            Client
                        </span>
                        <span className="uppercase tracking-widest text-xs font-bold text-neutral-800/60 block">
                            Testimonials
                        </span>
                    </div>
                    <div className="lg:w-5/6">
                        <div className="mb-4">
                            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.1] font-serif">
                                Testimonials
                            </h2>
                        </div>
                        <p className="text-neutral-700 text-base mb-12 font-serif">what our clients say about us.......</p>
                        <div className="flex overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 gap-6 scrollbar-hide snap-x">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="min-w-[300px] md:min-w-0 snap-center">
                                    <TestimonialCard
                                        quote={testimonial.quote}
                                        author={testimonial.author}
                                        role={testimonial.role}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
