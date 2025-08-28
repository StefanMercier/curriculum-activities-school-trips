import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

interface LeadCaptureFormProps {
  activityTitle: string;
  onClose: () => void;
  onSubmit: (data: { firstName: string; lastName: string; email: string; schoolGroup: string; zipCode: string; phoneNumber: string; hasOrganizedTrip: string }) => void;
}

const LeadCaptureForm = ({ activityTitle, onClose, onSubmit }: LeadCaptureFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    schoolGroup: "",
    zipCode: "",
    phoneNumber: "",
    hasOrganizedTrip: ""
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
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  required
                />
              </div>
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
              <Label htmlFor="schoolGroup">School/Group Name</Label>
              <Input
                id="schoolGroup"
                type="text"
                placeholder="Enter school or group name"
                value={formData.schoolGroup}
                onChange={(e) => handleChange("schoolGroup", e.target.value)}
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="zipCode">Zip Code</Label>
                <Input
                  id="zipCode"
                  type="text"
                  placeholder="12345"
                  value={formData.zipCode}
                  onChange={(e) => handleChange("zipCode", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.phoneNumber}
                  onChange={(e) => handleChange("phoneNumber", e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="hasOrganizedTrip">Have you organized a school trip in the past?</Label>
              <select
                id="hasOrganizedTrip"
                value={formData.hasOrganizedTrip}
                onChange={(e) => handleChange("hasOrganizedTrip", e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                required
              >
                <option value="">Please select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            
            <Button 
              type="submit" 
              variant="hero" 
              className="w-full mt-6"
              disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.schoolGroup || !formData.zipCode || !formData.phoneNumber || !formData.hasOrganizedTrip}
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