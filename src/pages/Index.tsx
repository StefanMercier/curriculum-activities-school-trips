import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import DestinationsOverview from "@/components/DestinationsOverview";
import LincolnMemorialActivity from "@/components/LincolnMemorialActivity";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ServicesOverview />
        <DestinationsOverview />
        <LincolnMemorialActivity />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
