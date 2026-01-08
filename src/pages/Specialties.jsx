import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SpecialtyCard from '@/components/SpecialtyCard';
import { specialtiesData } from '@/data/specialtiesData';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

import ScrollAnimation from '@/components/ScrollAnimation';

const Specialties = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Our Specialties"
        description="Explore our wide range of medical specialties including Cardiology, Neurology, Pediatrics, and Surgery at Hope Specialist Hospitals."
      />
      <Header />

      {/* Hero Section */}
      <section className="healthcare-hero-gradient py-20">
        <div className="healthcare-container text-center">
          <ScrollAnimation animation="fade-up">
            <h1 className="text-4xl md-5xl font-serif font-bold text-primary-foreground mb-6">
              Our Medical Specialties
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Delivering excellence in healthcare through specialized departments and expert compassionate care.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Intro Section */}
      <section className="healthcare-section">
        <div className="healthcare-container">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Excellence in Healthcare</span>
              <h2 className="text-3xl md-4xl font-serif font-bold text-foreground mt-4 mb-6">
                World-Class Medical Services Under One Roof
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At HealthCare Regional Medical Center, we offer a comprehensive range of medical specialties 
                designed to meet all your healthcare needs. Our dedicated team of physicians, surgeons, and 
                healthcare professionals work together to provide coordinated, patient-centered care using 
                the latest medical advances and evidence-based treatments.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="healthcare-section bg-muted/50">
        <div className="healthcare-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {specialtiesData.map((specialty, index) => (
              <ScrollAnimation key={specialty.id} delay={index * 50}>
                <Link to={`/specialties/${specialty.id}`} className="block h-full transition-transform duration-300 hover:-translate-y-2">
                  <SpecialtyCard {...specialty} />
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="healthcare-section">
        <div className="healthcare-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="fade-right">
              <div>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
                <h2 className="text-3xl md-4xl font-serif font-bold text-foreground mt-4 mb-6">
                  Committed to Your Health & Well-being
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-accent-foreground">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Expert Medical Team</h3>
                      <p className="text-muted-foreground text-sm">Over 200 board-certified physicians and specialists committed to excellence.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-accent-foreground">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Advanced Technology</h3>
                      <p className="text-muted-foreground text-sm">State-of-the-art equipment and facilities for accurate diagnosis and treatment.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-accent-foreground">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Patient-Centered Care</h3>
                      <p className="text-muted-foreground text-sm">Personalized treatment plans tailored to your unique health needs.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-accent-foreground">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Coordinated Services</h3>
                      <p className="text-muted-foreground text-sm">Seamless collaboration across departments for comprehensive care.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-left" delay={200}>
              <div className="bg-accent rounded-2xl p-8 md-12">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Need Help Choosing?</h3>
                <p className="text-muted-foreground mb-6">
                  Not sure which specialty you need? Our patient coordinators are here to help 
                  guide you to the right department for your health concerns.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm text-foreground">Free initial consultation guidance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm text-foreground">Multi-specialty coordination</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm text-foreground">Insurance verification assistance</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Specialties;
