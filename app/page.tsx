import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TeamGrid from "@/components/TeamGrid";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Attorneys from "@/components/Attorneys";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TeamGrid />
      <Mission />
      <Services />
      <Testimonials />
      <Attorneys />
      <Footer />
    </main>
  );
}
