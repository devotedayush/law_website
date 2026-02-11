import Navbar from "@/components/Navbar";
import Attorneys from "@/components/Attorneys";
import Footer from "@/components/Footer";

export default function TeamPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Attorneys />
      </div>
      <Footer />
    </main>
  );
}
