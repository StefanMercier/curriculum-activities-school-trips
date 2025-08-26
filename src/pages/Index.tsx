import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import VietnamMemorialActivity from "@/components/VietnamMemorialActivity";
import LincolnMemorialActivity from "@/components/LincolnMemorialActivity";
import KoreanWarMemorialActivity from "@/components/KoreanWarMemorialActivity";
import ContactSection from "@/components/ContactSection";
import ActivityGate from "@/components/ActivityGate";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ServicesOverview />
        <LincolnMemorialActivity />
        <ActivityGate>
          <VietnamMemorialActivity />
          <KoreanWarMemorialActivity />
        </ActivityGate>
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
