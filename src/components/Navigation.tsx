
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import LeadCaptureForm from "./LeadCaptureForm";

const Navigation = () => {
  const [showLeadForm, setShowLeadForm] = useState(false);

  const handleLeadSubmit = (data: { firstName: string; lastName: string; email: string; location: string }) => {
    console.log("Lead captured:", data);
    // In a real app, you would send this to your backend
    setShowLeadForm(false);
    // Redirect to materials or show success message
  };

  const navItems = [
    { label: "Vietnam Memorial", href: "#vietnam" },
    { label: "Lincoln Memorial", href: "#lincoln" },
    { label: "Korean War Memorial", href: "#korean" },
    { label: "More Activities", href: "#activities" },
    { label: "Teacher Resources", href: "#resources" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="https://globaleducationaltours.com" target="_blank" rel="noopener noreferrer">
              <img 
                src="http://staging2.globaleducationaltours.com/wp-content/uploads/2025/04/cropped-cropped-cropped-cropped-2-1.png" 
                alt="Global Educational Tours" 
                className="h-10 w-auto"
              />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>802-377-3311</span>
            </div>
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => setShowLeadForm(true)}
            >
              Access Materials
            </Button>
          </div>
        </div>
      </div>

      {showLeadForm && (
        <LeadCaptureForm
          activityTitle="Educational Materials"
          onClose={() => setShowLeadForm(false)}
          onSubmit={handleLeadSubmit}
        />
      )}
    </nav>
  );
};

export default Navigation;
