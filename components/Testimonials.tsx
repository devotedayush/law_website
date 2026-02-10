import React from 'react';

const TestimonialCard = ({ quote, author, role, image }: { quote: string, author: string, role: string, image: string }) => (
    <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-8 rounded-lg h-full flex flex-col justify-between">
        <p className="text-neutral-800 italic text-lg leading-relaxed mb-8 font-sans">
            "{quote}"
        </p>
        <div className="flex items-center gap-4">
            <img
                src={image}
                alt={author}
                className="w-12 h-12 rounded-full object-cover bg-neutral-300"
            />
            <div>
                <h4 className="font-semibold text-neutral-900 text-sm">{author}</h4>
                <p className="text-neutral-700 text-xs">{role}</p>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Cyinov transformed how we handle compliance. Their no-jargon approach made complex trademark filings and tax structuring feel effortless. They didn't just file paperwork — they built a brand fortress around our business.",
            author: "David L. Williams",
            role: "CEO, Williams Technologies",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        },
        {
            quote: "From market research to regulatory audits, Cyinov was our single point of contact for everything. Their team mapped the terrain before we expanded, and their proactive tax advisory saved us from costly mistakes. Truly a one-stop consulting partner.",
            author: "Charles M. Green",
            role: "Founder, Green & Associates",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        }
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
                        <div className="mb-16">
                            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.1]">
                                What Our Clients Are Saying
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard
                                    key={index}
                                    quote={testimonial.quote}
                                    author={testimonial.author}
                                    role={testimonial.role}
                                    image={testimonial.image}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
