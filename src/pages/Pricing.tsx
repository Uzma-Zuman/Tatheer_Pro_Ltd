import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check, Star, Zap, Crown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type Currency = "USD" | "GBP" | "EUR" | "PKR" | "AED" | "CAD" | "AUD";

interface CurrencyInfo {
  symbol: string;
  name: string;
  rate: number; // Rate from PKR base
}

const currencies: Record<Currency, CurrencyInfo> = {
  PKR: { symbol: "PKR", name: "Pakistani Rupee", rate: 1 },
  USD: { symbol: "$", name: "US Dollar", rate: 0.0036 },
  GBP: { symbol: "£", name: "British Pound", rate: 0.0028 },
  EUR: { symbol: "€", name: "Euro", rate: 0.0033 },
  AED: { symbol: "AED", name: "UAE Dirham", rate: 0.013 },
  CAD: { symbol: "C$", name: "Canadian Dollar", rate: 0.0049 },
  AUD: { symbol: "A$", name: "Australian Dollar", rate: 0.0055 },
};

const Pricing = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>("GBP");

  const convertPrice = (pkrPrice: number): string => {
    const converted = pkrPrice * currencies[selectedCurrency].rate;
    if (selectedCurrency === "PKR") {
      return converted.toLocaleString();
    }
    return converted.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formatPrice = (price: string): string => {
    // Handle range prices like "20,000-30,000"
    if (price.includes("-")) {
      const [min, max] = price.split("-").map(p => parseInt(p.replace(/,/g, "")));
      return `${convertPrice(min)}-${convertPrice(max)}`;
    }
    return convertPrice(parseInt(price.replace(/,/g, "")));
  };

  const plans = [
    {
      name: "Basic",
      icon: Star,
      price: "5,000",
      period: "month",
      description: "Perfect for new businesses starting their local SEO journey",
      popular: false,
      features: [
        "Google Business Profile setup",
        "Basic profile optimization",
        "Business description (SEO optimized)",
        "5 professional photos",
        "Category optimization",
        "Monthly GBP post",
        "Basic reporting",
        "Email support",
      ],
      notIncluded: [
        "Citation building",
        "Backlink creation",
        "Review management",
        "Website development",
      ],
    },
    {
      name: "Standard",
      icon: Zap,
      price: "10,000",
      period: "month",
      description: "For serious businesses wanting consistent growth",
      popular: true,
      features: [
        "Everything in Basic, plus:",
        "20 local citation listings",
        "5 high-quality backlinks",
        "Weekly GBP posts",
        "Review response management",
        "Keyword tracking (10 keywords)",
        "Geo-grid ranking report",
        "Competitor analysis",
        "Priority WhatsApp support",
      ],
      notIncluded: [
        "Website development",
        "Social media setup",
      ],
    },
    {
      name: "Premium",
      icon: Crown,
      price: "20,000-30,000",
      period: "month",
      description: "Complete local domination package for ambitious businesses",
      popular: false,
      features: [
        "Everything in Standard, plus:",
        "50+ citation listings",
        "15 premium backlinks",
        "Daily GBP management",
        "Advanced review strategy",
        "Keyword tracking (25 keywords)",
        "Complete geo-grid optimization",
        "1-page website included",
        "Social media setup (FB, IG, WhatsApp)",
        "Monthly strategy calls",
        "24/7 priority support",
      ],
      notIncluded: [],
    },
  ];

  const addOns = [
    {
      name: "Website Development",
      price: "15,000",
      description: "Professional 1-page business website with SEO optimization",
    },
    {
      name: "Extra Citations",
      price: "5,000",
      description: "Additional 25 local directory listings",
    },
    {
      name: "Review Campaign",
      price: "8,000",
      description: "Dedicated review generation campaign for 1 month",
    },
    {
      name: "Additional Keywords",
      price: "2,000",
      description: "Track 10 more keywords in your monthly reports",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your business. All packages include monthly reporting and support.
          </p>
          
          {/* Currency Selector */}
          <div className="flex items-center justify-center gap-3">
            <span className="text-sm text-muted-foreground">Select Currency:</span>
            <Select value={selectedCurrency} onValueChange={(value) => setSelectedCurrency(value as Currency)}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(currencies).map(([code, info]) => (
                  <SelectItem key={code} value={code}>
                    {info.symbol} - {info.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular
                    ? 'border-2 border-primary shadow-blue transform md:-translate-y-4'
                    : 'border border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="mb-4">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-sm text-muted-foreground">{currencies[selectedCurrency].symbol}</span>
                      <span className="text-4xl font-bold text-foreground mx-2">{formatPrice(plan.price)}</span>
                      <span className="text-sm text-muted-foreground">/{plan.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 opacity-40">
                        <div className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground line-through">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? 'bg-gradient-primary shadow-blue'
                          : ''
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      Get Started <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Optional Add-ons</h2>
            <p className="text-lg text-muted-foreground">Customize your package with additional services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">{addon.name}</CardTitle>
                  <div className="flex items-baseline mt-2">
                    <span className="text-sm text-muted-foreground">{currencies[selectedCurrency].symbol}</span>
                    <span className="text-2xl font-bold text-primary mx-1">{formatPrice(addon.price)}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Compare Plans</h2>
            <p className="text-lg text-muted-foreground">See what's included in each package</p>
          </div>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-semibold text-foreground">Feature</th>
                      <th className="text-center p-4 font-semibold text-foreground">Basic</th>
                      <th className="text-center p-4 font-semibold text-foreground bg-secondary">Standard</th>
                      <th className="text-center p-4 font-semibold text-foreground">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-4 text-sm text-muted-foreground">GBP Setup & Optimization</td>
                      <td className="text-center p-4"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                      <td className="text-center p-4 bg-secondary/50"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                      <td className="text-center p-4"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 text-sm text-muted-foreground">Professional Photos</td>
                      <td className="text-center p-4 text-sm">5</td>
                      <td className="text-center p-4 bg-secondary/50 text-sm">10</td>
                      <td className="text-center p-4 text-sm">Unlimited</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 text-sm text-muted-foreground">GBP Posts</td>
                      <td className="text-center p-4 text-sm">Monthly</td>
                      <td className="text-center p-4 bg-secondary/50 text-sm">Weekly</td>
                      <td className="text-center p-4 text-sm">Daily</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 text-sm text-muted-foreground">Local Citations</td>
                      <td className="text-center p-4 text-sm">-</td>
                      <td className="text-center p-4 bg-secondary/50 text-sm">20</td>
                      <td className="text-center p-4 text-sm">50+</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 text-sm text-muted-foreground">Backlinks</td>
                      <td className="text-center p-4 text-sm">-</td>
                      <td className="text-center p-4 bg-secondary/50 text-sm">5</td>
                      <td className="text-center p-4 text-sm">15</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 text-sm text-muted-foreground">Keyword Tracking</td>
                      <td className="text-center p-4 text-sm">-</td>
                      <td className="text-center p-4 bg-secondary/50 text-sm">10</td>
                      <td className="text-center p-4 text-sm">25</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 text-sm text-muted-foreground">Review Management</td>
                      <td className="text-center p-4 text-sm">-</td>
                      <td className="text-center p-4 bg-secondary/50"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                      <td className="text-center p-4"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 text-sm text-muted-foreground">Website Included</td>
                      <td className="text-center p-4 text-sm">-</td>
                      <td className="text-center p-4 bg-secondary/50 text-sm">-</td>
                      <td className="text-center p-4"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="p-4 text-sm text-muted-foreground">Support</td>
                      <td className="text-center p-4 text-sm">Email</td>
                      <td className="text-center p-4 bg-secondary/50 text-sm">WhatsApp</td>
                      <td className="text-center p-4 text-sm">24/7 Priority</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pricing FAQs</h2>
          </div>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Are there any setup fees?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">No, all our packages include setup at no extra cost. You only pay the monthly fee.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I cancel anytime?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Yes, there are no long-term contracts. You can cancel with 30 days notice. However, we recommend staying for at least 3 months to see significant results.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer custom packages?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Absolutely! If our standard packages don't fit your needs, we can create a custom solution. Contact us for a personalized quote.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We accept bank transfer, PayPal, Stripe, and all major credit/debit cards through our secure payment gateway. We serve clients worldwide!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-primary text-primary-foreground text-center">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Dominate Local Search?</h2>
              <p className="text-lg mb-8 opacity-90">
                Start with a free consultation to find the perfect package for your business
              </p>
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
