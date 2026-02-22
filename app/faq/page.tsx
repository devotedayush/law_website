import Navbar from '@/components/Navbar';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function FAQPage() {
    return (
        <main>
            <Navbar />
            <div className="pt-20">
                <FAQ />
            </div>
            <Footer />
        </main>
    );
}
