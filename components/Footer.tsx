import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => (
    <footer className="bg-black text-white relative overflow-hidden pt-20 pb-10 px-6 md:px-12 lg:px-20 font-sans">
        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-32">
            {/* Left Column */}
            <div className="max-w-md">
                <img src="/images/cyinov-logo.svg" alt="Cyinov" className="h-44 w-auto mb-6 brightness-0 invert" />
                <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                    At <strong className="text-white">Cyinov Consulting</strong>, Empowering businesses with innovative solutions and strategic excellence.
                </p>
                <div className="mt-6 text-neutral-400 text-sm space-y-1">
                    <p className="text-[#4A6FA5]">info@cyinov.com</p>
                    <p>+91-8800203969</p>
                </div>
            </div>

            {/* Right Column - Navigation */}
            <div className="flex flex-col gap-3 text-2xl font-medium text-left md:text-right w-full md:w-auto">
                {[
                    { label: 'Home', href: '/' },
                    { label: 'About', href: '/about' },
                    { label: 'Services', href: '/services' },
                    { label: 'Solutions', href: '/solutions' },
                    { label: 'Our Team', href: '/team' },
                    { label: 'FAQ', href: '/faq' },
                    { label: 'Testimonials', href: '#testimonials' },
                    { label: 'Contact', href: '/contact' },
                ].map((item) => (
                    <a key={item.label} href={item.href} className="hover:text-neutral-300 transition-colors block">
                        {item.label}
                    </a>
                ))}
            </div>
        </div>

        {/* Big Watermark */}
        <div className="absolute bottom-[-5%] left-0 w-full overflow-hidden leading-none select-none pointer-events-none">
            <h1 className="text-[18vw] font-bold text-neutral-800/40 text-center tracking-tighter whitespace-nowrap">
                Cyinov
            </h1>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 max-w-7xl mx-auto border-t border-neutral-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4">
                <div className="flex items-center gap-4 text-xs text-neutral-500">
                    <p>©2025 Cyinov Consulting</p>
                    <span className="hidden md:inline text-neutral-700">|</span>
                    <a href="/privacy-policy" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
                    <span className="hidden md:inline text-neutral-700">|</span>
                    <a href="/terms-of-service" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
                </div>
                <div className="flex gap-6">
                    <a href="https://www.instagram.com/cyinovconsulting" target="_blank" rel="noopener noreferrer">
                        <Instagram size={20} className="text-white hover:text-[#4A6FA5] cursor-pointer transition-colors duration-200" />
                    </a>
                    <a href="https://www.facebook.com/people/Cyinov-Consulting/61574960935041/" target="_blank" rel="noopener noreferrer">
                        <Facebook size={20} className="text-white hover:text-[#4A6FA5] cursor-pointer transition-colors duration-200" />
                    </a>
                    <a href="https://www.linkedin.com/company/cyinovconsulting/" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={20} className="text-white hover:text-[#4A6FA5] cursor-pointer transition-colors duration-200" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
