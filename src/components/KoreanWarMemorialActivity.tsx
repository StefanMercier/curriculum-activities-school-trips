import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, BookOpen, Download } from "lucide-react";
import LeadCaptureForm from "./LeadCaptureForm";

const KoreanWarMemorialActivity = () => {
  const [showLeadForm, setShowLeadForm] = useState(false);

  const handleLeadSubmit = (data: { firstName: string; lastName: string; email: string; zipCode: string; phoneNumber: string }) => {
    console.log("Lead captured:", data);
    // In a real app, you would send this to your backend
    setShowLeadForm(false);
    // Redirect to materials or show success message
  };

  const roles = [
    {
      title: "War Context Guide",
      description: "Explain why Korean War is called 'The Forgotten War'",
      keyPoints: ["Post-WWII division", "1950 invasion", "UN coalition response", "China's entry and stalemate"],
      focus: "Historical Context"
    },
    {
      title: "Design Historian", 
      description: "Story of memorial creation and 1995 dedication",
      keyPoints: ["Design debate", "July 27, 1995 significance", "Frank Gaylord's statues", "Louis Nelson's wall"],
      focus: "Memorial History"
    },
    {
      title: "Statues Specialist",
      description: "Analyze the 19 stainless steel figures",
      keyPoints: ["Service breakdown", "Facial diversity", "Windblown ponchos", "Triangular formation"],
      focus: "Statue Analysis"
    },
    {
      title: "Wall Guide",
      description: "Explore the mural wall and Pool of Remembrance",
      keyPoints: ["2,400+ photographs", "Reflection significance", "'Freedom Is Not Free'", "Casualty statistics"],
      focus: "Wall Features"
    }
  ];

  const groupActivities = [
    "Count different facial expressions in statues",
    "Identify military roles (rifleman, medic, etc.)",
    "Find the Air Force observer looking skyward", 
    "Spot the Navy corpsman's medical bag",
    "Notice uniform wind direction in ponchos"
  ];

  return (
    <section id="korean" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Memorial Analysis Activity</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Korean War Memorial
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore 'The Forgotten War' through memorial statues and etched remembrances. 
            Students analyze design elements while learning about this ongoing conflict.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Activity Overview */}
          <Card className="lg:col-span-2 shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                Activity Overview
              </CardTitle>
              <CardDescription>
                Interactive presentation exploring why the Korean War is called "The Forgotten War" 
                and how this powerful memorial brings its stories to life through striking statues and etched remembrances.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">4 Student Roles</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">20 Minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Analysis Guides</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Key Learning Focus</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-secondary/20 rounded-lg">
                    <strong className="text-primary">Historical Context:</strong> Understanding the unresolved conflict
                  </div>
                  <div className="p-3 bg-secondary/20 rounded-lg">
                    <strong className="text-primary">Design Analysis:</strong> How memorial elements convey meaning
                  </div>
                  <div className="p-3 bg-secondary/20 rounded-lg">
                    <strong className="text-primary">Visual Literacy:</strong> Reading symbols in public art
                  </div>
                  <div className="p-3 bg-secondary/20 rounded-lg">
                    <strong className="text-primary">Current Events:</strong> Connection to modern Korea relations
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Access */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Activity Materials</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                className="w-full" 
                variant="hero"
                onClick={() => setShowLeadForm(true)}
              >
                Download Student Scripts
              </Button>
              <Button 
                className="w-full" 
                variant="outline"
                onClick={() => setShowLeadForm(true)}
              >
                Statue Analysis Worksheet
              </Button>
              <Button 
                className="w-full" 
                variant="outline"
                onClick={() => setShowLeadForm(true)}
              >
                Historical Timeline
              </Button>
              <Button 
                className="w-full" 
                variant="outline"
                onClick={() => setShowLeadForm(true)}
              >
                Group Activity Cards
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Student Roles */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Student Presentation Roles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((role, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg text-primary">{role.title}</CardTitle>
                      <CardDescription>{role.description}</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {role.focus}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {role.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interactive Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Group Analysis Activity</CardTitle>
              <CardDescription>Hands-on observation exercises for students</CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold text-foreground mb-3">Faces of Service Investigation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {groupActivities.map((activity, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="bg-accent text-accent-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    {activity}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Interactive Q&A</CardTitle>
              <CardDescription>Audience engagement questions with answers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-secondary/20 rounded-lg">
                <strong className="text-sm">Q:</strong> Why are there 19 statues?
                <p className="text-xs text-muted-foreground mt-1">
                  Represents full infantry squad plus attachments (19-53 timespan reference)
                </p>
              </div>
              <div className="p-3 bg-secondary/20 rounded-lg">
                <strong className="text-sm">Q:</strong> What does "Freedom Is Not Free" mean?
                <p className="text-xs text-muted-foreground mt-1">
                  Acknowledges war's costs while honoring those who paid them
                </p>
              </div>
              <div className="p-3 bg-secondary/20 rounded-lg">
                <strong className="text-sm">Q:</strong> How were statues positioned?
                <p className="text-xs text-muted-foreground mt-1">
                  Wedge formation, emerging from trees as if on patrol
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Educational Objectives */}
        <Card className="shadow-lg border-0 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Educational Objectives</CardTitle>
            <CardDescription>
              Learning outcomes and curriculum connections
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Primary Objectives</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    Understand Korea's ongoing division
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    Analyze how memorial design conveys experience
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    Connect statues to historical battlefield conditions
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    Reflect on international cooperation in conflict
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Curriculum Connections</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <strong>History:</strong> Cold War conflicts and UN involvement
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <strong>Art:</strong> Symbolism in sculpture and public monuments
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <strong>Geography:</strong> Korean peninsula and DMZ significance
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <strong>Civics:</strong> International alliances and peacekeeping
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-4"
            onClick={() => setShowLeadForm(true)}
          >
            Access Korean War Memorial Activity
          </Button>
        </div>

        {showLeadForm && (
          <LeadCaptureForm
            activityTitle="Korean War Memorial Activity"
            onClose={() => setShowLeadForm(false)}
            onSubmit={handleLeadSubmit}
          />
        )}
      </div>
    </section>
  );
};

export default KoreanWarMemorialActivity;