import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Users, MapPin, Music, DollarSign, QrCode } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your showcases, artists, and venues</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Showcases</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 this month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Artists</CardTitle>
                <Music className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">34</div>
                <p className="text-xs text-muted-foreground">8 pending applications</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Vetted Venues</CardTitle>
                <MapPin className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18</div>
                <p className="text-xs text-muted-foreground">3 pending review</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$4,280</div>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="showcases" className="space-y-6">
            <TabsList>
              <TabsTrigger value="showcases">Showcases</TabsTrigger>
              <TabsTrigger value="artists">Artist Applications</TabsTrigger>
              <TabsTrigger value="venues">Venue Vetting</TabsTrigger>
              <TabsTrigger value="door">Door Management</TabsTrigger>
            </TabsList>

            <TabsContent value="showcases" className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Manage Showcases</h2>
                <Link to="/admin/create-showcase">
                  <Button>
                    <Calendar className="mr-2 h-4 w-4" />
                    Create New Showcase
                  </Button>
                </Link>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Showcases</CardTitle>
                  <CardDescription>Active and scheduled events</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-semibold">Acoustic Night Vol. {i}</h3>
                          <p className="text-sm text-muted-foreground">Nov {15 + i}, 2025 • The Gallery Space</p>
                          <p className="text-sm">3 artists • 45 tickets sold</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm">Close Out</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="artists" className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Artist Applications</h2>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Pending Applications</CardTitle>
                  <CardDescription>Review and approve artist applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Luna Rivers", genre: "Indie Folk", applied: "2 days ago" },
                      { name: "The Neon Collective", genre: "Alternative Rock", applied: "3 days ago" },
                      { name: "Maya's Melody", genre: "Jazz", applied: "5 days ago" },
                    ].map((artist, i) => (
                      <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-semibold">{artist.name}</h3>
                          <p className="text-sm text-muted-foreground">{artist.genre} • Applied {artist.applied}</p>
                          <div className="flex gap-2 mt-2">
                            <a href="#" className="text-xs text-primary hover:underline">View Spotify</a>
                            <span className="text-xs text-muted-foreground">•</span>
                            <a href="#" className="text-xs text-primary hover:underline">View Profile</a>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm">Approve</Button>
                          <Button variant="outline" size="sm">Reject</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="venues" className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Venue Vetting</h2>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Pending Venue Reviews</CardTitle>
                  <CardDescription>Manually vet and approve venue hosts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "Riverside Art Gallery", capacity: "75", nights: "Tue, Wed, Thu" },
                      { name: "Downtown Co-Working Hub", capacity: "50", nights: "Fri, Sat" },
                      { name: "The Community Center", capacity: "100", nights: "Weekends" },
                    ].map((venue, i) => (
                      <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-semibold">{venue.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            Capacity: {venue.capacity} • Available: {venue.nights}
                          </p>
                          <Button variant="link" className="h-auto p-0 text-xs mt-1">
                            View Photos & Details
                          </Button>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm">Approve</Button>
                          <Button variant="outline" size="sm">Reject</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="door" className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Door Management</h2>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Tonight's Showcases</CardTitle>
                  <CardDescription>Check-in guests and manage door</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Acoustic Night Vol. 1</h3>
                      <p className="text-sm text-muted-foreground mb-4">7:00 PM • The Gallery Space</p>
                      <div className="flex gap-4 mb-4">
                        <div>
                          <p className="text-2xl font-bold">32</p>
                          <p className="text-xs text-muted-foreground">Checked In</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold">45</p>
                          <p className="text-xs text-muted-foreground">Total Tickets</p>
                        </div>
                      </div>
                      <Button className="w-full">
                        <QrCode className="mr-2 h-4 w-4" />
                        Open QR Scanner
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
