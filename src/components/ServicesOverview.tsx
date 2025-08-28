
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Microscope, Settings, Clock } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      id: "vietnam",
      image: "http://staging2.globaleducationaltours.com/wp-content/uploads/2025/07/IMG_5353-scaled.jpg",
      title: "Vietnam Veterans Memorial",
      description: "Interactive presentation exploring how design helps heal wounds from America's most divisive war.",
      features: ["4 Student Roles", "Printable Scripts", "Historical Context", "Interactive Q&A"],
    },
    {
      id: "lincoln",
      image: "http://staging2.globaleducationaltours.com/wp-content/uploads/2025/04/lincoln-memorial-washington-dc-abraham-lincoln-patriotic-landmark-brown-memory-stockpack-pixabay.jpg",
      title: "Lincoln Memorial",
      description: "Theatrical performance combining history with the memorial's architectural significance.",
      features: ["Role-Playing Activity", "Historical Perspectives", "Architecture Focus", "15-Minute Format"],
    },
    {
      id: "korean",
      image: "http://staging2.globaleducationaltours.com/wp-content/uploads/2025/04/united-states-capitol-building-at-sunset-washington-dc-usa-stockpack-adobe-stock.jpg",
      title: "Korean War Memorial",
      description: "Explore 'The Forgotten War' through memorial statues and etched remembrances.",
      features: ["Memorial Design Focus", "Statue Analysis", "War Context", "Group Activities"],
    },
    {
      id: "fdr",
      image: "http://staging2.globaleducationaltours.com/wp-content/uploads/2025/08/DSC_1185.jpg",
      title: "FDR Memorial",
      description: "Interactive exploration of the four-term president's legacy through memorial design.",
      features: ["Four Presidential Terms", "Disability Representation", "New Deal Programs", "Waterfall Symbolism"],
    },
    {
      id: "coming-soon",
      icon: Clock,
      title: "More Activities Coming",
      description: "Additional interactive presentations for other DC monuments and museums.",
      features: ["Washington Monument", "Jefferson Memorial", "Supreme Court", "Capitol Building"],
    },
    {
      id: "resources",
      icon: Microscope,
      title: "Teacher Resources",
      description: "Downloadable materials, preparation guides, and educational objectives.",
      features: ["Lesson Plans", "Assessment Rubrics", "Extension Activities", "Curriculum Alignment"],
    },
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Interactive Curriculum Activities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Engaging educational activities designed to prepare students for their destination visit, 
            whether it's Washington, DC; New York City; Boston; and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md overflow-hidden"
              >
                <div className="relative">
                  {service.image ? (
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 bg-primary/10 flex items-center justify-center">
                      {IconComponent && <IconComponent className="h-16 w-16 text-primary" />}
                    </div>
                  )}
                </div>
                <CardHeader className="text-center pb-4">
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
                    View Activity
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Access All Activities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
