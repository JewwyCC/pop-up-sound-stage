import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Calendar, DollarSign, Shield } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Curated Quality",
    description: "Every artist and venue is hand-vetted to ensure high-quality experiences for everyone."
  },
  {
    icon: Calendar,
    title: "Easy Booking",
    description: "Artists apply with one click. Venues accept bookings in seconds. Fans buy tickets instantly."
  },
  {
    icon: DollarSign,
    title: "Fair Payouts",
    description: "Artists get paid through profit-sharing. Venues earn guaranteed rental fees. Everyone wins."
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Secure payments, verified venues, and trusted experiences powered by Stripe."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How Showcase Works
          </h2>
          <p className="text-lg text-muted-foreground">
            We handle everything from curation to logistics, so artists can focus on performing, 
            venues can earn effortlessly, and fans can discover amazing music.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-2 hover:border-primary/50 hover:shadow-elegant transition-all duration-300 bg-gradient-card"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-hero flex items-center justify-center mb-4 shadow-glow">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
