import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TrendingUp, Star, MapPin, Globe } from "lucide-react";
import portfolioRestaurant from "@/assets/portfolio-restaurant.jpg";
import portfolioSalon from "@/assets/portfolio-salon.jpg";
import portfolioMobile from "@/assets/portfolio-mobile.jpg";
import portfolioWebsite from "@/assets/portfolio-website.jpg";

const Portfolio = () => {
  const projects = [
    {
      image: portfolioRestaurant,
      title: "Golden Restaurant - GBP Optimization",
      category: "Google Business Profile",
      client: "Fine Dining Restaurant, Lahore",
      challenge: "Ranked #8 in local search with poor visibility and few customer calls",
      solution: "Complete GBP optimization, geo-grid targeting, and review management strategy",
      results: [
        { label: "Ranking Improvement", value: "#8 → #1", color: "success" },
        { label: "Call Increase", value: "+320%", color: "success" },
        { label: "Review Growth", value: "3.8★ → 4.7★", color: "success" },
        { label: "Monthly Views", value: "+450%", color: "success" },
      ],
      keywords: [
        "Best restaurant near me",
        "Fine dining Lahore",
        "Restaurant DHA",
      ],
      timeline: "60 days",
    },
    {
      image: portfolioSalon,
      title: "Elegance Beauty Salon - Map Ranking",
      category: "Local SEO Campaign",
      client: "Beauty Salon, Karachi",
      challenge: "New business with no online presence, struggling to attract customers",
      solution: "GBP creation, citation building across 50+ directories, and targeted keyword optimization",
      results: [
        { label: "Top 3 Rankings", value: "15 Keywords", color: "success" },
        { label: "Monthly Bookings", value: "+280%", color: "success" },
        { label: "5-Star Reviews", value: "85 Reviews", color: "success" },
        { label: "Profile Views", value: "12,000/mo", color: "success" },
      ],
      keywords: [
        "Beauty salon near me",
        "Bridal makeup Karachi",
        "Hair salon Clifton",
      ],
      timeline: "45 days",
    },
    {
      image: portfolioMobile,
      title: "TechFix Mobile Repair - Local SEO Success",
      category: "Complete Local SEO",
      client: "Mobile Repair Shop, Islamabad",
      challenge: "High competition in mobile repair niche, invisible in local pack",
      solution: "Advanced local SEO with backlink building, content optimization, and technical SEO",
      results: [
        { label: "Ranking Position", value: "Top 3 Pack", color: "success" },
        { label: "Organic Traffic", value: "+400%", color: "success" },
        { label: "Store Visits", value: "+250%", color: "success" },
        { label: "Revenue Growth", value: "+180%", color: "success" },
      ],
      keywords: [
        "Mobile repair near me",
        "iPhone repair Islamabad",
        "Phone screen repair",
      ],
      timeline: "90 days",
    },
    {
      image: portfolioWebsite,
      title: "Modern Business Landing Page",
      category: "Website Development",
      client: "Digital Marketing Agency",
      challenge: "Needed professional online presence with modern design",
      solution: "Custom responsive website with SEO optimization and conversion-focused design",
      results: [
        { label: "Page Speed", value: "95/100", color: "success" },
        { label: "Mobile Score", value: "98/100", color: "success" },
        { label: "Conversion Rate", value: "+65%", color: "success" },
        { label: "Bounce Rate", value: "-40%", color: "success" },
      ],
      keywords: [
        "Responsive design",
        "SEO optimized",
        "Fast loading",
      ],
      timeline: "14 days",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Success Stories</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Real results from real businesses. See how we've helped clients dominate their local markets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm px-4 py-2">500+ Projects Completed</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">95% Success Rate</Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">4.9★ Client Rating</Badge>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Card className="overflow-hidden shadow-xl">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-auto object-cover"
                    />
                  </Card>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Badge className="mb-4">{project.category}</Badge>
                  <h2 className="text-3xl font-bold text-foreground mb-3">{project.title}</h2>
                  <p className="text-muted-foreground mb-6">{project.client}</p>

                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-primary" />
                        Challenge
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{project.challenge}</p>
                    </CardContent>
                  </Card>

                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                        Our Solution
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{project.solution}</p>
                    </CardContent>
                  </Card>

                  <Card className="mb-6 bg-secondary">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <Star className="h-5 w-5 mr-2 text-primary" />
                        Results Achieved
                      </CardTitle>
                      <CardDescription>Timeline: {project.timeline}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        {project.results.map((result, idx) => (
                          <div key={idx}>
                            <div className="text-2xl font-bold text-primary mb-1">{result.value}</div>
                            <div className="text-sm text-muted-foreground">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <Globe className="h-5 w-5 mr-2 text-primary" />
                        Ranking Keywords
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.keywords.map((keyword, idx) => (
                          <Badge key={idx} variant="outline">{keyword}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Track Record</h2>
            <p className="text-lg text-muted-foreground">Numbers that speak for themselves</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Top 3 Rankings</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Keywords Ranked</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-4xl font-bold text-primary mb-2">4.9★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground">Expertise across diverse business sectors</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Restaurants & Cafes",
              "Beauty & Salons",
              "Medical & Healthcare",
              "Retail Stores",
              "Auto Repair",
              "Home Services",
              "Legal Services",
              "Fitness Centers",
              "Real Estate",
              "Education",
              "Technology",
              "Construction",
            ].map((industry, idx) => (
              <Card key={idx} className="text-center p-4 hover:shadow-lg transition-all">
                <p className="text-sm font-medium text-foreground">{industry}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
