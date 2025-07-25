import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Store, Handshake, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Users className="w-12 h-12 text-market-green" />,
      title: "Vendors Register",
      description: "Street vendors sign up and showcase their fresh produce with photos and prices."
    },
    {
      icon: <Store className="w-12 h-12 text-market-orange" />,
      title: "Markets Join",
      description: "Local vegetable markets register to connect with nearby vendors and expand their supply."
    },
    {
      icon: <Handshake className="w-12 h-12 text-fresh-lime" />,
      title: "Smart Matching",
      description: "Our platform connects vendors with markets based on location, quantity, and quality needs."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-earth-brown" />,
      title: "Grow Together",
      description: "Build lasting partnerships that benefit vendors, markets, and the entire community."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple steps to connect the freshest produce with the right markets
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-background rounded-full shadow-md">
                  {step.icon}
                </div>
                <CardTitle className="text-xl text-foreground">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-market-green to-fresh-lime"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;