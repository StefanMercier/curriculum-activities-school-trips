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
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Interactive Educational
            <span className="block text-accent"> Destination Curriculum</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Engaging student activities for America's historic destinations. 
            From Washington DC to Boston, interactive presentations and hands-on learning materials.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Browse Destinations
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary"
            >
              Try Free Sample
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="bg-accent/20 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Interactive Scripts</h3>
              <p className="text-white/80">Role-playing activities with printable student scripts</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-accent/20 p-4 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Curriculum Materials</h3>
              <p className="text-white/80">Ready-to-use activities aligned with learning objectives</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-accent/20 p-4 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Multiple Destinations</h3>
              <p className="text-white/80">Activities for DC, NYC, Boston, and more historic locations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;