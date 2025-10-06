import { useState } from "react";
import { ArrowLeft, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import quebecHeroImg from "@/assets/quebec-city.jpg";
import placeRoyaleImg from "@/assets/place-royale-quebec.jpg";
import rueParloirImg from "@/assets/rue-du-parloir.jpg";
import { useNavigate } from "react-router-dom";
import { useUserAccess } from "@/hooks/useUserAccess";

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
  },
  {
    id: "rue-du-parloir",
    title: "Rue du Parloir - Architectural Time Capsule",
    description: "Discover how to identify building ages through architectural clues, learn about fire safety in early Quebec, and explore the Ursuline Convent's legacy. (English Version)",
    image: rueParloirImg,
    duration: "15-25 minutes",
    students: "All grades",
    objectives: [
      "Learn to identify architectural features that indicate building age",
      "Understand historical fire safety challenges and solutions",
      "Appreciate the significance of early educational institutions",
      "Recognize urban development patterns in historic cities",
      "Develop skills in historical observation and analysis"
    ]
  }
];

const Quebec = () => {
  const navigate = useNavigate();
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<string>("");
  const { hasAccess, grantAccess, loading } = useUserAccess();

  const handleActivityClick = (activityId: string) => {
    // Check access before launching activity
    if (hasAccess) {
      window.open(`/activities/${activityId}.html`, '_blank');
    } else {
      setSelectedActivity(activityId);
      setShowLeadForm(true);
    }
  };

  const handleLeadSubmit = async (data: { firstName: string; lastName: string; email: string; schoolGroup: string; zipCode: string; phoneNumber: string; hasOrganizedTrip: string }) => {
    console.log("Lead captured:", data);
    setShowLeadForm(false);
    
    // Grant access using the email
    await grantAccess(data.email);
    
    // Launch the activity after granting access
    if (selectedActivity) {
      window.open(`/activities/${selectedActivity}.html`, '_blank');
    }
  };

  const handleBackToDestinations = () => {
    navigate("/");
  };

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

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
                    className={hasAccess ? "w-full" : "w-full bg-yellow-500 hover:bg-yellow-600 text-black"}
                    variant={hasAccess ? "default" : "hero"}
                    onClick={() => handleActivityClick(activity.id)}
                  >
                    {hasAccess ? "Launch Activity" : "Unlock Activity"}
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
          activityTitle={`Quebec City: ${selectedActivity}`}
          onClose={() => setShowLeadForm(false)}
          onSubmit={handleLeadSubmit}
        />
      )}
    </div>
  );
};

export default Quebec;