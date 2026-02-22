import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Image from "next/image";
import CyinovDeck from "@/components/CyinovDeck";
import ClientMarquee from "@/components/ClientMarquee";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
          {/* Mobile image */}
          <Image
            src="/images/groupofpeople mobileview.jpeg"
            alt="Group of people"
            fill
            className="object-cover md:hidden"
            priority
          />
          {/* Desktop image */}
          <Image
            src="/images/group of people.jpeg"
            alt="Group of people"
            fill
            className="object-cover object-left hidden md:block"
            priority
          />
        </div>
      </div>
      <Services />
      <Mission />
      <CyinovDeck />
      <Testimonials />
      <ClientMarquee />
      <FAQ />
      <Footer />
    </main>
  );
}
