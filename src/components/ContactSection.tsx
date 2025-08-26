import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Ready to Plan Your Trip?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact our educational tour specialists to create the perfect 
            learning experience for your student group.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Get Your Quote</CardTitle>
              <CardDescription>
                Tell us about your group and we'll create a custom itinerary just for you.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    School/Organization Name
                  </label>
                  <Input placeholder="Enter your school name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Contact Person
                  </label>
                  <Input placeholder="Your full name" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email Address
                  </label>
                  <Input type="email" placeholder="your.email@school.edu" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="(555) 123-4567" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Grade Level
                  </label>
                  <Input placeholder="e.g., 8th Grade" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Group Size
                  </label>
                  <Input placeholder="e.g., 45 students" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Preferred Dates
                  </label>
                  <Input placeholder="Month/Year" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Areas of Interest
                </label>
                <Textarea 
                  placeholder="Tell us about your curriculum focus, learning objectives, or specific sites you'd like to visit..."
                  className="min-h-[100px]"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full text-lg py-3">
                Submit Request
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
                <CardDescription>
                  Our educational tour specialists are here to help plan your perfect DC experience.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">(202) 555-0123</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri, 8am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">info@dceducationaltours.com</p>
                    <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">Washington, DC Metro Area</p>
                    <p className="text-sm text-muted-foreground">Serving schools nationwide</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Quick Response</h4>
                    <p className="text-muted-foreground">Free consultation within 24 hours</p>
                    <p className="text-sm text-muted-foreground">Custom quotes in 2-3 business days</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent/10 border-accent/20 shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-bold text-primary text-lg mb-2">
                  🎓 Educator Discount Available
                </h4>
                <p className="text-muted-foreground mb-4">
                  Special pricing for public schools and educational non-profits. 
                  Ask about our group discounts and seasonal promotions.
                </p>
                <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  Learn About Discounts
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;