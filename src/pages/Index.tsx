import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import VietnamMemorialActivity from "@/components/VietnamMemorialActivity";
import LincolnMemorialActivity from "@/components/LincolnMemorialActivity";
import KoreanWarMemorialActivity from "@/components/KoreanWarMemorialActivity";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ServicesOverview />
        <VietnamMemorialActivity />
        <LincolnMemorialActivity />
        <KoreanWarMemorialActivity />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
