import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GuidesSection = () => {
  const [buyerEmail, setBuyerEmail] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [buyerSubmitted, setBuyerSubmitted] = useState(false);
  const [sellerSubmitted, setSellerSubmitted] = useState(false);
  const { toast } = useToast();

  const handleBuyerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (buyerEmail) {
      setBuyerSubmitted(true);
      toast({
        title: "Success!",
        description: "Your Buyer's Guide has been sent to your email.",
      });
      setBuyerEmail("");
    }
  };

  const handleSellerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (sellerEmail) {
      setSellerSubmitted(true);
      toast({
        title: "Success!",
        description: "Your Seller's Guide has been sent to your email.",
      });
      setSellerEmail("");
    }
  };

  return (
    <section id="guides" className="section-padding bg-secondary/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-6">Helpful Guides</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Get expert insights and step-by-step guidance for your real estate journey. 
            Download our comprehensive guides to make informed decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* For Buyers */}
          <div className="card-elevated p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">For Buyers</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Everything you need to know about buying your dream home in Ontario. 
              From pre-approval to closing day, we've got you covered with insider tips and expert advice.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-accent w-5 h-5" />
                <span>Understanding the buying process</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-accent w-5 h-5" />
                <span>Mortgage pre-approval guide</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-accent w-5 h-5" />
                <span>Home inspection checklist</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-accent w-5 h-5" />
                <span>Negotiation strategies</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-accent w-5 h-5" />
                <span>Closing day preparation</span>
              </li>
            </ul>

            <div className="bg-primary/5 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-4">Get Your Free Buyer's Guide</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Sign up to receive your comprehensive buyer's guide instantly
              </p>
              
              {buyerSubmitted ? (
                <div className="flex items-center gap-2 text-accent">
                  <CheckCircle className="w-5 h-5" />
                  <span>Guide sent successfully!</span>
                </div>
              ) : (
                <form onSubmit={handleBuyerSubmit} className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button type="submit" className="btn-hero">
                    <Mail className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* For Sellers */}
          <div className="card-elevated p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">For Sellers</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Maximize your home's value and sell faster with our proven strategies. 
              Learn how to prepare your home for the market and attract serious buyers.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-accent w-5 h-5" />
                <span>Home staging essentials</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-accent w-5 h-5" />
                <span>Pricing strategies</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-accent w-5 h-5" />
                <span>Marketing your property</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-accent w-5 h-5" />
                <span>Preparing for showings</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-accent w-5 h-5" />
                <span>Understanding offers</span>
              </li>
            </ul>

            <div className="bg-primary/5 p-6 rounded-lg">
              <h4 className="font-semibold text-primary mb-4">Get Your Free Seller's Guide</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Sign up to receive your comprehensive seller's guide instantly
              </p>
              
              {sellerSubmitted ? (
                <div className="flex items-center gap-2 text-accent">
                  <CheckCircle className="w-5 h-5" />
                  <span>Guide sent successfully!</span>
                </div>
              ) : (
                <form onSubmit={handleSellerSubmit} className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={sellerEmail}
                    onChange={(e) => setSellerEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button type="submit" className="btn-hero">
                    <Mail className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidesSection;