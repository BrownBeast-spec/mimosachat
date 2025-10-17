import Header from "@/components/Header";
import MobileShowcase from "@/components/MobileShowcase";
import Footer from "@/components/Footer";

const Mobile = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <MobileShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Mobile;
