import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Users, BookOpen } from "lucide-react";
import LeadCaptureForm from "./LeadCaptureForm";

interface ActivityGateProps {
  children: React.ReactNode;
}

const ActivityGate = ({ children }: ActivityGateProps) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);

  const handleLeadSubmit = (data: { firstName: string; lastName: string; email: string; zipCode: string; phoneNumber: string }) => {
    console.log("Lead captured:", data);
    // In a real app, you would send this to your backend
    setShowLeadForm(false);
    setIsUnlocked(true);
  };

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <>
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto shadow-xl border-0">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-3xl text-primary mb-4">
                Unlock More Activities
              </CardTitle>
              <CardDescription className="text-lg">
                Access our complete collection of interactive educational activities for Washington DC monuments and memorials.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col items-center p-4 bg-background rounded-lg">
                  <Users className="h-6 w-6 text-accent mb-2" />
                  <h4 className="font-semibold text-foreground">Vietnam Veterans Memorial</h4>
                  <p className="text-sm text-muted-foreground">Interactive presentation exploring healing through design</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-background rounded-lg">
                  <BookOpen className="h-6 w-6 text-accent mb-2" />
                  <h4 className="font-semibold text-foreground">Korean War Memorial</h4>
                  <p className="text-sm text-muted-foreground">Discover 'The Forgotten War' through memorial analysis</p>
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="text-lg px-8 py-4"
                  onClick={() => setShowLeadForm(true)}
                >
                  Access All Activities
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  Get instant access to complete activity packages including scripts, teacher guides, and interactive elements.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {showLeadForm && (
        <LeadCaptureForm
          activityTitle="All Educational Activities"
          onClose={() => setShowLeadForm(false)}
          onSubmit={handleLeadSubmit}
        />
      )}
    </>
  );
};

export default ActivityGate;