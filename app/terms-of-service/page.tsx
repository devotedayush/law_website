import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TermsOfServicePage() {
    return (
        <main>
            <Navbar />
            <div className="pt-20">
                <section className="bg-[#FAF9F6] p-6 md:p-12 lg:p-20 flex items-center justify-center">
                    <div className="max-w-4xl w-full">
                        <div className="mb-4">
                            <span className="uppercase tracking-widest text-xs font-bold text-neutral-400 block mb-6">
                                Legal
                            </span>
                            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 leading-tight mb-4">
                                Terms of Service
                            </h1>
                            <p className="text-sm text-neutral-500 mb-6">Last Updated: April 19, 2025</p>
                            <Link href="/" className="text-sm text-[#4A6FA5] hover:text-[#3B5D8A] transition-colors">
                                &larr; Back to Home
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="bg-white p-6 md:p-12 lg:p-20 flex items-center justify-center">
                    <div className="max-w-4xl w-full prose prose-neutral">
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">1. Agreement to Terms</h2>
                                <p className="text-neutral-600 leading-relaxed mb-4">
                                    These Terms of Service constitute a legally binding agreement made between you and Cyinov concerning your access to and use of our website and services.
                                </p>
                                <p className="text-neutral-600 leading-relaxed">
                                    You agree that by accessing the website, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the website and you must discontinue use immediately.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">2. Intellectual Property Rights</h2>
                                <p className="text-neutral-600 leading-relaxed mb-4">
                                    Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the website and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
                                </p>
                                <p className="text-neutral-600 leading-relaxed">
                                    Provided that you are eligible to use the website, you are granted a limited license to access and use the website and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">3. User Representations</h2>
                                <p className="text-neutral-600 leading-relaxed mb-4">
                                    By using the website, you represent and warrant that:
                                </p>
                                <ul className="space-y-3 text-neutral-600">
                                    <li className="pl-4 border-l-2 border-[#C5D5E8]">
                                        All registration information you submit will be true, accurate, current, and complete.
                                    </li>
                                    <li className="pl-4 border-l-2 border-[#C5D5E8]">
                                        You will maintain the accuracy of such information and promptly update such registration information as necessary.
                                    </li>
                                    <li className="pl-4 border-l-2 border-[#C5D5E8]">
                                        You have the legal capacity and you agree to comply with these Terms of Service.
                                    </li>
                                    <li className="pl-4 border-l-2 border-[#C5D5E8]">
                                        You are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the website.
                                    </li>
                                    <li className="pl-4 border-l-2 border-[#C5D5E8]">
                                        You will not access the website through automated or non-human means, whether through a bot, script, or otherwise.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">4. Prohibited Activities</h2>
                                <p className="text-neutral-600 leading-relaxed mb-4">
                                    You may not access or use the website for any purpose other than that for which we make the website available. The website may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                                </p>
                                <p className="text-neutral-600 leading-relaxed mb-4">
                                    As a user of the website, you agree not to:
                                </p>
                                <ul className="space-y-3 text-neutral-600">
                                    <li className="pl-4 border-l-2 border-[#C5D5E8]">
                                        Systematically retrieve data or other content from the website to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.
                                    </li>
                                    <li className="pl-4 border-l-2 border-[#C5D5E8]">
                                        Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.
                                    </li>
                                    <li className="pl-4 border-l-2 border-[#C5D5E8]">
                                        Circumvent, disable, or otherwise interfere with security-related features of the website.
                                    </li>
                                    <li className="pl-4 border-l-2 border-[#C5D5E8]">
                                        Use any information obtained from the website in order to harass, abuse, or harm another person.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">5. Contact Us</h2>
                                <p className="text-neutral-600 leading-relaxed">
                                    In order to resolve a complaint regarding the website or to receive further information regarding use of the website, please contact us at{' '}
                                    <a href="mailto:info@cyinov.com" className="text-[#4A6FA5] hover:text-[#3B5D8A] transition-colors">
                                        info@cyinov.com
                                    </a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
