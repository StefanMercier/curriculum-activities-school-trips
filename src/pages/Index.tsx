import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import DestinationsOverview from "@/components/DestinationsOverview";
import SampleActivity from "@/components/SampleActivity";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ServicesOverview />
        <SampleActivity />
        <section id="destinations">
          <DestinationsOverview />
        </section>
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
