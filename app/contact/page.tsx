import React from 'react';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/contact/ContactForm';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactDetails = [
    { icon: Mail, label: 'Email', value: 'info@cyinov.com', href: 'mailto:info@cyinov.com' },
    { icon: Phone, label: 'Phone', value: '+91-8800203969', href: 'tel:+918800203969' },
    { icon: MapPin, label: 'Location', value: 'New Delhi, India' },
];

export default function ContactPage() {
    return (
        <main>
            <Navbar />
            <div className="pt-20">
                {/* Hero */}
                <section className="bg-[#FAF9F6] p-6 md:p-12 lg:p-20 flex items-center justify-center">
                    <div className="max-w-7xl w-full">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                            <div className="lg:w-1/6 pt-2">
                                <span className="uppercase tracking-widest text-xs font-bold text-neutral-400 block mb-2">
                                    Contact
                                </span>
                                <span className="uppercase tracking-widest text-xs font-bold text-neutral-400 block">
                                    Us
                                </span>
                            </div>
                            <div className="lg:w-5/6">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900 mb-8 leading-tight">
                                    Get In Touch
                                </h1>
                                <p className="text-lg md:text-xl text-neutral-500 max-w-2xl leading-relaxed font-light mb-12">
                                    Have a question or ready to get started? Reach out and our team will connect you with the right consultant for your needs.
                                </p>

                                {/* Contact cards */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    {contactDetails.map((item) => {
                                        const Icon = item.icon;
                                        const Wrapper = item.href ? 'a' : 'div';
                                        return (
                                            <Wrapper
                                                key={item.label}
                                                {...(item.href ? { href: item.href } : {})}
                                                className="flex items-start gap-4 group"
                                            >
                                                <div className="w-11 h-11 rounded-xl bg-[#C5D5E8]/30 flex items-center justify-center text-[#4A6FA5] shrink-0">
                                                    <Icon strokeWidth={1.5} size={20} />
                                                </div>
                                                <div>
                                                    <span className="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 block mb-1">
                                                        {item.label}
                                                    </span>
                                                    <span className="text-sm font-medium text-neutral-800 group-hover:text-[#4A6FA5] transition-colors duration-200">
                                                        {item.value}
                                                    </span>
                                                </div>
                                            </Wrapper>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Form */}
                <ContactForm />

                {/* CTA */}
                <section className="bg-[#4A6FA5] text-white p-6 md:p-12 lg:p-20 flex items-center justify-center">
                    <div className="max-w-3xl w-full text-center">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 leading-tight">
                            Prefer a Direct Conversation?
                        </h2>
                        <p className="text-white/70 text-base leading-relaxed mb-8 max-w-xl mx-auto">
                            Schedule a free 30-minute consultation with one of our experts.
                        </p>
                        <a
                            href="tel:+918800203969"
                            className="inline-block bg-white text-neutral-900 px-8 py-4 rounded text-sm font-medium hover:bg-[#C5D5E8] transition-colors duration-200"
                        >
                            Call Us Now
                        </a>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
