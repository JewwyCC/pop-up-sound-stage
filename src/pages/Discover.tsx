import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Music, Ticket } from "lucide-react";

// Mock data for showcases
const showcases = [
  {
    id: 1,
    title: "Acoustic Night",
    date: "November 15, 2025",
    time: "7:00 PM",
    venue: "The Art Loft",
    location: "Downtown District",
    price: 15,
    artists: ["Indie Iris", "Acoustic Andy", "Sarah's Strings"],
    genre: "Acoustic",
    capacity: 50,
    soldOut: false
  },
  {
    id: 2,
    title: "Electric Dreams",
    date: "November 22, 2025",
    time: "8:00 PM",
    venue: "Studio Space Co-Work",
    location: "Arts Quarter",
    price: 20,
    artists: ["Synth Sarah", "Beat Baron", "Digital Dave"],
    genre: "Electronic",
    capacity: 75,
    soldOut: false
  },
  {
    id: 3,
    title: "Jazz & Chill",
    date: "November 18, 2025",
    time: "6:30 PM",
    venue: "Gallery 42",
    location: "Riverside",
    price: 18,
    artists: ["Jazz Jamie", "Smooth Sam", "Piano Pete"],
    genre: "Jazz",
    capacity: 40,
    soldOut: true
  }
];

const Discover = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Discover Showcases
              </h1>
              <p className="text-xl text-muted-foreground">
                Find your next favorite live music experience in unique venues around the city
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {showcases.map((showcase) => (
                <Card 
                  key={showcase.id}
                  className="hover:shadow-elegant transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-card overflow-hidden group"
                >
                  <div className="h-48 bg-gradient-hero relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTE4IDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTAtMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-50 group-hover:opacity-70 transition-opacity"></div>
                    <div className="absolute top-4 right-4">
                      <Badge variant={showcase.soldOut ? "secondary" : "default"} className="shadow-lg">
                        {showcase.soldOut ? "Sold Out" : "Available"}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground border-primary-foreground/30">
                        {showcase.genre}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-2xl mb-2">{showcase.title}</CardTitle>
                    <CardDescription className="space-y-2">
                      <div className="flex items-center gap-2 text-base">
                        <Calendar className="h-4 w-4" />
                        <span>{showcase.date} • {showcase.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-base">
                        <MapPin className="h-4 w-4" />
                        <span>{showcase.venue} • {showcase.location}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Music className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Featured Artists</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {showcase.artists.map((artist, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {artist}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <div className="flex items-center gap-1">
                          <Ticket className="h-4 w-4 text-muted-foreground" />
                          <span className="text-2xl font-bold">${showcase.price}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {showcase.capacity} capacity
                        </span>
                      </div>
                      <Button 
                        size="sm" 
                        disabled={showcase.soldOut}
                        className="shadow-glow hover:shadow-elegant transition-all"
                      >
                        {showcase.soldOut ? "Sold Out" : "Get Tickets"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Discover;
