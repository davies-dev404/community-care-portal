import { Heart, Users, Award, Target, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We treat every patient with empathy, dignity, and respect, understanding that healing involves both body and spirit.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for the highest standards in medical care, continuously improving our practices and outcomes.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We uphold honesty and transparency in all our interactions with patients, families, and colleagues.',
  },
  {
    icon: Users,
    title: 'Teamwork',
    description: 'We collaborate across disciplines to provide coordinated, comprehensive care for every patient.',
  },
];

const milestones = [
  { year: '1985', event: 'Founded as a community hospital with 50 beds' },
  { year: '1995', event: 'Expanded to 200 beds with new surgical wing' },
  { year: '2005', event: 'Opened state-of-the-art Cancer Treatment Center' },
  { year: '2015', event: 'Achieved Magnet Recognition for nursing excellence' },
  { year: '2020', event: 'Launched advanced telemedicine services' },
  { year: '2024', event: 'Celebrating 39 years of community service' },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="healthcare-hero-gradient py-20">
        <div className="healthcare-container text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 animate-slide-up">
            Who We Are
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            A legacy of healing, a commitment to excellence, and a passion for 
            serving our community with compassionate healthcare.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="healthcare-section">
        <div className="healthcare-container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-accent rounded-2xl p-8 md:p-12">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional, patient-centered healthcare that improves the health and 
                well-being of our community. We are committed to delivering compassionate care, 
                advancing medical knowledge, and fostering a healing environment for all who 
                seek our services.
              </p>
            </div>
            <div className="bg-muted rounded-2xl p-8 md:p-12">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                <Clock className="h-7 w-7 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the region's most trusted healthcare provider, recognized for clinical 
                excellence, innovative treatments, and an unwavering commitment to the patients 
                and families we serve. We envision a healthier community where everyone has 
                access to quality care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="healthcare-section bg-muted/50">
        <div className="healthcare-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-6">
              A History of Caring
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              For nearly four decades, HealthCare Regional Medical Center has been the cornerstone of 
              healthcare in our community. What began as a small community hospital has grown into a 
              comprehensive medical center, yet our commitment to personalized, compassionate care 
              remains unchanged.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="healthcare-card inline-block">
                      <p className="text-2xl font-serif font-bold text-primary mb-2">{milestone.year}</p>
                      <p className="text-muted-foreground">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="healthcare-section">
        <div className="healthcare-container">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="healthcare-card text-center">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-5">
                  <value.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership CTA */}
      <section className="healthcare-hero-gradient py-16">
        <div className="healthcare-container text-center">
          <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
            Join Our Healthcare Family
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for healthcare excellence.
          </p>
          <Button variant="hero" size="lg">
            View Career Opportunities
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
