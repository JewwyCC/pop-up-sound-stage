import { Button } from "@/components/ui/button";
import { Music, MapPin, Users } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTE4IDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTAtMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-6 py-2 mb-8">
            <Music className="h-4 w-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">
              Connecting Artists, Venues & Fans
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Discover Live Music
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary-foreground">
              In Unique Spaces
            </span>
          </h1>
          
          <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Showcase connects emerging musicians with local audiences through intimate pop-up concerts in non-traditional venues. 
            Book your next gig, host an event, or discover your new favorite artist.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6 shadow-glow hover:shadow-elegant transition-all duration-300"
            >
              Browse Showcases
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
            >
              Get Started
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 hover:bg-primary-foreground/15 transition-all duration-300">
              <Music className="h-10 w-10 text-secondary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">For Artists</h3>
              <p className="text-sm text-primary-foreground/70">
                Get booked for paid gigs with zero hassle
              </p>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 hover:bg-primary-foreground/15 transition-all duration-300">
              <MapPin className="h-10 w-10 text-secondary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">For Venues</h3>
              <p className="text-sm text-primary-foreground/70">
                Earn revenue from your space, zero overhead
              </p>
            </div>
            
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 hover:bg-primary-foreground/15 transition-all duration-300">
              <Users className="h-10 w-10 text-secondary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">For Fans</h3>
              <p className="text-sm text-primary-foreground/70">
                Discover affordable, unique live music experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
