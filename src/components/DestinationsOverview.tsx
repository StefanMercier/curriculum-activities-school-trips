import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Clock, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LeadCaptureForm from "./LeadCaptureForm";
import washingtonDCImg from "@/assets/washington-dc.jpg";
import newYorkCityImg from "@/assets/new-york-city.jpg";
import bostonImg from "@/assets/boston.jpg";

const destinations = [
  {
    id: "washington-dc",
    title: "Washington DC",
    description: "Lincoln Memorial, Washington Monument, US Capitol, WWII Memorial, MLK Memorial, Jefferson Memorial, Arlington Cemetery",
    activities: 9,
    duration: "2-3 hours",
    isUnlocked: true,
    image: washingtonDCImg
  },
  {
    id: "new-york",
    title: "New York City",
    description: "Statue of Liberty, Ellis Island, 9/11 Memorial, Central Park",
    activities: 0,
    duration: "Coming Soon",
    isUnlocked: false,
    image: newYorkCityImg
  },
  {
    id: "boston",
    title: "Boston",
    description: "Freedom Trail, Boston Tea Party Ships, USS Constitution",
    activities: 0,
    duration: "Coming Soon",
    isUnlocked: false,
    image: bostonImg
  },
  {
    id: "williamsburg",
    title: "Williamsburg",
    description: "Colonial Williamsburg, Governor's Palace, Capitol Building",
    activities: 0,
    duration: "Coming Soon",
    isUnlocked: false,
    image: "/api/placeholder/400/300"
  },
  {
    id: "gettysburg",
    title: "Gettysburg",
    description: "Battlefield Tours, Visitor Center, Cemetery Ridge",
    activities: 0,
    duration: "Coming Soon",
    isUnlocked: false,
    image: "/api/placeholder/400/300"
  },
  {
    id: "chicago",
    title: "Chicago", 
    description: "Architecture Tours, Millennium Park, Navy Pier",
    activities: 0,
    duration: "Coming Soon",
    isUnlocked: false,
    image: "/api/placeholder/400/300"
  },
  {
    id: "montreal",
    title: "Montreal",
    description: "Old Montreal, Notre-Dame Basilica, Mount Royal Park",
    activities: 0,
    duration: "Coming Soon",
    isUnlocked: false,
    image: "/api/placeholder/400/300"
  },
  {
    id: "quebec",
    title: "Quebec City",
    description: "Old Quebec, Château Frontenac, Plains of Abraham",
    activities: 0,
    duration: "Coming Soon",
    isUnlocked: false,
    image: "/api/placeholder/400/300"
  }
];

const DestinationsOverview = () => {
  const navigate = useNavigate();
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<string>("");

  const handleDestinationClick = (destination: typeof destinations[0]) => {
    if (destination.isUnlocked) {
      if (destination.id === "washington-dc") {
        navigate("/washington-dc");
      }
    } else {
      setSelectedDestination(destination.title);
      setShowLeadForm(true);
    }
  };

  const handleLeadSubmit = (data: { firstName: string; lastName: string; email: string; schoolGroup: string; zipCode: string; phoneNumber: string; hasOrganizedTrip: string }) => {
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
                    variant={destination.isUnlocked ? "default" : "hero"}
                    className={destination.isUnlocked ? "w-full" : "w-full bg-yellow-500 hover:bg-yellow-600 text-black"}
                    onClick={() => handleDestinationClick(destination)}
                  >
                    {destination.isUnlocked ? "Explore Activities" : (destination.activities > 0 ? "Unlock Activities" : "Coming Soon")}
                  </Button>
              </CardContent>
            </Card>
          ))}
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