import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
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
                                Privacy Policy
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
                                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">1. Introduction</h2>
                                <p className="text-neutral-600 leading-relaxed mb-4">
                                    At Cyinov, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                                </p>
                                <p className="text-neutral-600 leading-relaxed">
                                    This privacy policy aims to give you information on how Cyinov collects and processes your personal data through your use of this website, including any data you may provide through this website when you sign up to our newsletter, purchase a product or service, or take part in a survey.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">2. The Data We Collect About You</h2>
                                <p className="text-neutral-600 leading-relaxed mb-4">
                                    Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).
                                </p>
                                <p className="text-neutral-600 leading-relaxed mb-4">
                                    We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                                </p>
                                <ul className="space-y-3 text-neutral-600">
                                    <li className="pl-4 border-l-2 border-[#C5D5E8]">
                                        <strong className="text-neutral-800">Identity Data</strong> includes first name, last name, username or similar identifier, title.
                                    </li>
                                    <li className="pl-4 border-l-2 border-[#C5D5E8]">
                                        <strong className="text-neutral-800">Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.
                                    </li>
                                    <li className="pl-4 border-l-2 border-[#C5D5E8]">
                                        <strong className="text-neutral-800">Financial Data</strong> includes bank account and payment card details.
                                    </li>
                                    <li className="pl-4 border-l-2 border-[#C5D5E8]">
                                        <strong className="text-neutral-800">Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.
                                    </li>
                                    <li className="pl-4 border-l-2 border-[#C5D5E8]">
                                        <strong className="text-neutral-800">Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">3. How We Use Your Personal Data</h2>
                                <p className="text-neutral-600 leading-relaxed mb-4">
                                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                                </p>
                                <ul className="space-y-3 text-neutral-600">
                                    <li className="pl-4 border-l-2 border-[#C5D5E8]">
                                        Where we need to perform the contract we are about to enter into or have entered into with you.
                                    </li>
                                    <li className="pl-4 border-l-2 border-[#C5D5E8]">
                                        Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.
                                    </li>
                                    <li className="pl-4 border-l-2 border-[#C5D5E8]">
                                        Where we need to comply with a legal obligation.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">4. Data Security</h2>
                                <p className="text-neutral-600 leading-relaxed mb-4">
                                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                                </p>
                                <p className="text-neutral-600 leading-relaxed">
                                    We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">5. Contact Us</h2>
                                <p className="text-neutral-600 leading-relaxed">
                                    If you have any questions about this privacy policy or our privacy practices, please contact us at{' '}
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
