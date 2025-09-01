import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Save, Trash2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import { toast } from "@/components/ui/use-toast";

const Admin = () => {
  const [activities, setActivities] = useState([
    {
      id: "1",
      title: "Lincoln Memorial Activity",
      destination: "Washington DC",
      duration: "15-20 minutes",
      participants: "4-5 students",
      htmlContent: "<div>Sample Lincoln Memorial Activity HTML Content</div>"
    }
  ]);

  const [newActivity, setNewActivity] = useState({
    title: "",
    destination: "",
    duration: "",
    participants: "",
    htmlContent: ""
  });

  const destinations = [
    "Washington DC",
    "New York City", 
    "Boston",
    "Williamsburg",
    "Gettysburg",
    "Chicago",
    "Montreal",
    "Quebec City"
  ];

  const handleSaveActivity = () => {
    if (!newActivity.title || !newActivity.destination || !newActivity.htmlContent) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const activity = {
      id: Date.now().toString(),
      ...newActivity
    };

    setActivities(prev => [...prev, activity]);
    setNewActivity({
      title: "",
      destination: "",
      duration: "",
      participants: "",
      htmlContent: ""
    });

    toast({
      title: "Success",
      description: "Activity saved successfully"
    });
  };

  const handleDeleteActivity = (id: string) => {
    setActivities(prev => prev.filter(activity => activity.id !== id));
    toast({
      title: "Success",
      description: "Activity deleted successfully"
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Admin Panel</h1>
            <p className="text-xl text-muted-foreground">
              Manage curriculum activities and educational content
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Add New Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Add New Activity
                </CardTitle>
                <CardDescription>
                  Create interactive curriculum activities with HTML content
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Activity Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Lincoln Memorial Activity"
                    value={newActivity.title}
                    onChange={(e) => setNewActivity(prev => ({ ...prev, title: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="destination">Destination *</Label>
                  <Select onValueChange={(value) => setNewActivity(prev => ({ ...prev, destination: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select destination" />
                    </SelectTrigger>
                    <SelectContent>
                      {destinations.map((dest) => (
                        <SelectItem key={dest} value={dest}>
                          {dest}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration</Label>
                    <Input
                      id="duration"
                      placeholder="e.g., 15-20 minutes"
                      value={newActivity.duration}
                      onChange={(e) => setNewActivity(prev => ({ ...prev, duration: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="participants">Participants</Label>
                    <Input
                      id="participants"
                      placeholder="e.g., 4-5 students"
                      value={newActivity.participants}
                      onChange={(e) => setNewActivity(prev => ({ ...prev, participants: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="htmlContent">HTML Content *</Label>
                  <Textarea
                    id="htmlContent"
                    placeholder="Enter the HTML content for the activity..."
                    className="min-h-[200px] font-mono text-sm"
                    value={newActivity.htmlContent}
                    onChange={(e) => setNewActivity(prev => ({ ...prev, htmlContent: e.target.value }))}
                  />
                </div>

                <Button onClick={handleSaveActivity} className="w-full">
                  <Save className="h-4 w-4 mr-2" />
                  Save Activity
                </Button>
              </CardContent>
            </Card>

            {/* Existing Activities */}
            <Card>
              <CardHeader>
                <CardTitle>Existing Activities</CardTitle>
                <CardDescription>
                  Manage your current curriculum activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activities.map((activity) => (
                    <div key={activity.id} className="border rounded-lg p-4 space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{activity.title}</h3>
                          <p className="text-sm text-muted-foreground">{activity.destination}</p>
                          {activity.duration && (
                            <p className="text-xs text-muted-foreground">Duration: {activity.duration}</p>
                          )}
                          {activity.participants && (
                            <p className="text-xs text-muted-foreground">Participants: {activity.participants}</p>
                          )}
                        </div>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDeleteActivity(activity.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="bg-muted/50 p-2 rounded text-xs font-mono">
                        {activity.htmlContent.slice(0, 100)}...
                      </div>
                    </div>
                  ))}
                  
                  {activities.length === 0 && (
                    <p className="text-center text-muted-foreground py-8">
                      No activities created yet. Add your first activity to get started.
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
