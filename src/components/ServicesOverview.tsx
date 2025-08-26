import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Landmark, Microscope, Building, Palette, Settings, Clock } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      id: "historical",
      icon: Landmark,
      title: "Historical Tours",
      description: "Explore monuments, memorials, and historic sites that tell America's story.",
      features: ["Lincoln Memorial", "Washington Monument", "Vietnam Memorial", "Capitol Hill"],
    },
    {
      id: "science",
      icon: Microscope,
      title: "Science & Museums",
      description: "Hands-on learning at world-class museums and research institutions.",
      features: ["Smithsonian Museums", "National Zoo", "Air & Space Museum", "Natural History"],
    },
    {
      id: "government",
      icon: Building,
      title: "Government Tours",
      description: "See democracy in action with exclusive access to government buildings.",
      features: ["White House Tours", "Capitol Building", "Supreme Court", "Embassy Row"],
    },
    {
      id: "cultural",
      icon: Palette,
      title: "Cultural Activities",
      description: "Experience the arts, culture, and diverse communities of DC.",
      features: ["Kennedy Center", "National Gallery", "Cultural Festivals", "Neighborhood Tours"],
    },
    {
      id: "custom",
      icon: Settings,
      title: "Custom Programs",
      description: "Tailored itineraries designed for your specific curriculum needs.",
      features: ["Grade-Level Specific", "Subject Integration", "Duration Flexible", "Budget Friendly"],
    },
    {
      id: "logistics",
      icon: Clock,
      title: "Full Planning Support",
      description: "Complete trip coordination from transportation to accommodations.",
      features: ["Transportation", "Lodging", "Meal Planning", "Emergency Support"],
    },
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Educational Tour Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive educational experiences designed to bring classroom learning to life 
            through immersive tours and hands-on activities in Washington DC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;