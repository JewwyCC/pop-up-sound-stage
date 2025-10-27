import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Music, MapPin, Users, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  const handleAdminSignIn = () => {
    // TODO: Add actual authentication logic
    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Join Showcase
              </h1>
              <p className="text-xl text-muted-foreground">
                Choose your role and get started in seconds
              </p>
            </div>
            
            <Tabs defaultValue="fan" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="fan" className="gap-2">
                  <Users className="h-4 w-4" />
                  Fan
                </TabsTrigger>
                <TabsTrigger value="artist" className="gap-2">
                  <Music className="h-4 w-4" />
                  Artist
                </TabsTrigger>
                <TabsTrigger value="host" className="gap-2">
                  <MapPin className="h-4 w-4" />
                  Host
                </TabsTrigger>
                <TabsTrigger value="admin" className="gap-2">
                  <Shield className="h-4 w-4" />
                  Admin
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="fan">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">Sign Up as a Fan</CardTitle>
                    <CardDescription className="text-base">
                      Discover and attend amazing live music showcases
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fan-email">Email</Label>
                      <Input id="fan-email" type="email" placeholder="you@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fan-password">Password</Label>
                      <Input id="fan-password" type="password" placeholder="••••••••" />
                    </div>
                    <Button className="w-full" size="lg">
                      Create Fan Account
                    </Button>
                    <p className="text-sm text-center text-muted-foreground">
                      Already have an account? <a href="#" className="text-primary hover:underline">Sign in</a>
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="artist">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">Sign Up as an Artist</CardTitle>
                    <CardDescription className="text-base">
                      Get booked for paid gigs with zero hassle
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="artist-name">Artist Name</Label>
                      <Input id="artist-name" placeholder="Your artist or band name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="artist-email">Email</Label>
                      <Input id="artist-email" type="email" placeholder="you@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="artist-password">Password</Label>
                      <Input id="artist-password" type="password" placeholder="••••••••" />
                    </div>
                    <Button className="w-full" size="lg">
                      Create Artist Account
                    </Button>
                    <p className="text-sm text-center text-muted-foreground">
                      Already have an account? <a href="#" className="text-primary hover:underline">Sign in</a>
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="host">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">Sign Up as a Venue Host</CardTitle>
                    <CardDescription className="text-base">
                      Earn revenue from your space with zero overhead
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="host-venue">Venue Name</Label>
                      <Input id="host-venue" placeholder="Your venue name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="host-email">Email</Label>
                      <Input id="host-email" type="email" placeholder="you@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="host-password">Password</Label>
                      <Input id="host-password" type="password" placeholder="••••••••" />
                    </div>
                    <Button className="w-full" size="lg">
                      Create Host Account
                    </Button>
                    <p className="text-sm text-center text-muted-foreground">
                      Already have an account? <a href="#" className="text-primary hover:underline">Sign in</a>
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="admin">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl">Admin Sign In</CardTitle>
                    <CardDescription className="text-base">
                      Manage showcases, artists, venues, and events
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="admin-email">Email</Label>
                      <Input id="admin-email" type="email" placeholder="admin@showcase.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="admin-password">Password</Label>
                      <Input id="admin-password" type="password" placeholder="••••••••" />
                    </div>
                    <Button className="w-full" size="lg" onClick={handleAdminSignIn}>
                      Sign In
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Auth;
