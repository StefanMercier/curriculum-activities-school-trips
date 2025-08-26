import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, BookOpen, Download } from "lucide-react";
import LeadCaptureForm from "./LeadCaptureForm";

const VietnamMemorialActivity = () => {
  const [showLeadForm, setShowLeadForm] = useState(false);

  const handleLeadSubmit = (data: { name: string; email: string; school: string }) => {
    console.log("Lead captured:", data);
    // In a real app, you would send this to your backend
    setShowLeadForm(false);
    // Redirect to materials or show success message
  };

  const roles = [
    {
      title: "War Context Guide",
      description: "Explains Vietnam War background and its divisive nature",
      keyPoints: ["Domino Theory", "Televised war impact", "Draft system", "Veteran treatment"]
    },
    {
      title: "Design Historian", 
      description: "Tells Maya Lin's story and memorial creation",
      keyPoints: ["Design competition", "Maya Lin at 19", "Initial controversy", "Vision realized"]
    },
    {
      title: "Symbolism Expert",
      description: "Decodes memorial symbols and meanings",
      keyPoints: ["Chevron shape", "Diamond vs cross markers", "Michael Blassie story", "Reflection significance"]
    },
    {
      title: "Visitor Experience Guide",
      description: "Explains visitor interactions and memorial features",
      keyPoints: ["Items left at wall", "Three Servicemen statue", "Women's Memorial", "Sacred space etiquette"]
    }
  ];

  return (
    <section id="vietnam" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Interactive Memorial Activity</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Vietnam Veterans Memorial
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore how memorial design helps heal wounds from America's most divisive war 
            through interactive student presentations and role-playing activities.
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
                Interactive presentation exploring how this powerful monument helps heal wounds 
                from one of America's most divisive wars through design, symbolism, and personal stories.
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
                  <span className="text-sm font-medium">15-20 Minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Printable Scripts</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Educational Objectives</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    Understand how memorial design facilitates healing
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    Analyze symbolism in public art and architecture
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    Connect war statistics to individual human lives
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    Practice respectful historical commemoration
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Quick Access */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Quick Access</CardTitle>
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
                View Teacher Guide
              </Button>
              <Button 
                className="w-full" 
                variant="outline"
                onClick={() => setShowLeadForm(true)}
              >
                Interactive Q&A Cards
              </Button>
              <Button 
                className="w-full" 
                variant="outline"
                onClick={() => setShowLeadForm(true)}
              >
                Assessment Rubric
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Student Roles */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Student Roles & Responsibilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((role, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{role.title}</CardTitle>
                  <CardDescription>{role.description}</CardDescription>
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

        {/* Interactive Elements */}
        <Card className="shadow-lg border-0 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Interactive Elements</CardTitle>
            <CardDescription>
              Engage your audience with these built-in interactive components
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Audience Questions</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="p-3 bg-secondary/20 rounded-lg">
                  <strong>Q:</strong> Why are the earliest and latest names closest together?
                </div>
                <div className="p-3 bg-secondary/20 rounded-lg">
                  <strong>Q:</strong> How were names added after the wall was built?
                </div>
                <div className="p-3 bg-secondary/20 rounded-lg">
                  <strong>Q:</strong> What's significant about the memorial's alignment?
                </div>
                <div className="p-3 bg-secondary/20 rounded-lg">
                  <strong>Activity:</strong> Find names by birth date investigation
                </div>
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
            Access Complete Activity Package
          </Button>
        </div>

        {showLeadForm && (
          <LeadCaptureForm
            activityTitle="Vietnam Veterans Memorial Activity"
            onClose={() => setShowLeadForm(false)}
            onSubmit={handleLeadSubmit}
          />
        )}
      </div>
    </section>
  );
};

export default VietnamMemorialActivity;