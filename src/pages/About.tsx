import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Eye, Award, TrendingUp, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import aboutTeam from "@/assets/about-team.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We believe in honest, transparent communication and ethical SEO practices.",
    },
    {
      icon: TrendingUp,
      title: "Results-Driven",
      description: "Your success is our success. We focus on measurable outcomes.",
    },
    {
      icon: Users,
      title: "Client-First",
      description: "Every strategy is tailored to your unique business needs and goals.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every campaign we execute.",
    },
  ];

  const timeline = [
    { year: "2018", event: "Founded TatheerPro LTD with a vision to help local businesses" },
    { year: "2019", event: "Reached 100+ satisfied clients across Pakistan" },
    { year: "2021", event: "Expanded services to include full digital marketing" },
    { year: "2022", event: "Achieved 95% client success rate in top 3 rankings" },
    { year: "2024", event: "Serving 500+ businesses with proven local SEO strategies" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About TatheerPro LTD</h1>
            <p className="text-xl text-muted-foreground">
              Your trusted partner in Google Business Profile optimization and local SEO success
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                TatheerPro LTD was founded in 2018 with a simple mission: help local businesses thrive in the digital age. We saw countless talented business owners struggling to get noticed online, despite offering excellent products and services.
              </p>
              <p className="text-muted-foreground mb-4">
                What started as a small team of passionate SEO specialists has grown into a leading local SEO agency in Pakistan. We've helped over 500 businesses dominate their local markets through strategic Google Business Profile optimization and proven ranking techniques.
              </p>
              <p className="text-muted-foreground mb-6">
                Today, we're proud to maintain a 95% success rate in getting our clients into the top 3 local search positions. Our commitment to transparency, results, and client success remains unwavering.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-primary">
                  Start Your Success Story
                </Button>
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={aboutTeam} alt="TatheerPro Team" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardHeader>
                <Target className="h-12 w-12 mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-90">
                  To empower local businesses with cutting-edge local SEO strategies that drive real growth. We're committed to making professional digital marketing accessible and affordable for businesses of all sizes.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary">
              <CardHeader>
                <Eye className="h-12 w-12 mb-4 text-primary" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To become Pakistan's most trusted local SEO agency, known for delivering consistent results and exceptional client service. We envision a future where every local business can compete effectively online.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Makes Us Different</h2>
          </div>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Proven Track Record</h3>
                <p className="text-muted-foreground">
                  With over 500 successful campaigns and a 95% success rate, we don't just promise results—we deliver them consistently. Our data-driven approach ensures every strategy is optimized for maximum impact.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Transparent Reporting</h3>
                <p className="text-muted-foreground">
                  No hidden tactics or vague promises. You'll receive detailed monthly reports showing exactly where you rank, how much traffic you're getting, and what actions we've taken to improve your visibility.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Affordable Excellence</h3>
                <p className="text-muted-foreground">
                  Professional local SEO shouldn't break the bank. Our packages are designed to deliver maximum value at prices that make sense for local businesses, starting from just PKR 5,000/month.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Always Available</h3>
                <p className="text-muted-foreground">
                  Questions? Concerns? Need an update? Our team is available 24/7 via WhatsApp to ensure you're never left in the dark about your campaign's progress.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">Milestones that shaped TatheerPro</p>
          </div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-primary">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary mt-2"></div>
                <div className="flex-1">
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-foreground">{item.event}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">Expert professionals dedicated to your success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl text-primary-foreground font-bold">MK</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">Muhammad Khan</h3>
                <p className="text-sm text-primary mb-2">Founder & CEO</p>
                <p className="text-sm text-muted-foreground">Local SEO Expert with 8+ years experience</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl text-primary-foreground font-bold">SA</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">Sara Ahmed</h3>
                <p className="text-sm text-primary mb-2">Head of Operations</p>
                <p className="text-sm text-muted-foreground">Specializes in GBP optimization strategies</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl text-primary-foreground font-bold">AI</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">Ali Imran</h3>
                <p className="text-sm text-primary mb-2">Lead Technical Specialist</p>
                <p className="text-sm text-muted-foreground">Expert in technical SEO and analytics</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Certifications & Partners</h2>
            <p className="text-lg text-muted-foreground">Trusted and verified professionals</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="text-center p-6">
              <Award className="h-12 w-12 text-primary mx-auto mb-2" />
              <p className="text-sm font-semibold text-foreground">Google Certified</p>
            </Card>
            <Card className="text-center p-6">
              <Award className="h-12 w-12 text-primary mx-auto mb-2" />
              <p className="text-sm font-semibold text-foreground">Local SEO Expert</p>
            </Card>
            <Card className="text-center p-6">
              <Award className="h-12 w-12 text-primary mx-auto mb-2" />
              <p className="text-sm font-semibold text-foreground">Digital Marketing Pro</p>
            </Card>
            <Card className="text-center p-6">
              <Award className="h-12 w-12 text-primary mx-auto mb-2" />
              <p className="text-sm font-semibold text-foreground">Verified Partner</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Work With Us?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of successful businesses that trust TatheerPro for their local SEO needs
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-primary shadow-blue">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
