import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Save, Trash2, Users, Mail, Phone, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

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

  const [leads, setLeads] = useState([]);
  const [loadingLeads, setLoadingLeads] = useState(true);

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

  // Fetch leads from database
  const fetchLeads = async () => {
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching leads:', error);
        toast({
          title: "Error",
          description: "Failed to fetch leads",
          variant: "destructive"
        });
        return;
      }

      setLeads(data || []);
    } catch (error) {
      console.error('Error fetching leads:', error);
    } finally {
      setLoadingLeads(false);
    }
  };

  // Load leads on component mount
  useEffect(() => {
    fetchLeads();
  }, []);

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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

            {/* Leads/Signups */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Signups ({leads.length})
                </CardTitle>
                <CardDescription>
                  People who have requested access to materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loadingLeads ? (
                  <div className="text-center py-8 text-muted-foreground">
                    Loading signups...
                  </div>
                ) : (
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {leads.map((lead) => (
                      <div key={lead.id} className="border rounded-lg p-4 space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold">{lead.first_name} {lead.last_name}</h3>
                            <div className="space-y-1 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Mail className="h-3 w-3" />
                                {lead.email}
                              </div>
                              {lead.phone_number && (
                                <div className="flex items-center gap-2">
                                  <Phone className="h-3 w-3" />
                                  {lead.phone_number}
                                </div>
                              )}
                              {lead.zip_code && (
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-3 w-3" />
                                  {lead.zip_code}
                                </div>
                              )}
                            </div>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            lead.access_granted 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {lead.access_granted ? 'Access Granted' : 'Pending'}
                          </span>
                        </div>
                        {lead.school_group && (
                          <p className="text-sm"><strong>School:</strong> {lead.school_group}</p>
                        )}
                        {lead.activity_title && (
                          <p className="text-sm"><strong>Activity Interest:</strong> {lead.activity_title}</p>
                        )}
                        <p className="text-xs text-muted-foreground">
                          Signed up: {new Date(lead.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                    
                    {leads.length === 0 && (
                      <p className="text-center text-muted-foreground py-8">
                        No signups yet. Share your materials to get started.
                      </p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
