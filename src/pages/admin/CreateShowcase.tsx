import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Calendar, MapPin, Music } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const CreateShowcase = () => {
  const [step, setStep] = useState(1);
  const [selectedVenue, setSelectedVenue] = useState("");
  const [selectedArtists, setSelectedArtists] = useState<string[]>([]);

  const venues = [
    { id: "1", name: "The Gallery Space", fee: "$200" },
    { id: "2", name: "Downtown Co-Working Hub", fee: "$150" },
    { id: "3", name: "Riverside Art Gallery", fee: "$250" },
  ];

  const artists = [
    { id: "1", name: "Luna Rivers", genre: "Indie Folk" },
    { id: "2", name: "The Neon Collective", genre: "Alternative Rock" },
    { id: "3", name: "Maya's Melody", genre: "Jazz" },
    { id: "4", name: "Sunset Drive", genre: "Pop" },
    { id: "5", name: "Echo Chamber", genre: "Electronic" },
  ];

  const toggleArtist = (artistId: string) => {
    setSelectedArtists(prev => 
      prev.includes(artistId) 
        ? prev.filter(id => id !== artistId)
        : [...prev, artistId]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Link to="/admin/dashboard">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="text-4xl font-bold mb-2">Create New Showcase</h1>
            <p className="text-muted-foreground">Build and publish your next event</p>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                    step >= i ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}>
                    {i}
                  </div>
                  {i < 4 && <div className={`h-px w-16 ${step > i ? 'bg-primary' : 'bg-muted'}`} />}
                </div>
              ))}
            </div>
          </div>

          {step === 1 && (
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <CardTitle>Step 1: Select Date & Time</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Event Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="start-time">Start Time</Label>
                    <Input id="start-time" type="time" defaultValue="19:00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end-time">End Time</Label>
                    <Input id="end-time" type="time" defaultValue="22:00" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="theme">Showcase Theme/Title</Label>
                  <Input id="theme" placeholder="e.g., Acoustic Night Vol. 1" />
                </div>
                <Button className="w-full" onClick={() => setStep(2)}>
                  Continue to Venue Selection
                </Button>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <CardTitle>Step 2: Select Venue</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Choose a Vetted Venue</Label>
                  <Select value={selectedVenue} onValueChange={setSelectedVenue}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a venue" />
                    </SelectTrigger>
                    <SelectContent>
                      {venues.map((venue) => (
                        <SelectItem key={venue.id} value={venue.id}>
                          {venue.name} - Rental Fee: {venue.fee}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {selectedVenue && (
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm font-medium mb-1">Venue Details</p>
                    <p className="text-sm text-muted-foreground">
                      {venues.find(v => v.id === selectedVenue)?.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Rental Fee: {venues.find(v => v.id === selectedVenue)?.fee}
                    </p>
                  </div>
                )}
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button className="flex-1" onClick={() => setStep(3)} disabled={!selectedVenue}>
                    Continue to Artist Selection
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Music className="h-5 w-5" />
                  <CardTitle>Step 3: Select Artists (3-4)</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Choose Your Lineup</Label>
                  <div className="space-y-2">
                    {artists.map((artist) => (
                      <div key={artist.id} className="flex items-center space-x-2 p-3 border rounded-lg">
                        <Checkbox 
                          id={artist.id}
                          checked={selectedArtists.includes(artist.id)}
                          onCheckedChange={() => toggleArtist(artist.id)}
                        />
                        <label
                          htmlFor={artist.id}
                          className="flex-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {artist.name} <span className="text-muted-foreground">• {artist.genre}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Selected: {selectedArtists.length} of 3-4 artists
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    Back
                  </Button>
                  <Button 
                    className="flex-1" 
                    onClick={() => setStep(4)}
                    disabled={selectedArtists.length < 3 || selectedArtists.length > 4}
                  >
                    Continue to Pricing
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 4 && (
            <Card>
              <CardHeader>
                <CardTitle>Step 4: Set Price & Publish</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="ticket-price">Ticket Price</Label>
                  <Input id="ticket-price" type="number" placeholder="15" />
                  <p className="text-sm text-muted-foreground">
                    Recommended: $10-$20 for emerging artists
                  </p>
                </div>
                
                <div className="p-4 bg-muted rounded-lg space-y-2">
                  <p className="font-semibold">Showcase Summary</p>
                  <p className="text-sm">Venue: {venues.find(v => v.id === selectedVenue)?.name}</p>
                  <p className="text-sm">Artists: {selectedArtists.length} selected</p>
                  <p className="text-sm">Venue Fee: {venues.find(v => v.id === selectedVenue)?.fee}</p>
                  <p className="text-sm text-muted-foreground">
                    Artists will receive profit-share after venue fee and platform costs
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setStep(3)}>
                    Back
                  </Button>
                  <Link to="/admin/dashboard" className="flex-1">
                    <Button className="w-full">
                      Publish Showcase
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default CreateShowcase;
