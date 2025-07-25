import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Leaf } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-market-green/10 to-fresh-lime/10">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto overflow-hidden shadow-2xl border-0">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-market-green to-fresh-lime p-12 text-white text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full">
                  <Leaf className="w-12 h-12" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to Connect?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Join thousands of vendors and markets already building stronger communities through fresh, local produce.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-white text-market-green border-white hover:bg-white/90 hover:text-market-green text-lg px-8 py-4"
                >
                  Start as Vendor
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-transparent text-white border-white hover:bg-white hover:text-market-green text-lg px-8 py-4"
                >
                  Register Market
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-white/80">
                  Questions? Contact us at{" "}
                  <a href="mailto:hello@bazaarconnect.com" className="text-white underline hover:text-market-orange transition-colors">
                    hello@bazaarconnect.com
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CallToAction;