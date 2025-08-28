import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, Download, BookOpen, ChevronDown, ChevronUp } from "lucide-react";

const SampleActivity = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const roles = [
    {
      name: "Abraham Lincoln",
      description: "The 16th President of the United States",
      keyPoints: ["Emancipation Proclamation", "Preserving the Union", "Leadership during Civil War"],
      costume: "Black suit, tall hat, beard (optional - great for school prep)"
    },
    {
      name: "Narrator", 
      description: "Guides the audience through Lincoln's story",
      keyPoints: ["Historical context", "Timeline of events", "Legacy explanation"],
      costume: "Professional attire or period clothing (optional - consider for school)"
    },
    {
      name: "John Wilkes Booth",
      description: "Lincoln's assassin (handled sensitively)",
      keyPoints: ["Historical context only", "Consequences of actions", "Impact on nation"],
      costume: "Period appropriate clothing (optional - especially at destination)"
    },
    {
      name: "Memorial Guide",
      description: "Expert on the Lincoln Memorial",
      keyPoints: ["Memorial facts", "Symbolism", "Visitor information"],
      costume: "Park ranger or guide uniform (optional - very much optional at destination)"
    }
  ];

  return (
    <section id="sample-activity" className="py-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">See Our Lincoln Memorial Activity</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2">Lincoln Memorial Activity</CardTitle>
                  <p className="text-muted-foreground">
                    A theatrical performance bringing history to life at the Lincoln Memorial
                  </p>
                </div>
                <Badge variant="secondary" className="bg-primary text-primary-foreground">
                  Free Sample
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">4 Student Roles</p>
                    <p className="text-sm text-muted-foreground">Interactive parts for everyone</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">15-20 minutes</p>
                    <p className="text-sm text-muted-foreground">Perfect class duration</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold">Full Scripts</p>
                    <p className="text-sm text-muted-foreground">Ready-to-use materials</p>
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => setIsExpanded(!isExpanded)}
                variant="default"
                className="w-full mb-4 bg-accent text-accent-foreground hover:bg-accent-hover"
              >
                {isExpanded ? "Hide" : "View"} Activity Details
                {isExpanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
              </Button>

              {isExpanded && (
                <div className="space-y-6 border-t pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Materials Included</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <Download className="mr-2 h-4 w-4" />
                          Student Scripts (PDF)
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <Download className="mr-2 h-4 w-4" />
                          Teacher Guidelines
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <Download className="mr-2 h-4 w-4" />
                          Historical Background
                        </Button>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Activity Overview</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• Students perform historical roles</li>
                          <li>• Interactive Q&A with audience</li>
                          <li>• Memorial symbolism exploration</li>
                          <li>• Historical context discussion</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Character Roles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {roles.map((role, index) => (
                        <Card key={index}>
                          <CardHeader>
                            <CardTitle className="text-lg">{role.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">{role.description}</p>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <div>
                                <p className="font-medium text-sm">Key Points:</p>
                                <ul className="text-sm text-muted-foreground">
                                  {role.keyPoints.map((point, idx) => (
                                    <li key={idx}>• {point}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <p className="font-medium text-sm">Costume: {role.costume}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Educational Objectives</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Understand Lincoln's role in American history</li>
                        <li>• Explore themes of leadership and perseverance</li>
                        <li>• Connect historical events to memorial symbolism</li>
                        <li>• Develop public speaking and performance skills</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default SampleActivity;