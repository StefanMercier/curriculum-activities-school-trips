import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import lincolnMemorialImg from "@/assets/lincoln-memorial.jpg";
import mlkMemorialImg from "@/assets/mlk-memorial.jpg";
import jeffersonMemorialImg from "@/assets/jefferson-memorial.jpg";
import arlingtonCemeteryImg from "@/assets/arlington-cemetery.jpg";
import washingtonMonumentImg from "@/assets/washington-monument.jpg";
import usCapitolImg from "@/assets/us-capitol.jpg";
import wwiiMemorialImg from "@/assets/wwii-memorial.jpg";
import mountVernonImg from "@/assets/mount-vernon.jpg";
import pierreCharlesLenfantImg from "@/assets/pierre-charles-lenfant.jpg";
import greekColumnsImg from "@/assets/greek-columns.jpg";
import vietnamMemorialImg from "@/assets/vietnam-memorial.jpg";
import koreanWarMemorialImg from "@/assets/korean-war-memorial.jpg";
import whiteHouseImg from "@/assets/white-house.jpg";

const washingtonActivities = [
  {
    id: "lincoln-memorial",
    title: "Lincoln Memorial Activity",
    description: "Students take on the roles of Lincoln, John Wilkes Booth, and other historical characters",
    duration: "15-20 minutes",
    participants: "4-5 students",
    difficulty: "Intermediate",
    image: lincolnMemorialImg,
    isUnlocked: true
  },
  {
    id: "washington-monument",
    title: "Washington Monument Activity",
    description: "Explore the engineering marvel and symbolism of America's tallest stone structure",
    duration: "15-20 minutes",
    participants: "4-5 students",
    difficulty: "Intermediate",
    image: washingtonMonumentImg,
    isUnlocked: false
  },
  {
    id: "us-capitol",
    title: "US Capitol & DC History",
    description: "Discover the nation's capital design and political compromise that created Washington DC",
    duration: "18-22 minutes",
    participants: "4-5 students",
    difficulty: "Intermediate",
    image: usCapitolImg,
    isUnlocked: false
  },
  {
    id: "wwii-memorial",
    title: "World War II Memorial",
    description: "Honor the Greatest Generation through interactive exploration of WWII's global impact",
    duration: "18-22 minutes",
    participants: "4-5 students",
    difficulty: "Advanced",
    image: wwiiMemorialImg,
    isUnlocked: false
  },
  {
    id: "mlk-memorial",
    title: "MLK Memorial Activity",
    description: "Students explore Dr. King's legacy through interactive roles and memorial symbolism",
    duration: "15-20 minutes",
    participants: "4-5 students",
    difficulty: "Intermediate",
    image: mlkMemorialImg,
    isUnlocked: false
  },
  {
    id: "jefferson-memorial",
    title: "Jefferson Memorial Activity", 
    description: "Explore Jefferson's complex legacy as founder, author, and contradictions",
    duration: "15-20 minutes",
    participants: "4-5 students",
    difficulty: "Intermediate",
    image: jeffersonMemorialImg,
    isUnlocked: false
  },
  {
    id: "arlington-cemetery",
    title: "Arlington Cemetery Activity",
    description: "Honor America's fallen heroes through interactive memorial experiences",
    duration: "20-25 minutes",
    participants: "4-5 students",
    difficulty: "Advanced",
    image: arlingtonCemeteryImg,
    isUnlocked: false
  },
  {
    id: "mount-vernon",
    title: "Mount Vernon Activity",
    description: "Explore George Washington's beloved estate and the complex history of slavery",
    duration: "18-22 minutes",
    participants: "4-5 students",
    difficulty: "Advanced",
    image: mountVernonImg,
    isUnlocked: false
  },
  {
    id: "pierre-charles-lenfant",
    title: "Pierre Charles L'Enfant",
    description: "Discover the French architect who designed Washington DC's iconic street layout",
    duration: "15-20 minutes",
    participants: "4-5 students",
    difficulty: "Intermediate",
    image: pierreCharlesLenfantImg,
    isUnlocked: false
  },
  {
    id: "greek-columns",
    title: "Greek Columns in DC Architecture",
    description: "Explore the three classical orders of columns and their symbolic meanings in government buildings",
    duration: "18-22 minutes",
    participants: "4-5 students",
    difficulty: "Intermediate",
    image: greekColumnsImg,
    isUnlocked: false
  },
  {
    id: "vietnam-memorial",
    title: "Vietnam Veterans Memorial",
    description: "Honor the 58,000+ Americans who died in Vietnam through this powerful black granite memorial",
    duration: "20-25 minutes",
    participants: "4-5 students",
    difficulty: "Advanced",
    image: vietnamMemorialImg,
    isUnlocked: false
  },
  {
    id: "korean-war-memorial",
    title: "Korean War Memorial",
    description: "Remember 'The Forgotten War' through 19 stainless steel statues and etched wall of faces",
    duration: "18-22 minutes",
    participants: "4-5 students",
    difficulty: "Intermediate",
    image: koreanWarMemorialImg,
    isUnlocked: false
  },
  {
    id: "white-house",
    title: "The White House & Surrounding Institutions",
    description: "Explore the presidential residence and the executive institutions that form the heart of American power",
    duration: "20-25 minutes",
    participants: "4-5 students",
    difficulty: "Advanced",
    image: whiteHouseImg,
    isUnlocked: false
  }
];

const WashingtonDC = () => {
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<string>("");

  const handleActivityClick = (activity: typeof washingtonActivities[0]) => {
    if (activity.isUnlocked) {
      // Open the HTML activity in a new window
      if (activity.id === "lincoln-memorial") {
        window.open("/activities/lincoln-memorial.html", "_blank");
      } else if (activity.id === "washington-monument") {
        window.open("/activities/washington-monument.html", "_blank");
      } else if (activity.id === "us-capitol") {
        window.open("/activities/us-capitol.html", "_blank");
      } else if (activity.id === "wwii-memorial") {
        window.open("/activities/wwii-memorial.html", "_blank");
      } else if (activity.id === "mlk-memorial") {
        window.open("/activities/mlk-memorial.html", "_blank");
      } else if (activity.id === "jefferson-memorial") {
        window.open("/activities/jefferson-memorial.html", "_blank");
      } else if (activity.id === "arlington-cemetery") {
        window.open("/activities/arlington-cemetery.html", "_blank");
      } else if (activity.id === "mount-vernon") {
        window.open("/activities/mount-vernon.html", "_blank");
      } else if (activity.id === "pierre-charles-lenfant") {
        window.open("/activities/pierre-charles-lenfant.html", "_blank");
      } else if (activity.id === "greek-columns") {
        window.open("/activities/greek-columns.html", "_blank");
      } else if (activity.id === "vietnam-memorial") {
        window.open("/activities/vietnam-memorial.html", "_blank");
      } else if (activity.id === "korean-war-memorial") {
        window.open("/activities/korean-war-memorial.html", "_blank");
      } else if (activity.id === "white-house") {
        window.open("/activities/white-house.html", "_blank");
      }
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
                {activity.image && (
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={activity.image} 
                      alt={activity.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
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