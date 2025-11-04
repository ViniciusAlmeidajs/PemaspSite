import Hero from "@/components/Hero";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
