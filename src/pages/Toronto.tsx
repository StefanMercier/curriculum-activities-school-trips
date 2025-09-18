import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, BookOpen } from "lucide-react";
import cnTowerImage from "@/assets/cn-tower.jpg";

const Toronto = () => {
  const activities = [
    {
      title: "CN Tower",
      description: "Explore Toronto's iconic engineering marvel and telecommunications hub",
      image: cnTowerImage,
      duration: "45 minutes",
      participants: "4-6 students",
      href: "/activities/cn-tower.html"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Toronto Activities
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover Canada's largest city through engaging educational activities that explore engineering marvels, 
            cultural diversity, and modern Canadian identity.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Ontario, Canada</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Population: 2.9 million</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Multicultural Hub</span>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Educational Activities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Interactive presentations designed to engage students with Toronto's unique blend of 
              engineering achievements, environmental stewardship, and cultural significance.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{activity.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {activity.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{activity.participants}</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full"
                    onClick={() => window.open(activity.href, '_blank')}
                  >
                    View Activity
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            Plan your educational trip to Toronto with Global Educational Tours
          </p>
          <Button variant="outline" asChild>
            <a href="https://globaleducationaltours.com/" target="_blank" rel="noopener noreferrer">
              Learn More About Our Tours
            </a>
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Toronto;