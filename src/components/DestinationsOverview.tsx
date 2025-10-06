import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Clock, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LeadCaptureForm from "./LeadCaptureForm";
import { useUserAccess } from "@/hooks/useUserAccess";
import torontoImg from "@/assets/toronto.jpg";
import washingtonDCImg from "@/assets/washington-dc.jpg";
import newYorkCityImg from "@/assets/new-york-city.jpg";
import bostonImg from "@/assets/boston.jpg";
import gettysburgImg from "@/assets/gettysburg-battlefield.jpg";
import quebecCityImg from "@/assets/quebec-city.jpg";

const destinations = [
  {
    id: "washington-dc",
    title: "Washington DC",
    description: "Lincoln Memorial, Washington Monument, US Capitol, WWII Memorial, MLK Memorial, Jefferson Memorial, Arlington Cemetery",
    activities: 15,
    duration: "10-20 min per activity",
    isUnlocked: true, // Only Lincoln Memorial is free
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
    description: "Freedom Trail, Boston Tea Party Ships, USS Constitution, James Otis Revolutionary Activities",
    activities: 2,
    duration: "10-20 min per activity",
    isUnlocked: false, // Requires authentication
    image: bostonImg
  },
  {
    id: "gettysburg",
    title: "Gettysburg",
    description: "Civil War battlefield, General Daniel Sickles story, Peach Orchard, Cemetery Ridge",
    activities: 2,
    duration: "10-20 min per activity",
    isUnlocked: false, // Requires authentication
    image: gettysburgImg
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
    description: "Place Royale, Samuel de Champlain settlement, birthplace of French America",
    activities: 2,
    duration: "10-20 min per activity",
    isUnlocked: false, // Requires authentication
    image: quebecCityImg
  },
  {
    id: "toronto",
    title: "Toronto",
    description: "CN Tower engineering marvel, telecommunications history, environmental stewardship",
    activities: 2,
    duration: "10-20 min per activity",
    isUnlocked: false, // Requires authentication
    image: torontoImg
  }
];

const DestinationsOverview = () => {
  const navigate = useNavigate();
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<string>("");
  const { hasAccess, grantAccess } = useUserAccess();

  const handleDestinationClick = (destination: typeof destinations[0]) => {
    if (hasAccess || destination.isUnlocked) {
      if (destination.id === "washington-dc") {
        navigate("/washington-dc");
      } else if (destination.id === "gettysburg") {
        navigate("/gettysburg");
      } else if (destination.id === "boston") {
        navigate("/boston");
      } else if (destination.id === "quebec") {
        navigate("/quebec");
      } else if (destination.id === "toronto") {
        navigate("/toronto");
      }
    } else {
      setSelectedDestination(destination.title);
      setShowLeadForm(true);
    }
  };

  const handleLeadSubmit = async (data: { firstName: string; lastName: string; email: string; schoolGroup: string; zipCode: string; phoneNumber: string; hasOrganizedTrip: string }) => {
    console.log("Lead captured:", data);
    setShowLeadForm(false);
    
    // Grant access using the email
    await grantAccess(data.email);
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
            Each activity takes 10-20 minutes, and with multiple activities per destination, 
            total experience ranges from 1-3 hours depending on how many you choose.
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
                    onClick={() => handleDestinationClick(destination)}
                    variant={hasAccess || destination.isUnlocked ? "default" : "hero"}
                    className={hasAccess || destination.isUnlocked ? "w-full" : "w-full bg-yellow-500 hover:bg-yellow-600 text-black"}
                  >
                    {hasAccess || destination.isUnlocked ? "Explore Activities" : (destination.activities > 0 ? "Unlock Activities" : "Coming Soon")}
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