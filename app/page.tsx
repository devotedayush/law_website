import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Attorneys from "@/components/Attorneys";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
          <Image
            src="/images/group of people.jpeg"
            alt="Group of people"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <Mission />
      <Services />
      <Testimonials />
      <Attorneys />
      <Footer />
    </main>
  );
}
