'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const serviceCategories = [
    { value: '', label: 'Select a service category' },
    { value: 'Legal & Regulatory Compliance', label: 'Legal & Regulatory Compliance' },
    { value: 'Tax Advisory Services', label: 'Tax Advisory Services' },
    { value: 'Market & Product Research', label: 'Market & Product Research' },
    { value: 'Human Capital Management', label: 'Human Capital Management' },
    { value: 'General Inquiry', label: 'General Inquiry' },
];

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const ContactForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [status, setStatus] = useState<FormStatus>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setStatus('success');
                setForm({ name: '', email: '', phone: '', service: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const inputBase =
        'w-full bg-white border border-neutral-300 rounded-lg px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors duration-200 focus:border-[#4A6FA5] focus:ring-1 focus:ring-[#4A6FA5]';

    return (
        <section className="bg-[#F3F2ED] p-6 md:p-12 lg:p-20 flex items-center justify-center">
            <div className="max-w-7xl w-full">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    <div className="lg:w-1/6 pt-2">
                        <span className="uppercase tracking-widest text-xs font-bold text-neutral-500 block mb-2">
                            Send Us
                        </span>
                        <span className="uppercase tracking-widest text-xs font-bold text-neutral-500 block">
                            A Message
                        </span>
                    </div>
                    <div className="lg:w-5/6">
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-800 leading-[1.1] mb-4">
                            Let&apos;s Talk
                        </h2>
                        <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-10 max-w-xl">
                            Fill in the form below and our team will get back to you within 24 hours. Your inquiry will be automatically routed to the right department.
                        </p>

                        {status === 'success' ? (
                            <div className="bg-white rounded-2xl p-10 text-center">
                                <CheckCircle size={48} className="text-[#4A6FA5] mx-auto mb-4" strokeWidth={1.5} />
                                <h3 className="text-2xl font-semibold text-neutral-900 mb-2">Message Sent</h3>
                                <p className="text-neutral-500 text-sm mb-6">
                                    We&apos;ve received your inquiry and will respond within 24 hours.
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="text-[#4A6FA5] text-sm font-medium hover:underline cursor-pointer"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Service category — prominent at top */}
                                <div>
                                    <label htmlFor="service" className="text-xs font-semibold tracking-[0.15em] uppercase text-[#4A6FA5] block mb-2">
                                        Service Category
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={form.service}
                                        onChange={handleChange}
                                        required
                                        className={`${inputBase} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%234A6FA5%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center]`}
                                    >
                                        {serviceCategories.map((cat) => (
                                            <option key={cat.value} value={cat.value} disabled={cat.value === ''}>
                                                {cat.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Name + Email row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="text-xs font-medium text-neutral-500 block mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Your name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            className={inputBase}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="text-xs font-medium text-neutral-500 block mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="you@company.com"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            className={inputBase}
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="text-xs font-medium text-neutral-500 block mb-2">
                                        Phone Number <span className="text-neutral-400">(optional)</span>
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="+91-XXXXXXXXXX"
                                        value={form.phone}
                                        onChange={handleChange}
                                        className={inputBase}
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="text-xs font-medium text-neutral-500 block mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        placeholder="Tell us about your requirements..."
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        className={`${inputBase} resize-none`}
                                    />
                                </div>

                                {/* Error message */}
                                {status === 'error' && (
                                    <div className="flex items-center gap-2 text-red-600 text-sm">
                                        <AlertCircle size={16} />
                                        Something went wrong. Please try again.
                                    </div>
                                )}

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="inline-flex items-center gap-2 bg-[#4A6FA5] text-white px-8 py-3.5 rounded text-sm font-medium hover:bg-[#3B5D8A] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                                >
                                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                    <Send size={16} strokeWidth={1.5} />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
