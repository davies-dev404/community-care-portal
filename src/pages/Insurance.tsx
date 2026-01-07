import { Shield, CheckCircle, Phone, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import nisLogo from '../assets/insurance/nis.png';
import shaLogo from '../assets/insurance/sha.png';
import muaLogo from '../assets/insurance/mua.png';
import mtibaLogo from '../assets/insurance/mtiba.png';
import minetLogo from '../assets/insurance/minet.png';
import liaisonLogo from '../assets/insurance/liaison.png';
import jubileeLogo from '../assets/insurance/jubilee.png';

const insurancePartners = [
  { name: 'NIS', logo: nisLogo },
  { name: 'SHA', logo: shaLogo },
  { name: 'MUA', logo: muaLogo },
  { name: 'm-tiba', logo: mtibaLogo },
  { name: 'Minet', logo: minetLogo },
  { name: 'LIAISON GROUP', logo: liaisonLogo },
  { name: 'LiB' },
  { name: 'KENYA REVENUE AUTHORITY' },
  { name: 'Find Acrome' },
  { name: 'Kenbright' },
  { name: 'Jubilee', logo: jubileeLogo },
  { name: 'Heritage' },
  { name: 'GA Insurance' },
  { name: 'First Assurance' },
  { name: 'EQUITY' },
  { name: 'THE MADHUPER INVESTMENT & FINANCE COMPANY LIMITED' },
  { name: 'LIC GROUP' },
  { name: 'Britam' },
  { name: 'DIC GROUP' },
  { name: 'TAKAFUL' },
  { name: 'GLM MUTUAL' },
  { name: 'Sedgwick' },
  { name: 'POSTA' },
  { name: 'PACIS' },
  { name: 'PACIFIC' },
];

const benefits = [
  {
    icon: Shield,
    title: 'Wide Network Coverage',
    description: 'We partner with major insurance providers to ensure you have access to quality care without financial barriers.',
  },
  {
    icon: FileText,
    title: 'Simple Claims Process',
    description: 'Our dedicated billing team handles insurance claims efficiently, minimizing paperwork and stress for you.',
  },
  {
    icon: CheckCircle,
    title: 'Pre-Authorization Support',
    description: 'We assist with pre-authorization requirements to ensure you treatments are covered before procedures.',
  },
  {
    icon: Phone,
    title: 'Insurance Verification',
    description: 'Free insurance verification service to help you understand your coverage and out-of-pocket costs.',
  },
];

const Insurance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="healthcare-hero-gradient py-20">
        <div className="healthcare-container text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 animate-slide-up">
            Insurance Affiliations
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            We work with trusted insurance providers to ensure you receive seamless coverage 
            and focus on what matters most—your health.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="healthcare-section">
        <div className="healthcare-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Hassle-Free Healthcare</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-6">
              Reliable Insurance Partnerships
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At HealthCare Regional Medical Center, we believe that quality healthcare should be accessible to everyone. 
              That's why we've established partnerships with a wide range of insurance providers, ensuring that you can 
              receive the care you need without unnecessary financial stress. Our team is committed to making your 
              healthcare journey as smooth as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="healthcare-section bg-muted/50">
        <div className="healthcare-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground">How We Support You</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="healthcare-card text-center">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-5">
                  <benefit.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="healthcare-section">
        <div className="healthcare-container">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Partners</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-4">
              Accepted Insurance Providers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              You're in safe hands with our accredited insurance partners. We accept most major 
              insurance plans and are continuously expanding our network.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {insurancePartners.map((partner, index) => (
              <div 
                key={index} 
                className="healthcare-card flex items-center justify-center py-8 px-6 text-center animate-scale-in min-h-[160px]"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center">
                  {partner.logo ? (
                    <div className="w-32 h-20 flex items-center justify-center">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                  ) : (
                    <>
                      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4">
                         <Shield className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <p className="font-semibold text-foreground text-sm">{partner.name}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Don't see your insurance provider listed? Contact us to verify your coverage.
            </p>
            <Button variant="healthcare" size="lg">
              Verify Your Insurance
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="healthcare-section bg-accent">
        <div className="healthcare-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 shadow-healthcare">
                <h3 className="font-semibold text-foreground mb-2">What if my insurance isn't listed?</h3>
                <p className="text-muted-foreground text-sm">
                  We work with many insurance providers and are constantly expanding our network. 
                  Contact our billing department to verify your specific coverage—we may still be able to help.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-healthcare">
                <h3 className="font-semibold text-foreground mb-2">Do you offer payment plans?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we offer flexible payment plans for patients who need financial assistance. 
                  Our patient financial services team can discuss options that work for your situation.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-healthcare">
                <h3 className="font-semibold text-foreground mb-2">How do I verify my coverage before a visit?</h3>
                <p className="text-muted-foreground text-sm">
                  Call our insurance verification line or submit your insurance details online. 
                  We recommend verifying coverage at least 48 hours before your scheduled appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="healthcare-hero-gradient py-16">
        <div className="healthcare-container text-center">
          <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
            Questions About Insurance Coverage?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our patient services team is ready to help you understand your benefits and coverage options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+254758230000">
              <Button variant="hero" size="lg">
                <Phone className="h-5 w-5 mr-2" />
                Call +254 758 230 000
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="heroOutline" size="lg">
                Send an Inquiry
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insurance;
