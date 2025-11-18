import Hero from "@/components/Hero";
import About from "@/components/About";
import Brands from "@/components/Brands";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-pattern">
      <Hero />
      <Brands />
      <About />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
