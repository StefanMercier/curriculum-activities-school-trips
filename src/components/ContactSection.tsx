
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Users } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Get Started with Interactive Activities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to enhance your students' next school trip experience to Washington DC, New York, Boston, and beyond? Contact us for curriculum materials, 
            implementation guides, and educational support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Request Materials</CardTitle>
              <CardDescription>
                Get access to interactive scripts, teacher guides, and educational resources.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="school">School/Organization</Label>
                <Input id="school" placeholder="Enter your school or organization" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="groupSize">Group Size</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select group size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10-20">10-20 students</SelectItem>
                      <SelectItem value="21-30">21-30 students</SelectItem>
                      <SelectItem value="31-50">31-50 students</SelectItem>
                      <SelectItem value="50+">50+ students</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gradeLevel">Grade Level</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select grade level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="elementary">Elementary (K-5)</SelectItem>
                      <SelectItem value="middle">Middle School (6-8)</SelectItem>
                      <SelectItem value="high">High School (9-12)</SelectItem>
                      <SelectItem value="college">College/University</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="activities">Activities of Interest</Label>
                <Textarea 
                  id="activities" 
                  placeholder="Which memorial activities interest you most? Any specific educational objectives?"
                  className="min-h-[100px]"
                />
              </div>
              
              <Button variant="hero" className="w-full" size="lg">
                Request Materials
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  About Global Educational Tours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We specialize in creating engaging educational experiences for student groups visiting Washington DC. 
                  Our interactive activities are designed by educators to enhance learning and create memorable experiences.
                </p>
                <div className="flex items-center justify-center">
                  <a href="https://globaleducationaltours.com" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="http://staging2.globaleducationaltours.com/wp-content/uploads/2025/04/cropped-cropped-cropped-cropped-2-1.png" 
                      alt="Global Educational Tours" 
                      className="h-16 w-auto"
                    />
                  </a>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Phone Support</h3>
                  <p className="text-muted-foreground">802-377-3311</p>
                  <p className="text-sm text-muted-foreground">Monday - Friday, 9 AM - 5 PM EST</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Email Support</h3>
                  <p className="text-muted-foreground">globaleducational@go.com or info@globeltours.com</p>
                  <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Washington DC Focus</h3>
                  <p className="text-muted-foreground">Specialized activities for monuments and memorials</p>
                  <p className="text-sm text-muted-foreground">Perfect for school trips and group visits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
