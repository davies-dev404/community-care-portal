import { Heart, Users, Award, Target, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We treat every patient with dignity, and respect, understanding that healing involves both body and spirit.",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    description: "We maintain the highest standards of medical care, continuously improving our practices and outcomes.",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description: "We work together as a team with patients, families, and colleagues.",
  },
  {
    icon: Shield,
    title: "Patient Safety",
    description: "We are committed to providing safe, comprehensive care for every patient.",
  },
];

const milestones = [
  { year: "1985", event: "HealthCare Regional Medical Center opens its doors" },
  { year: "1992", event: "Expansion of emergency services and ICU facilities" },
  { year: "2001", event: "Launch of advanced cardiac care program" },
  { year: "2010", event: "Opening of state-of-the-art surgical center" },
  { year: "2018", event: "Introduction of telemedicine services" },
  { year: "2024", event: "Celebrating nearly 40 years of community healthcare" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format&fit=crop" 
            alt="Hospital Team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-800/60 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        
        <div className="healthcare-container relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md-6xl font-serif font-bold text-white mb-6 leading-tight animate-slide-up drop-shadow-lg">
              Who We Are
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 border-l-4 border-teal-300 pl-4 animate-slide-up drop-shadow-md" style={{ animationDelay: "0.2s" }}>
              Founded with a vision of excellence, a commitment to excellence, and a passion for 
              serving our community with compassionate healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="healthcare-section">
        <div className="healthcare-container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-accent rounded-2xl p-8 md-12">
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
            <div className="bg-muted rounded-2xl p-8 md-12">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                <Clock className="h-7 w-7 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the region&apos;s most trusted healthcare provider, recognized for clinical 
                excellence, innovative treatments, and an unwavering commitment to the patients 
                and families we serve. We envision a healthier community where everyone has 
                access to quality care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story / History Timeline */}
      <section className="py-24 bg-[#0f172a] text-white">
        <div className="healthcare-container">
          <div className="max-w-3xl mx-auto text-center mb-20 animate-slide-up">
            <span className="text-[#06b6d4] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">Our Journey</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              A History of Caring
            </h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              For nearly four decades, HealthCare Regional Medical Center has been the cornerstone of 
              healthcare in our community. What began as a small community hospital has grown into a 
              comprehensive medical center, yet our commitment to personalized, compassionate care 
              remains unchanged.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-slate-800" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row gap-8 items-start relative animate-slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#06b6d4] shadow-[0_0_15px_rgba(6,182,212,0.5)] z-10 mt-6 md:mt-8 border-2 border-[#0f172a]" />

                  {/* Left Side (Empty for even, Card for odd on desktop) */}
                  <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'hidden md:block'}`}>
                    {index % 2 === 0 && (
                       <div className="group">
                         <div className="bg-[#1e293b] p-8 rounded-2xl border border-slate-700/50 hover:border-[#06b6d4]/50 transition-all duration-300 shadow-lg hover:shadow-[#06b6d4]/10">
                           <span className="text-3xl font-serif font-bold text-[#06b6d4] block mb-2">{milestone.year}</span>
                           <p className="text-slate-300 font-medium">{milestone.event}</p>
                         </div>
                       </div>
                    )}
                  </div>

                  {/* Right Side (Card for even on desktop, Empty for odd) */}
                  <div className={`flex-1 pl-12 md:pl-0 ${index % 2 !== 0 ? 'md:pl-16 md:text-left' : 'hidden md:block'}`}>
                    {index % 2 !== 0 && (
                       <div className="group">
                         <div className="bg-[#1e293b] p-8 rounded-2xl border border-slate-700/50 hover:border-[#06b6d4]/50 transition-all duration-300 shadow-lg hover:shadow-[#06b6d4]/10">
                           <span className="text-3xl font-serif font-bold text-[#06b6d4] block mb-2">{milestone.year}</span>
                           <p className="text-slate-300 font-medium">{milestone.event}</p>
                         </div>
                       </div>
                    )}
                  </div>

                  {/* Mobile Card (Always visible on mobile, hidden on md) */}
                  <div className="md:hidden pl-12 w-full">
                     <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700/50 shadow-lg">
                       <span className="text-2xl font-serif font-bold text-[#06b6d4] block mb-2">{milestone.year}</span>
                       <p className="text-slate-300">{milestone.event}</p>
                     </div>
                  </div>

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
            <h2 className="text-3xl md-4xl font-serif font-bold text-foreground mt-4">
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
            We&apos;re always looking for talented individuals who share our passion for healthcare excellence.
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
