import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import LeadCaptureForm from "@/components/LeadCaptureForm";

const washingtonActivities = [
  {
    id: "lincoln-memorial",
    title: "Lincoln Memorial Activity",
    description: "Students take on the roles of Lincoln, John Wilkes Booth, and other historical characters",
    duration: "15-20 minutes",
    participants: "4-5 students",
    difficulty: "Intermediate",
    isUnlocked: true
  },
  {
    id: "vietnam-memorial",
    title: "Vietnam Veterans Memorial",
    description: "Honor fallen heroes while learning about the Vietnam War's impact",
    duration: "20-25 minutes", 
    participants: "4-5 students",
    difficulty: "Advanced",
    isUnlocked: false
  },
  {
    id: "fdr-memorial",
    title: "FDR Memorial Activity",
    description: "Explore FDR's presidency through interactive storytelling",
    duration: "18-22 minutes",
    participants: "4-5 students", 
    difficulty: "Intermediate",
    isUnlocked: false
  },
  {
    id: "korean-war-memorial",
    title: "Korean War Memorial",
    description: "Learn about the forgotten war through dramatic presentations",
    duration: "15-20 minutes",
    participants: "4-5 students",
    difficulty: "Intermediate", 
    isUnlocked: false
  }
];

const WashingtonDC = () => {
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<string>("");

  const handleActivityClick = (activity: typeof washingtonActivities[0]) => {
    if (activity.isUnlocked) {
      // Navigate to specific activity or show activity details
      console.log(`Accessing ${activity.title}`);
    } else {
      setSelectedActivity(activity.title);
      setShowLeadForm(true);
    }
  };

  const handleLeadSubmit = (data: { firstName: string; lastName: string; email: string; schoolGroup: string; zipCode: string; phoneNumber: string; hasOrganizedTrip: string }) => {
    console.log("Lead captured for activity:", data);
    setShowLeadForm(false);
    // In a real app, this would unlock the activity
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-4">
              <ArrowLeft className="h-4 w-4" />
              Back to Destinations
            </Link>
            <h1 className="text-4xl font-bold mb-4 text-foreground">Washington DC Activities</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Interactive curriculum activities designed to engage students at Washington DC's most historic monuments and memorials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {washingtonActivities.map((activity) => (
              <Card key={activity.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                {!activity.isUnlocked && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Premium
                    </div>
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-xl">{activity.title}</span>
                    <Star className="h-5 w-5 text-primary" />
                  </CardTitle>
                  <CardDescription className="text-base">
                    {activity.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{activity.participants}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{activity.duration}</span>
                    </div>
                  </div>
                  
                  <div className="text-sm">
                    <span className="font-medium">Difficulty: </span>
                    <span className="text-muted-foreground">{activity.difficulty}</span>
                  </div>
                  
                  <Button 
                    variant="default"
                    className={activity.isUnlocked ? "w-full" : "w-full bg-yellow-500 hover:bg-yellow-600 text-black"}
                    onClick={() => handleActivityClick(activity)}
                  >
                    {activity.isUnlocked ? "View Activity Details" : "Unlock Activity"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

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

export default WashingtonDC;