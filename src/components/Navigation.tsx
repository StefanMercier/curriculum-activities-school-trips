
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Shield, LogOut } from "lucide-react";
import LeadCaptureForm from "./LeadCaptureForm";
import AdminLogin from "./AdminLogin";
import { useUserAccess } from "@/hooks/useUserAccess";

const Navigation = () => {
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const { hasAccess, isAdmin, userEmail, revokeAccess, grantAccess } = useUserAccess();

  const handleLeadSubmit = async (data: { firstName: string; lastName: string; email: string; schoolGroup: string; zipCode: string; phoneNumber: string; hasOrganizedTrip: string }) => {
    console.log("Lead captured:", data);
    setShowLeadForm(false);
    
    // Grant access using the email
    await grantAccess(data.email);
  };

  const navItems = [
    { label: "More Activities", href: "#activities" },
    { label: "Teacher Resources", href: "/teacher-guidelines.html", target: "_blank" },
    { label: "Browse Destinations", href: "/#destinations" },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="https://globaleducationaltours.com" target="_blank" rel="noopener noreferrer">
              <img 
                src="/global-educational-tours-logo.jpeg" 
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
                target={item.target}
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
            
            {hasAccess ? (
              <div className="flex items-center gap-2">
                <span className="text-sm">
                  {isAdmin ? 'Admin Access' : `Welcome, ${userEmail}`}
                </span>
                <Button 
                  onClick={revokeAccess}
                  variant="outline" 
                  size="sm"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Button 
                  onClick={() => setShowLeadForm(true)}
                  variant="hero" 
                  size="sm"
                >
                  Access Materials
                </Button>
                <Button 
                  onClick={() => setShowAdminLogin(true)}
                  variant="outline" 
                  size="sm"
                >
                  <Shield className="h-4 w-4 mr-1" />
                  Admin
                </Button>
              </div>
            )}
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
      
      {showAdminLogin && (
        <AdminLogin onClose={() => setShowAdminLogin(false)} />
      )}
    </nav>
  );
};

export default Navigation;
