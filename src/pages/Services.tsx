import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, TrendingUp, Globe, Star, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: "Google Business Profile Setup",
      description: "Complete GBP creation and optimization for maximum local visibility",
      features: [
        "Profile creation from scratch",
        "Verification assistance (phone, email, postcard)",
        "Category optimization (primary + secondary)",
        "SEO-optimized business description",
        "Professional photo uploads",
        "Regular posts scheduling",
        "Business hours optimization",
        "Service/product listings",
      ],
      benefits: [
        "Appear in Google Maps results",
        "Show up in Local Pack (top 3)",
        "Increase customer trust",
        "Get more phone calls and directions",
      ],
      faqs: [
        {
          question: "How long does verification take?",
          answer: "Typically 5-7 days for postcard verification, instant for phone/email when available.",
        },
        {
          question: "Can you help with suspended profiles?",
          answer: "Yes, we have experience recovering suspended or disabled GBP accounts.",
        },
      ],
    },
    {
      icon: TrendingUp,
      title: "Google Map Ranking (Local SEO)",
      description: "Dominate local search results with proven ranking strategies",
      features: [
        "Keyword research for your niche",
        "Local citation building (50+ directories)",
        "High-quality backlink creation",
        "Geo-grid ranking optimization",
        "Competitor analysis",
        "NAP consistency check",
        "Schema markup implementation",
        "Monthly ranking reports",
      ],
      benefits: [
        "Rank in top 3 positions",
        "Outrank your competitors",
        "Increase organic traffic by 300%+",
        "Get more customer calls and visits",
      ],
      faqs: [
        {
          question: "How long to see results?",
          answer: "Most clients see improvements in 2-4 weeks, with significant ranking by month 2.",
        },
        {
          question: "Do you guarantee #1 ranking?",
          answer: "While we can't guarantee specific positions, 95% of our clients reach top 3 within 60 days.",
        },
      ],
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Professional, SEO-optimized websites that convert visitors into customers",
      features: [
        "Modern, responsive design",
        "1-page business website",
        "Landing page creation",
        "Contact form integration",
        "Google Maps embed",
        "Mobile optimization",
        "Fast loading speed",
        "Basic SEO setup",
      ],
      benefits: [
        "Professional online presence",
        "Better conversion rates",
        "Improves local SEO rankings",
        "24/7 online storefront",
      ],
      faqs: [
        {
          question: "Do I need a website for GBP?",
          answer: "Not required, but having a website significantly improves your rankings and credibility.",
        },
        {
          question: "Can you redesign my existing site?",
          answer: "Yes, we offer website redesign services to improve performance and SEO.",
        },
      ],
    },
    {
      icon: Star,
      title: "Reputation Management",
      description: "Build trust and credibility through strategic review management",
      features: [
        "Review generation strategy",
        "Review response management",
        "Negative review handling",
        "Review request automation",
        "Reputation monitoring",
        "Competitor review analysis",
        "Review platform optimization",
        "Crisis management",
      ],
      benefits: [
        "Build customer trust",
        "Improve star rating",
        "Handle negative reviews professionally",
        "Increase conversions",
      ],
      faqs: [
        {
          question: "Can you remove negative reviews?",
          answer: "We can't remove legitimate reviews, but we can help you respond professionally and encourage positive reviews to outweigh them.",
        },
        {
          question: "How do you get more reviews?",
          answer: "We implement ethical review request strategies that comply with Google's guidelines.",
        },
      ],
    },
    {
      icon: Users,
      title: "Social Media Setup",
      description: "Complete social media presence for your business",
      features: [
        "Facebook Business Page creation",
        "Instagram Business setup",
        "WhatsApp Business configuration",
        "Profile optimization",
        "Cover photo design",
        "Business info setup",
        "Initial content posting",
        "Linking all platforms",
      ],
      benefits: [
        "Unified brand presence",
        "More customer touchpoints",
        "Better customer communication",
        "Enhanced credibility",
      ],
      faqs: [
        {
          question: "Do you manage social media posts?",
          answer: "Setup is included in this service. For ongoing management, please check our premium packages.",
        },
        {
          question: "Which platforms do you cover?",
          answer: "Facebook, Instagram, and WhatsApp Business are included. LinkedIn and Twitter available on request.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Comprehensive local SEO solutions designed to put your business on the map
          </p>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section
          key={index}
          className={`py-16 px-4 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/50'}`}
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>

                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>What's Included</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Link to="/pricing">
                  <Button className="bg-gradient-primary w-full sm:w-auto">
                    View Pricing <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              <div>
                <Card className="mb-6 bg-secondary">
                  <CardHeader>
                    <CardTitle>Key Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                          <span className="text-foreground font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible>
                      {service.faqs.map((faq, idx) => (
                        <AccordionItem key={idx} value={`item-${idx}`}>
                          <AccordionTrigger className="text-left text-sm">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-sm text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground">How we deliver results in 4 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <CardTitle>Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We analyze your business, competitors, and local market to create a custom strategy
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">2</span>
                </div>
                <CardTitle>Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our team optimizes your GBP, builds citations, and implements proven SEO tactics
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">3</span>
                </div>
                <CardTitle>Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We track your rankings, traffic, and calls to ensure continuous improvement
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">4</span>
                </div>
                <CardTitle>Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Monthly detailed reports showing your progress and ROI
                </CardDescription>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg mb-8 opacity-90">
                Choose the perfect service package for your business needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/pricing">
                  <Button size="lg" variant="secondary">
                    View Pricing Plans
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                    Get Free Consultation
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
