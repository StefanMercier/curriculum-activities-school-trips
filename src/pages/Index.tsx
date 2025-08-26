import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ServicesOverview />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
