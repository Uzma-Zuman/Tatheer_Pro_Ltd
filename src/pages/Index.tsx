import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, MapPin, Star, TrendingUp, Users, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroMockup from "@/assets/hero-mockup.jpg";
import portfolioRestaurant from "@/assets/portfolio-restaurant.jpg";
import portfolioSalon from "@/assets/portfolio-salon.jpg";

const Index = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/923001234567", "_blank");
  };

  const services = [
    {
      icon: MapPin,
      title: "Google Business Profile Setup",
      description: "Complete profile creation, verification, and optimization for maximum visibility.",
    },
    {
      icon: TrendingUp,
      title: "Google Map Ranking",
      description: "Boost your local rankings with proven SEO strategies and geo-grid optimization.",
    },
    {
      icon: Star,
      title: "Reputation Management",
      description: "Build trust with strategic review management and response handling.",
    },
    {
      icon: Users,
      title: "Website Development",
      description: "Professional landing pages and websites optimized for conversions.",
    },
  ];

  const testimonials = [
    {
      name: "Ahmed Khan",
      business: "Golden Restaurant",
      text: "Our calls increased by 300% in just 2 months! TatheerPro delivered amazing results.",
      rating: 5,
    },
    {
      name: "Sara Ali",
      business: "Beauty Lounge",
      text: "Finally ranking #1 in local search. The team is professional and results-driven.",
      rating: 5,
    },
    {
      name: "Bilal Ahmed",
      business: "Tech Repair Shop",
      text: "Best investment for my business. More customers finding us on Google Maps daily.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "What is Google Business Profile optimization?",
      answer: "It's the process of creating and optimizing your business listing on Google to appear in local search results and Google Maps, helping more customers find you.",
    },
    {
      question: "How long does it take to see results?",
      answer: "Most clients see improvements within 2-4 weeks, with significant ranking improvements by the 2nd month. Results vary based on competition and location.",
    },
    {
      question: "Do you guarantee first page ranking?",
      answer: "While we can't guarantee specific rankings due to Google's algorithm, we use proven strategies that have helped 95% of our clients reach top 3 positions in their area.",
    },
    {
      question: "What's included in your packages?",
      answer: "All packages include GBP optimization, keyword research, photo optimization, post management, and monthly reporting. Premium packages add citation building and review management.",
    },
    {
      question: "Do I need a website?",
      answer: "While not required, a website significantly improves your ranking. We offer affordable website development as part of our services.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Grow Your Business with <span className="text-primary">Google Maps</span> Ranking
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                TatheerPro LTD helps local businesses get more calls, visits, and sales through expert Google Business Profile optimization and local SEO strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-primary shadow-blue">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" onClick={handleWhatsApp}>
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-8">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">4.9★</div>
                  <div className="text-sm text-muted-foreground">Client Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={heroMockup} alt="Google Business Profile Dashboard" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive local SEO solutions to dominate your market
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why Choose TatheerPro?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Proven Results</h3>
                    <p className="text-muted-foreground">95% of our clients reach top 3 rankings within 60 days</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Transparent Reporting</h3>
                    <p className="text-muted-foreground">Monthly detailed reports showing your ranking improvements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Expert Team</h3>
                    <p className="text-muted-foreground">Certified specialists with 5+ years in local SEO</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Affordable Pricing</h3>
                    <p className="text-muted-foreground">Packages starting from just PKR 5,000/month</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">24/7 Support</h3>
                    <p className="text-muted-foreground">Always available via WhatsApp for quick assistance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Businesses Helped</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Keywords Ranked</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">300%</div>
                <div className="text-sm text-muted-foreground">Avg. Call Increase</div>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <img src={portfolioRestaurant} alt="Restaurant GBP Success" className="w-full h-64 object-cover" />
              <CardHeader>
                <CardTitle>Restaurant GBP Optimization</CardTitle>
                <CardDescription>Increased from position #8 to #1 in local search</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Calls increased:</span>
                  <span className="font-semibold text-primary">+320%</span>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <img src={portfolioSalon} alt="Beauty Salon Success" className="w-full h-64 object-cover" />
              <CardHeader>
                <CardTitle>Beauty Salon Map Ranking</CardTitle>
                <CardDescription>Achieved top 3 placement across 15 keywords</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Reviews gained:</span>
                  <span className="font-semibold text-primary">+85 (5★)</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button size="lg" className="bg-gradient-primary">
                View All Case Studies <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">Trusted by businesses across Pakistan</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.business}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Everything you need to know about our services</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-primary text-primary-foreground overflow-hidden">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Dominate Local Search?</h2>
              <p className="text-lg mb-8 opacity-90">
                Get a free consultation and discover how we can boost your business visibility
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" variant="secondary">
                    Get Free Consultation
                  </Button>
                </Link>
                <Button size="lg" variant="outline" onClick={handleWhatsApp} className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
