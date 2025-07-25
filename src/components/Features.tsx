import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Shield, Zap, DollarSign, Users } from "lucide-react";

const Features = () => {
  const vendorFeatures = [
    {
      icon: <MapPin className="w-8 h-8 text-market-green" />,
      title: "Location-Based Matching",
      description: "Connect with markets in your area for easy delivery and pickup"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-market-orange" />,
      title: "Fair Pricing",
      description: "Set your own prices and negotiate directly with market owners"
    },
    {
      icon: <Clock className="w-8 h-8 text-fresh-lime" />,
      title: "Real-Time Updates",
      description: "Update your inventory and availability instantly"
    }
  ];

  const marketFeatures = [
    {
      icon: <Shield className="w-8 h-8 text-market-green" />,
      title: "Quality Assurance",
      description: "Review vendor profiles and product quality before connecting"
    },
    {
      icon: <Zap className="w-8 h-8 text-market-orange" />,
      title: "Quick Supply",
      description: "Find fresh produce suppliers when you need them most"
    },
    {
      icon: <Users className="w-8 h-8 text-fresh-lime" />,
      title: "Community Network",
      description: "Build relationships with local vendors and support your community"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Built for Everyone
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tailored features for vendors and markets to create the perfect marketplace ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vendor Features */}
          <div>
            <h3 className="text-3xl font-bold text-market-green mb-8 text-center">For Vendors</h3>
            <div className="space-y-6">
              {vendorFeatures.map((feature, index) => (
                <Card key={index} className="border-l-4 border-l-market-green shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-2">{feature.title}</CardTitle>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Market Features */}
          <div>
            <h3 className="text-3xl font-bold text-market-orange mb-8 text-center">For Markets</h3>
            <div className="space-y-6">
              {marketFeatures.map((feature, index) => (
                <Card key={index} className="border-l-4 border-l-market-orange shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-2">{feature.title}</CardTitle>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;