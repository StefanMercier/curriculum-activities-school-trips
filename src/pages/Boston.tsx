import { useState } from "react";
import { ArrowLeft, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import bostonHeroImg from "@/assets/boston.jpg";
import jamesOtisImg from "@/assets/james-otis.jpg";
import bostonTeaPartyImg from "@/assets/boston-tea-party.jpg";
import { useNavigate } from "react-router-dom";
import { useUserAccess } from "@/hooks/useUserAccess";

const bostonActivities = [
  {
    id: "james-otis-boston",
    title: "James Otis & Revolutionary Boston",
    description: "Explore the philosophical foundations of the American Revolution through James Otis's speeches and Boston's revolutionary events.",
    image: jamesOtisImg,
    duration: "10-20 minutes",
    students: "All grades",
    objectives: [
      "Understand Boston's role as the center of revolutionary activity",
      "Analyze James Otis's contributions to revolutionary thought",
      "Trace the escalation from protest to revolution",
      "Examine multiple perspectives on key historical events"
    ]
  },
  {
    id: "boston-tea-party",
    title: "Boston Tea Party",
    description: "Discover the defiant act that sparked a revolution - from mercantilism and colonial tensions to the events of December 16, 1773.",
    image: bostonTeaPartyImg,
    duration: "15-25 minutes",
    students: "All grades",
    objectives: [
      "Understand the economic policies that led to colonial unrest",
      "Analyze how protest can influence political change",
      "Connect specific events to larger historical movements",
      "Recognize multiple perspectives on historical events",
      "Appreciate how symbolic actions can have concrete consequences"
    ]
  }
];

const Boston = () => {
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
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${bostonHeroImg})` }}>
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
            <h1 className="text-5xl font-bold mb-4">Boston Educational Activities</h1>
            <p className="text-xl mb-6">
              Discover the birthplace of American independence through interactive educational experiences
              that bring Revolutionary Boston to life for your students.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Boston, Massachusetts</span>
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
            <h2 className="text-4xl font-bold mb-4">Revolutionary Boston Activities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Immerse your students in the events and ideas that sparked the American Revolution.
              Each activity features interactive elements, student roles, and curriculum-aligned content.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {bostonActivities.map((activity) => (
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
          activityTitle={`Boston: ${selectedActivity}`}
          onClose={() => setShowLeadForm(false)}
          onSubmit={handleLeadSubmit}
        />
      )}
    </div>
  );
};

export default Boston;