import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Award, Clock, Stethoscope, Baby, Eye, Siren, Brain, Scissors } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SpecialtyCard from '@/components/SpecialtyCard';

const featuredSpecialties = [
  {
    icon: Scissors,
    title: 'Surgery',
    description: 'Comprehensive surgical services delivered by experienced specialists using modern techniques.',
  },
  {
    icon: Siren,
    title: 'Emergency Care',
    description: '24/7 emergency medical services providing rapid response and lifesaving care.',
  },
  {
    icon: Baby,
    title: 'Maternity',
    description: 'Comprehensive maternal and newborn care including antenatal, delivery, and postnatal support.',
  },
  {
    icon: Brain,
    title: 'Critical Care',
    description: 'High-dependency and intensive care for complex and life-threatening conditions.',
  },
];

const stats = [
  { icon: Users, value: '50,000+', label: 'Patients Served Annually' },
  { icon: Award, value: '200+', label: 'Medical Specialists' },
  { icon: Heart, value: '35+', label: 'Years of Excellence' },
  { icon: Clock, value: '24/7', label: 'Emergency Services' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="healthcare-hero-gradient">
          <div className="healthcare-container py-24 md:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6 animate-slide-up">
                Exceptional Care, <br />
                <span className="opacity-90">Compassionate Hearts</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Your health is our priority. We combine advanced medical technology with 
                personalized care to provide the best healthcare experience for you and your family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <Button variant="hero" size="xl">
                  Book Appointment
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button variant="heroOutline" size="xl">
                  Our Services
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-background blur-3xl" />
          <div className="absolute bottom-20 right-40 w-48 h-48 rounded-full bg-background blur-2xl" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="healthcare-subtle-gradient py-12 -mt-8 relative z-10">
        <div className="healthcare-container">
          <div className="bg-card rounded-2xl shadow-healthcare-lg p-8 md:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <p className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="healthcare-section">
        <div className="healthcare-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Welcome to HealthCare</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-6">
                A Legacy of Healing, A Future of Innovation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For over three decades, HealthCare Regional Medical Center has been the cornerstone 
                of our community's health. We combine time-tested medical expertise with cutting-edge 
                technology to deliver healthcare that truly makes a difference.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team of over 200 dedicated medical professionals works tirelessly to ensure 
                every patient receives personalized attention and the highest standard of care.
              </p>
              <Link to="/about">
                <Button variant="healthcare" size="lg">
                  Learn More About Us
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-accent overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <Stethoscope className="w-32 h-32 text-accent-foreground opacity-50" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary rounded-xl p-6 shadow-healthcare-lg">
                <p className="text-3xl font-serif font-bold text-primary-foreground">35+</p>
                <p className="text-sm text-primary-foreground/80">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Specialties */}
      <section className="healthcare-section bg-muted/50">
        <div className="healthcare-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-6">
              Comprehensive Medical Specialties
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              From routine check-ups to complex procedures, our diverse range of medical 
              specialties ensures you receive complete care under one roof.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSpecialties.map((specialty, index) => (
              <SpecialtyCard key={index} {...specialty} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/specialties">
              <Button variant="healthcare" size="lg">
                View All Specialties
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="healthcare-hero-gradient py-20">
        <div className="healthcare-container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
            Ready to Experience Better Healthcare?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Book an appointment today and let our team of experts take care of your health needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Schedule Appointment
            </Button>
            <Button variant="heroOutline" size="xl">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
