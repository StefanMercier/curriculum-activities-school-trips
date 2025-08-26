import { Button } from "@/components/ui/button";
import heroImage from "@/assets/dc-hero.jpg";
import { MapPin, Users, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/60" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Educational Tours in
            <span className="block text-accent"> Washington DC</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Enriching curriculum-based experiences for student groups. 
            Explore history, science, and government in the nation's capital.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Plan Your Trip
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary"
            >
              View Programs
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="bg-accent/20 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Student Groups</h3>
              <p className="text-white/80">Tailored experiences for all grade levels and group sizes</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-accent/20 p-4 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Curriculum Aligned</h3>
              <p className="text-white/80">Activities designed to enhance classroom learning</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-accent/20 p-4 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">DC Expertise</h3>
              <p className="text-white/80">Local guides with deep knowledge of the capital</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;