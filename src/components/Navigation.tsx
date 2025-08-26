import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { label: "Historical Tours", href: "#historical" },
    { label: "Science & Museums", href: "#science" },
    { label: "Government Tours", href: "#government" },
    { label: "Cultural Activities", href: "#cultural" },
    { label: "Custom Programs", href: "#custom" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-primary">
              DC Educational Tours
            </h1>
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
              <span>(202) 555-0123</span>
            </div>
            <Button variant="hero" size="sm">
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;