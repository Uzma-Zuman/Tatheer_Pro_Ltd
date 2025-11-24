import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import blogMapsRanking from "@/assets/blog-maps-ranking.jpg";
import blogMistakes from "@/assets/blog-mistakes.jpg";
import blogLocalBusiness from "@/assets/blog-local-business.jpg";

const Blog = () => {
  const posts = [
    {
      image: blogMapsRanking,
      title: "How Google Maps Ranking Helps Local Businesses Grow",
      excerpt: "Discover why ranking on Google Maps is crucial for local businesses and how it can dramatically increase your customer calls, visits, and revenue in 2024.",
      category: "Local SEO",
      author: "Muhammad Khan",
      date: "January 15, 2024",
      readTime: "5 min read",
      content: `
In today's digital age, having a strong presence on Google Maps is no longer optional for local businesses—it's essential. Here's why Google Maps ranking matters and how it can transform your business.

### Why Google Maps Ranking Matters

When customers search for services "near me" or in their area, Google displays the "Local Pack"—the top 3 businesses that appear with a map. These three spots get the majority of clicks and calls.

**Statistics that prove it:**
- 76% of people who search on their phones for something nearby visit a business within 24 hours
- 28% of those searches result in a purchase
- 50% of mobile searchers visit a store within one day

### How Google Determines Rankings

Google uses several factors to rank businesses in local search:

1. **Relevance** - How well your GBP matches the search query
2. **Distance** - How far your business is from the searcher
3. **Prominence** - How well-known and authoritative your business is

### Benefits of Top Rankings

**Increased Visibility:**
Your business appears at the top of search results before organic listings and paid ads.

**More Phone Calls:**
Customers can call directly from the map listing with one click.

**Higher Trust:**
Being in the top 3 positions signals credibility and quality to potential customers.

**Better ROI:**
Local SEO costs less than traditional advertising and delivers more targeted traffic.

### Success Stories

One of our restaurant clients saw a 320% increase in phone calls within 60 days of optimizing their Google Business Profile. They went from position #8 to #1 for key search terms like "best restaurant near me."

### Getting Started

To improve your Google Maps ranking:

1. Claim and verify your Google Business Profile
2. Optimize your business information completely
3. Get high-quality customer reviews
4. Build local citations and backlinks
5. Post regular updates and photos

Don't let your competitors dominate local search. Start optimizing your Google Maps presence today!
      `,
    },
    {
      image: blogMistakes,
      title: "Top 10 Google Business Profile Mistakes to Avoid",
      excerpt: "Are you making these common GBP mistakes that hurt your rankings? Learn what to avoid and how to fix these issues to maximize your local SEO performance.",
      category: "Google Business",
      author: "Sara Ahmed",
      date: "January 10, 2024",
      readTime: "7 min read",
      content: `
Your Google Business Profile is your digital storefront. Making mistakes can cost you customers. Here are the top 10 mistakes we see businesses make—and how to fix them.

### 1. Incomplete Profile Information

**The Mistake:** Leaving fields blank or partially filled.

**Why It Hurts:** Google prioritizes complete profiles. Missing information = lost ranking opportunities.

**The Fix:** Fill out every single field: business name, address, phone, website, hours, services, description, and attributes.

### 2. Wrong Business Category

**The Mistake:** Choosing a vague or incorrect primary category.

**Why It Hurts:** Categories determine which searches you appear in. Wrong category = wrong customers (or no customers).

**The Fix:** Research your competitors' categories. Choose the most specific primary category that matches your main service.

### 3. Inconsistent NAP (Name, Address, Phone)

**The Mistake:** Different business information across various platforms.

**Why It Hurts:** Confuses Google and customers. Damages trust and rankings.

**The Fix:** Use identical NAP information everywhere—website, directories, social media.

### 4. No or Poor Quality Photos

**The Mistake:** Using no photos, blurry images, or stock photos.

**Why It Hurts:** Photos increase engagement by 35%. Poor images hurt credibility.

**The Fix:** Upload high-resolution photos of your storefront, interior, products, team, and work examples.

### 5. Ignoring Reviews

**The Mistake:** Not responding to customer reviews (good or bad).

**Why It Hurts:** Shows you don't care about customers. Affects rankings and conversions.

**The Fix:** Respond to ALL reviews within 24-48 hours. Thank positive reviewers. Address negative reviews professionally.

### 6. Keyword Stuffing in Business Name

**The Mistake:** Adding keywords to your business name (e.g., "Khan Restaurant Best Biryani Lahore").

**Why It Hurts:** Violates Google's guidelines. Can result in suspension.

**The Fix:** Use your real, registered business name only.

### 7. Not Posting Regular Updates

**The Mistake:** Creating your profile once and forgetting about it.

**Why It Hurts:** Google favors active businesses. Posts keep you visible.

**The Fix:** Post updates, offers, events, and news at least once per week.

### 8. Wrong Business Hours

**The Mistake:** Outdated or incorrect operating hours.

**Why It Hurts:** Frustrated customers who show up when you're closed leave bad reviews.

**The Fix:** Update hours immediately when they change. Mark special hours for holidays.

### 9. No Services or Products Listed

**The Mistake:** Leaving the services/products section empty.

**Why It Hurts:** Customers don't know what you offer. Google can't match you to relevant searches.

**The Fix:** Add detailed descriptions of all your services/products with keywords.

### 10. Not Tracking Performance

**The Mistake:** Never checking your GBP insights.

**Why It Hurts:** You don't know what's working or what needs improvement.

**The Fix:** Check insights monthly. Track searches, views, actions, and adjust your strategy.

### Conclusion

Avoiding these mistakes can dramatically improve your local search visibility. If you're making any of these errors, fix them today!

Need help optimizing your Google Business Profile? Contact TatheerPro for a free audit.
      `,
    },
    {
      image: blogLocalBusiness,
      title: "Why Every Shop Should Have a Google Business Profile",
      excerpt: "Still running your business without a Google Business Profile? You're losing customers to competitors every single day. Here's why GBP is non-negotiable in 2024.",
      category: "Business Growth",
      author: "Ali Imran",
      date: "January 5, 2024",
      readTime: "6 min read",
      content: `
If your shop doesn't have a Google Business Profile, you're invisible to most potential customers. Here's why GBP is essential for every local business.

### The Reality of Local Search

**46% of all Google searches are looking for local information.** When someone searches "shoe shop near me" or "best plumber in Lahore," Google shows businesses with optimized GBP listings first.

Without a GBP, you simply don't exist in these searches.

### What is Google Business Profile?

Google Business Profile (formerly Google My Business) is a free tool that lets you manage how your business appears on Google Search and Maps.

It's like a mini-website that shows:
- Your business name and address
- Phone number and website
- Operating hours
- Photos of your business
- Customer reviews
- Your location on the map

### Why Your Shop Needs GBP Today

#### 1. Free Visibility

Unlike ads, GBP is completely free. Once optimized, it generates organic traffic without ongoing costs.

#### 2. Customers Find You Easily

When customers search for services you offer, you appear on Google Maps with directions, making it easy for them to visit.

#### 3. Build Trust Through Reviews

Customer reviews on your GBP listing build credibility. 88% of consumers trust online reviews as much as personal recommendations.

#### 4. Mobile-First Marketing

70% of searches happen on mobile. Your GBP listing is optimized for mobile, allowing customers to call or visit with one tap.

#### 5. Stand Out from Competitors

If your competitor has a GBP and you don't, they're getting YOUR customers. It's that simple.

### Real Business Impact

**Case Study: Local Bakery**

A small bakery in Karachi created their GBP in October 2023. Within 60 days:
- 3,200+ people viewed their listing
- 450+ people clicked for directions
- 180+ phone calls from new customers
- Revenue increased by 45%

**Total cost? Zero rupees.**

### What Customers See Without GBP

Without a GBP, when customers search for your business:
- No map listing
- No photos
- No reviews
- No operating hours
- No easy way to contact you

They simply move on to a competitor.

### Getting Started is Easy

Setting up your GBP takes just 30 minutes:

1. Go to google.com/business
2. Enter your business information
3. Verify your business (phone, email, or postcard)
4. Add photos and details
5. Start getting customers!

### Common Misconceptions

**"I have a website, I don't need GBP"**
Wrong. GBP appears in local search BEFORE website listings. You need both.

**"My business is too small for GBP"**
Wrong. Small businesses benefit the most from GBP because it levels the playing field with larger competitors.

**"I don't get customers from the internet"**
Wrong. You probably do and don't realize it. 82% of smartphone users conduct "near me" searches.

### Beyond Basic Setup

Creating a GBP is just the beginning. To maximize results:

- Upload high-quality photos regularly
- Respond to every review
- Post weekly updates
- Add all your services/products
- Keep information accurate
- Monitor and improve your ranking

### The Cost of Waiting

Every day without a GBP, you lose:
- Potential customers to competitors
- Visibility in local search
- Credibility and trust
- Free marketing opportunities
- Revenue growth

### Conclusion

In 2024, having a Google Business Profile isn't optional—it's essential for survival. The question isn't "Should I create one?" but "Why haven't I created one yet?"

Don't let your competitors take your customers. Set up your GBP today, or contact TatheerPro for expert help.

**Ready to dominate local search? Get your free GBP audit from TatheerPro today!**
      `,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Expert insights, tips, and guides on local SEO and Google Business Profile optimization
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Badge className="mb-4">Featured Post</Badge>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={posts[0].image} alt={posts[0].title} className="w-full h-auto" />
            </div>
            <div>
              <Badge variant="secondary" className="mb-4">{posts[0].category}</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{posts[0].title}</h2>
              <p className="text-muted-foreground mb-6">{posts[0].excerpt}</p>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{posts[0].author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{posts[0].date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{posts[0].readTime}</span>
                </div>
              </div>
              <Button className="bg-gradient-primary">
                Read Full Article <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Latest Articles</h2>
            <p className="text-lg text-muted-foreground">Stay updated with the latest local SEO trends and tips</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <CardHeader className="flex-grow">
                  <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="text-xl mb-2 line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Browse by Category</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {["Local SEO", "Google Business", "Business Growth", "Reviews & Reputation"].map((category, idx) => (
              <Card key={idx} className="text-center p-6 hover:shadow-lg transition-all cursor-pointer">
                <p className="font-medium text-foreground">{category}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-3xl">
          <Card className="bg-gradient-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-lg opacity-90 mb-6">
                Get weekly tips, insights, and strategies delivered straight to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-foreground"
                />
                <Button variant="secondary" size="lg">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm opacity-75 mt-4">No spam. Unsubscribe anytime.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Need Help With Your Local SEO?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let our experts handle your Google Business Profile optimization while you focus on running your business
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-primary shadow-blue">
              Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
