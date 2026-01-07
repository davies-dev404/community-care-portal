import { Scissors, Brain, Eye, Siren, Baby, Stethoscope, Heart, Ear, Bone, Pill, Scan, Activity, Smile, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SpecialtyCard from '@/components/SpecialtyCard';

const specialties = [
  {
    icon: Scissors,
    title: 'Surgery',
    description: 'Comprehensive surgical services delivered by experienced specialists using modern techniques and state-of-the-art equipment for optimal outcomes.',
  },
  {
    icon: Heart,
    title: 'Oncology',
    description: 'Advanced cancer care focused on early diagnosis, innovative treatment protocols, and compassionate patient support throughout the journey.',
  },
  {
    icon: Eye,
    title: 'Ophthalmology',
    description: 'Specialized eye care services utilizing modern diagnostic and treatment technologies for comprehensive vision health management.',
  },
  {
    icon: Brain,
    title: 'Critical Care & ICU',
    description: 'High-dependency and intensive care services designed for complex and life-threatening conditions requiring round-the-clock monitoring.',
  },
  {
    icon: Siren,
    title: 'Accident & Emergency',
    description: '24/7 emergency medical services providing rapid response, trauma care, and lifesaving interventions when every second counts.',
  },
  {
    icon: Baby,
    title: 'Maternity Services',
    description: 'Comprehensive maternal and newborn care, including antenatal classes, delivery options, and postnatal support for new families.',
  },
  {
    icon: Stethoscope,
    title: 'Internal Medicine',
    description: 'Expert diagnosis and treatment of adult diseases, focusing on preventive care and management of chronic conditions.',
  },
  {
    icon: Bone,
    title: 'Orthopedics',
    description: 'Complete musculoskeletal care including joint replacements, sports medicine, and rehabilitation services.',
  },
  {
    icon: Activity,
    title: 'Cardiology',
    description: 'Advanced cardiac care with comprehensive diagnostics, interventional procedures, and heart health management programs.',
  },
  {
    icon: Ear,
    title: 'Audiology',
    description: 'Complete hearing health services including diagnostic testing, hearing aids, and cochlear implant programs.',
  },
  {
    icon: Smile,
    title: 'Dentistry',
    description: 'Full-service dental care from routine cleanings to complex oral surgeries, ensuring complete oral health.',
  },
  {
    icon: Pill,
    title: 'Pharmacy',
    description: 'On-site pharmacy services providing medications, patient counseling, and medication therapy management.',
  },
  {
    icon: Scan,
    title: 'Diagnostic Imaging',
    description: 'Advanced imaging services including MRI, CT, X-ray, and ultrasound for accurate diagnosis and treatment planning.',
  },
  {
    icon: Users,
    title: 'Pediatrics',
    description: 'Specialized care for infants, children, and adolescents, focusing on growth, development, and childhood wellness.',
  },
];

const Specialties = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="healthcare-hero-gradient py-20">
        <div className="healthcare-container text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 animate-slide-up">
            Our Medical Specialties
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Comprehensive medical care for diverse patient needs. Our team of specialists 
            combines expertise with compassion to deliver exceptional healthcare services.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="healthcare-section">
        <div className="healthcare-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Excellence in Healthcare</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-6">
              World-Class Medical Services Under One Roof
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At HealthCare Regional Medical Center, we offer a comprehensive range of medical specialties 
              designed to meet all your healthcare needs. Our dedicated team of physicians, surgeons, and 
              healthcare professionals work together to provide coordinated, patient-centered care using 
              the latest medical advances and evidence-based treatments.
            </p>
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="healthcare-section bg-muted/50">
        <div className="healthcare-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <SpecialtyCard {...specialty} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="healthcare-section">
        <div className="healthcare-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-6">
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
            <div className="bg-accent rounded-2xl p-8 md:p-12">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Specialties;
