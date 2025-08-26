import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

interface LeadCaptureFormProps {
  activityTitle: string;
  onClose: () => void;
  onSubmit: (data: { name: string; email: string; school: string }) => void;
}

const LeadCaptureForm = ({ activityTitle, onClose, onSubmit }: LeadCaptureFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    school: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="relative">
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
          <CardTitle className="text-xl text-primary">Access {activityTitle}</CardTitle>
          <CardDescription>
            Get instant access to complete activity materials including scripts, teacher guides, and interactive elements.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="school">School or Group Name & Location</Label>
              <Input
                id="school"
                type="text"
                placeholder="e.g., Lincoln High School, Washington DC"
                value={formData.school}
                onChange={(e) => handleChange("school", e.target.value)}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              variant="hero" 
              className="w-full mt-6"
              disabled={!formData.name || !formData.email || !formData.school}
            >
              Get Activity Materials
            </Button>
            
            <p className="text-xs text-muted-foreground text-center mt-4">
              By submitting, you'll receive instant access to materials and occasional updates about new activities.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeadCaptureForm;