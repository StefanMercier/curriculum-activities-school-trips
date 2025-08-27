import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Clock, Lock } from "lucide-react";
import LeadCaptureForm from "./LeadCaptureForm";

const destinations = [
  {
    id: "washington-dc",
    title: "Washington DC",
    description: "Lincoln Memorial, Vietnam Memorial, Korean War Memorial, Washington Monument",
    activities: 8,
    duration: "2-3 hours",
    isUnlocked: true,
    image: "/api/placeholder/400/300"
  },
  {
    id: "new-york",
    title: "New York City",
    description: "Statue of Liberty, Ellis Island, 9/11 Memorial, Central Park",
    activities: 6,
    duration: "3-4 hours", 
    isUnlocked: false,
    image: "/api/placeholder/400/300"
  },
  {
    id: "boston",
    title: "Boston",
    description: "Freedom Trail, Boston Tea Party Ships, USS Constitution",
    activities: 5,
    duration: "2-3 hours",
    isUnlocked: false,
    image: "/api/placeholder/400/300"
  },
  {
    id: "williamsburg",
    title: "Williamsburg",
    description: "Colonial Williamsburg, Governor's Palace, Capitol Building",
    activities: 4,
    duration: "2-3 hours",
    isUnlocked: false,
    image: "/api/placeholder/400/300"
  },
  {
    id: "gettysburg",
    title: "Gettysburg",
    description: "Battlefield Tours, Visitor Center, Cemetery Ridge",
    activities: 3,
    duration: "1-2 hours",
    isUnlocked: false,
    image: "/api/placeholder/400/300"
  },
  {
    id: "chicago",
    title: "Chicago", 
    description: "Architecture Tours, Millennium Park, Navy Pier",
    activities: 4,
    duration: "2-3 hours",
    isUnlocked: false,
    image: "/api/placeholder/400/300"
  },
  {
    id: "montreal",
    title: "Montreal",
    description: "Old Montreal, Notre-Dame Basilica, Mount Royal Park",
    activities: 5,
    duration: "2-3 hours",
    isUnlocked: false,
    image: "/api/placeholder/400/300"
  },
  {
    id: "quebec",
    title: "Quebec City",
    description: "Old Quebec, Château Frontenac, Plains of Abraham",
    activities: 4,
    duration: "2-3 hours",
    isUnlocked: false,
    image: "/api/placeholder/400/300"
  }
];

const DestinationsOverview = () => {
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<string>("");

  const handleDestinationClick = (destination: typeof destinations[0]) => {
    if (destination.isUnlocked) {
      // Navigate to destination activities or show activities
      console.log(`Accessing ${destination.title} activities`);
    } else {
      setSelectedDestination(destination.title);
      setShowLeadForm(true);
    }
  };

  const handleLeadSubmit = (data: { firstName: string; lastName: string; email: string; zipCode: string; phoneNumber: string }) => {
    console.log("Lead captured:", data);
    setShowLeadForm(false);
    // In a real app, this would unlock the destination
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Choose Your Destination
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive educational activities for America's most historic destinations. 
            Each location features curriculum-aligned materials and engaging student activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              {!destination.isUnlocked && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    Premium
                  </div>
                </div>
              )}
              
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${destination.image})` }}
              >
                <div className="h-full bg-black/30" />
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-xl">{destination.title}</span>
                  <MapPin className="h-5 w-5 text-primary" />
                </CardTitle>
                <CardDescription className="text-base">
                  {destination.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{destination.activities} Activities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{destination.duration}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full"
                  variant={destination.isUnlocked ? "default" : "outline"}
                  onClick={() => handleDestinationClick(destination)}
                >
                  {destination.isUnlocked ? "Explore Activities" : "Unlock Activities"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sample Activity Section */}
        <div className="mt-20 text-center">
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Try Our Lincoln Memorial Activity - Free Sample
            </h3>
            <p className="text-muted-foreground mb-6">
              Experience our interactive educational approach with this complimentary activity. 
              See how our curriculum engages students with role-playing, historical context, and hands-on learning.
            </p>
            <Button variant="hero" size="lg" className="text-lg px-8">
              Try Free Sample Activity
            </Button>
          </div>
        </div>
      </div>

      {showLeadForm && (
        <LeadCaptureForm
          activityTitle={`${selectedDestination} Activities`}
          onClose={() => setShowLeadForm(false)}
          onSubmit={handleLeadSubmit}
        />
      )}
    </section>
  );
};

export default DestinationsOverview;