import Navbar from '@/components/Navbar';
import SolutionsHero from '@/components/solutions/SolutionsHero';
import SolutionDetail from '@/components/solutions/SolutionDetail';
import SolutionsCTA from '@/components/solutions/SolutionsCTA';
import Footer from '@/components/Footer';
import { solutions } from '@/components/solutions/solutionsData';

export default function SolutionsPage() {
    return (
        <main>
            <Navbar />
            <div className="pt-20">
                <SolutionsHero />
                {solutions.map((solution, index) => (
                    <SolutionDetail key={solution.id} solution={solution} index={index} />
                ))}
                <SolutionsCTA />
            </div>
            <Footer />
        </main>
    );
}
