import { useState } from "react";
import { ArrowLeft, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import quebecHeroImg from "@/assets/quebec-city.jpg";
import placeRoyaleImg from "@/assets/place-royale-quebec.jpg";
import { useNavigate } from "react-router-dom";

const quebecActivities = [
  {
    id: "place-royale-quebec",
    title: "Place Royale & Samuel de Champlain",
    description: "Explore the birthplace of French America and the first permanent French settlement in North America at Place Royale in Quebec City.",
    image: placeRoyaleImg,
    duration: "10-20 minutes",
    students: "All grades",
    objectives: [
      "Understand Place Royale's significance as the birthplace of French America",
      "Analyze the challenges faced by early French settlers",
      "Recognize the multiple functions of public spaces in colonial society",
      "Identify architectural features of New France buildings"
    ]
  }
];

const Quebec = () => {
  const navigate = useNavigate();
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<string>("");

  const handleActivityClick = (activityId: string) => {
    window.open(`/activities/${activityId}.html`, '_blank');
  };

  const handleBackToDestinations = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${quebecHeroImg})` }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <Button 
              variant="ghost" 
              onClick={handleBackToDestinations}
              className="text-white hover:text-white hover:bg-white/20 mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Destinations
            </Button>
            <h1 className="text-5xl font-bold mb-4">Quebec City Educational Activities</h1>
            <p className="text-xl mb-6">
              Discover the birthplace of French America through interactive educational experiences
              that bring New France's colonial history to life for your students.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Quebec City, Quebec</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>10-20 min per activity</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>All grade levels</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">New France Activities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Immerse your students in the founding of French America and the challenges 
              of establishing European civilization in the New World.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {quebecActivities.map((activity) => (
              <Card key={activity.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${activity.image})` }}
                >
                  <div className="h-full bg-black/30" />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{activity.title}</CardTitle>
                  <CardDescription className="text-base">
                    {activity.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{activity.students}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Learning Objectives:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {activity.objectives.map((objective, index) => (
                        <li key={index}>• {objective}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    onClick={() => handleActivityClick(activity.id)}
                  >
                    Launch Activity
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      {showLeadForm && (
        <LeadCaptureForm
          activityTitle={selectedActivity}
          onClose={() => setShowLeadForm(false)}
          onSubmit={() => setShowLeadForm(false)}
        />
      )}
    </div>
  );
};

export default Quebec;