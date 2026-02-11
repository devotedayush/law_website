import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import AboutUs from "@/components/about/AboutUs";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import Methodology from "@/components/about/Methodology";
import TechInnovation from "@/components/about/TechInnovation";
import ValuesCommitment from "@/components/about/ValuesCommitment";
import FutureVision from "@/components/about/FutureVision";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <AboutHero />
        <AboutUs />
        <WhyChooseUs />
        <Methodology />
        <TechInnovation />
        <ValuesCommitment />
        <FutureVision />
      </div>
      <Footer />
    </main>
  );
}
