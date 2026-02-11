import Navbar from '@/components/Navbar';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesContent from '@/components/services/ServicesContent';
import ServicesCTA from '@/components/services/ServicesCTA';
import Footer from '@/components/Footer';

export default function ServicesPage() {
    return (
        <main>
            <Navbar />
            <div className="pt-20">
                <ServicesHero />
                <ServicesContent />
                <ServicesCTA />
            </div>
            <Footer />
        </main>
    );
}
