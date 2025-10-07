import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users, Clock, MapPin, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { useUserAccess } from "@/hooks/useUserAccess";
import danielSicklesImg from "@/assets/daniel-sickles.jpg";
import battleOfGettysburgImg from "@/assets/battle-of-gettysburg.jpg";
import jennieWadeImg from "@/assets/jennie-wade.jpg";

const gettysburgActivities = [
  {
    id: "daniel-sickles",
    title: "General Daniel Sickles",
    description: "The scandalous and heroic tale of the Union general who made controversial decisions at Gettysburg, murdered a man in Washington D.C., and donated his amputated leg to a museum.",
    duration: "45 minutes",
    participants: "25-30 students",
    difficulty: "Intermediate",
    image: danielSicklesImg,
    isUnlocked: false // Requires authentication
  },
  {
    id: "battle-of-gettysburg",
    title: "Battle of Gettysburg",
    description: "Explore the decisive three-day engagement that marked the turning point of the American Civil War through strategic analysis, timeline events, and interactive battlefield decision-making.",
    duration: "60 minutes",
    participants: "25-35 students",
    difficulty: "Advanced",
    image: battleOfGettysburgImg,
    isUnlocked: false // Requires authentication
  },
  {
    id: "jennie-wade",
    title: "Jennie Wade House",
    description: "The tragic story of the only civilian killed during the Battle of Gettysburg—Mary Virginia 'Jennie' Wade, a 20-year-old woman baking bread for Union soldiers when struck by a stray bullet.",
    duration: "45 minutes",
    participants: "25-30 students",
    difficulty: "Intermediate",
    image: jennieWadeImg,
    isUnlocked: false // Requires authentication
  }
];

const Gettysburg = () => {
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<string>("");
  const { hasAccess, grantAccess } = useUserAccess();

  const handleActivityClick = (activity: typeof gettysburgActivities[0]) => {
    // Check access before launching activity - authenticated users bypass individual locks
    if (hasAccess) {
      window.open(`/activities/${activity.id}.html`, '_blank');
    } else {
      setSelectedActivity(activity.title);
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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="bg-gradient-to-r from-primary/20 to-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Destinations
            </Link>
            
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4 text-foreground">
                Gettysburg Activities
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore the pivotal Civil War battlefield through interactive educational activities. 
                Discover the stories of courage, sacrifice, and the turning point of American history.
              </p>
              <div className="flex items-center justify-center gap-6 mt-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>Gettysburg, Pennsylvania</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>{gettysburgActivities.length} Interactive Activities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gettysburgActivities.map((activity) => (
            <Card key={activity.id} className="relative overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
              {!hasAccess && !activity.isUnlocked && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    Premium
                  </div>
                </div>
              )}
              
              <div 
                className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
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
                <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{activity.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{activity.participants}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Difficulty: {activity.difficulty}</span>
                  </div>
                </div>
                
                <Button 
                  onClick={() => handleActivityClick(activity)}
                  variant={hasAccess ? "default" : "hero"}
                  className={hasAccess ? "w-full" : "w-full bg-yellow-500 hover:bg-yellow-600 text-black"}
                >
                  {hasAccess ? "Start Activity" : "Unlock Activity"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {showLeadForm && (
        <LeadCaptureForm
          activityTitle={selectedActivity}
          onClose={() => setShowLeadForm(false)}
          onSubmit={handleLeadSubmit}
        />
      )}
    </div>
  );
};

export default Gettysburg;