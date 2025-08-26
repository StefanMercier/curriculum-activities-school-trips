import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, BookOpen, Download } from "lucide-react";

const LincolnMemorialActivity = () => {
  const roles = [
    {
      title: "Abraham Lincoln",
      description: "Portray Lincoln's leadership during the Civil War",
      keyPoints: ["Union preservation", "Emancipation Proclamation", "Leadership challenges", "Vision for reunification"],
      costume: "Black suit, optional beard"
    },
    {
      title: "Narrator", 
      description: "Provide transitions and conclude with accomplishments",
      keyPoints: ["Activity introduction", "Scene transitions", "Lincoln's legacy", "Audience engagement"],
      costume: "Formal attire"
    },
    {
      title: "John Wilkes Booth",
      description: "Explain historical motivations (educational context)",
      keyPoints: ["Political motivations", "Southern perspective", "States' rights beliefs", "Historical context"],
      costume: "Period-appropriate if available"
    },
    {
      title: "Memorial Guide",
      description: "Explain design, construction, and significance",
      keyPoints: ["Architectural details", "Construction timeline", "DC cross-axis location", "Greek temple design"],
      costume: "Modern professional"
    }
  ];

  return (
    <section id="lincoln" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Theatrical Performance Activity</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Lincoln Memorial
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Theatrical performance combining historical education with memorial architecture. 
            Students bring Lincoln's story to life through role-playing and audience interaction.
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
                15-minute interactive presentation combining theatrical performance with historical education. 
                Four students bring Abraham Lincoln's story and the memorial's significance to life.
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
                  <span className="text-sm font-medium">15 Minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Complete Script</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Performance Structure</h4>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                    Lincoln's leadership during crisis
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                    Historical context from Booth's perspective
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                    Memorial architecture and symbolism
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                    DC geographical significance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">5</span>
                    Lincoln's lasting legacy
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* Quick Access */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Materials</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full" variant="hero">
                Download Full Script
              </Button>
              <Button className="w-full" variant="outline">
                Character Guidelines
              </Button>
              <Button className="w-full" variant="outline">
                Costume Suggestions
              </Button>
              <Button className="w-full" variant="outline">
                Historical Context Notes
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Character Roles */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Character Roles</h3>
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
                      {role.costume}
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

        {/* Educational Objectives */}
        <Card className="shadow-lg border-0 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Educational Objectives</CardTitle>
            <CardDescription>
              Learning outcomes and extension activities for this performance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Learning Objectives</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    Understand Lincoln's leadership during crisis
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    Analyze multiple historical perspectives
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    Recognize memorial architecture symbolism
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    Connect to broader DC city planning
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Extension Activities</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    Read Gettysburg Address excerpts on memorial walls
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    Compare memorial designs across monuments
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    Research other presidential memorials
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    Create timeline of Civil War events
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Get Lincoln Memorial Activity
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LincolnMemorialActivity;