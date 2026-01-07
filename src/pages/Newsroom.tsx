import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const newsItems = [
  {
    category: 'Announcement',
    date: 'January 5, 2024',
    title: 'New Cardiac Catheterization Lab Opens',
    excerpt: 'Our state-of-the-art cardiac catheterization laboratory is now operational, bringing advanced heart care closer to our community.',
    featured: true,
  },
  {
    category: 'Research',
    date: 'December 20, 2023',
    title: 'Clinical Trial for New Cancer Treatment',
    excerpt: 'HealthCare Regional is participating in a groundbreaking clinical trial for a new immunotherapy treatment for lung cancer.',
    featured: false,
  },
  {
    category: 'Community',
    date: 'December 15, 2023',
    title: 'Free Health Screening Event Success',
    excerpt: 'Over 500 community members received free health screenings at our annual wellness event held last weekend.',
    featured: false,
  },
  {
    category: 'Recognition',
    date: 'December 1, 2023',
    title: "Top 100 Hospitals Award",
    excerpt: "We're proud to announce our inclusion in the national Top 100 Hospitals list for the third consecutive year.",
    featured: false,
  },
  {
    category: 'Technology',
    date: 'November 25, 2023',
    title: 'New MRI Technology Reduces Scan Time',
    excerpt: 'Our radiology department has introduced advanced MRI technology that cuts scan times by 50% while improving image quality.',
    featured: false,
  },
  {
    category: 'Staff',
    date: 'November 15, 2023',
    title: 'Dr. Sarah Chen Joins Oncology Team',
    excerpt: 'Renowned oncologist Dr. Sarah Chen brings 20 years of experience to our expanding cancer care program.',
    featured: false,
  },
];

const Newsroom = () => {
  const featuredNews = newsItems.find(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="healthcare-hero-gradient py-20">
        <div className="healthcare-container text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 animate-slide-up">
            Newsroom
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Stay updated with the latest news, announcements, and developments 
            from HealthCare Regional Medical Center.
          </p>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews && (
        <section className="healthcare-section">
          <div className="healthcare-container">
            <div className="bg-accent rounded-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto bg-primary/10 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                    <Tag className="h-16 w-16 text-primary opacity-50" />
                  </div>
                </div>
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      {featuredNews.category}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {featuredNews.date}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                    {featuredNews.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredNews.excerpt}
                  </p>
                  <Button variant="healthcare">
                    Read Full Story
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="healthcare-section bg-muted/50">
        <div className="healthcare-container">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-serif font-bold text-foreground">Latest News</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">All</Button>
              <Button variant="ghost" size="sm">Announcements</Button>
              <Button variant="ghost" size="sm">Research</Button>
              <Button variant="ghost" size="sm">Community</Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((item, index) => (
              <article key={index} className="healthcare-card group cursor-pointer">
                <div className="aspect-video bg-accent rounded-lg mb-5 flex items-center justify-center">
                  <Tag className="h-10 w-10 text-accent-foreground opacity-30" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="h-4 w-4" />
                </span>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="healthcare-section">
        <div className="healthcare-container">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4">
              Stay Informed
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest health tips, news, and updates 
              from HealthCare Regional Medical Center.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 h-12 px-4 rounded-lg border-0 focus:ring-2 focus:ring-primary-foreground/20"
              />
              <Button variant="hero" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Newsroom;
