import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MobileShowcase from "@/components/MobileShowcase";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <MobileShowcase />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
