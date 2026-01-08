import { Scissors, Brain, Eye, Siren, Baby, Stethoscope, Heart, Ear, Bone, Pill, Scan, Activity, Smile, Users, TestTube, Briefcase, Clock, Ambulance } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SpecialtyCard from '@/components/SpecialtyCard';

const specialties = [
  {
    icon: Scissors,
    title: "General Surgery",
    description: "Advanced surgical procedures using minimally invasive techniques for faster recovery.",
  },
  {
    icon: Heart,
    title: "Cardiology",
    description: "Comprehensive heart care including diagnostics, interventional procedures, and heart health management programs.",
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Expert care for neurological disorders involving the brain, spine, and nervous system.",
  },
  {
    icon: Baby,
    title: "Maternity",
    description: "Complete mother and child care including antenatal classes, delivery options, and postnatal support for new families.",
  },
  {
    icon: Stethoscope,
    title: "Paediatrics",
    description: "Specialized healthcare for infants, children, and adolescents, focusing on growth, development, and childhood wellness.",
  },
  {
    icon: Bone,
    title: "Orthopaedics",
    description: "Treatment for bone and joint conditions, sports medicine, and rehabilitation services.",
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description: "Comprehensive eye care services ranging from vision correction to complex eye surgeries.",
  },
  {
    icon: Ear,
    title: "ENT",
    description: "Diagnosis and treatment of ear, nose, and throat conditions, hearing aids, and cochlear implant programs.",
  },
  {
    icon: Smile,
    title: "Dental",
    description: "Professional dental services including check-ups, cleanings, and cosmetic dentistry.",
  },
  {
    icon: Siren,
    title: "ICU / Critical Care",
    description: "24/7 intensive care for life-threatening conditions with advanced monitoring and support.",
  },
  {
    icon: Ambulance,
    title: "Accident & Emergency",
    description: "Rapid response medical care for emergencies, trauma care, and lifesaving interventions when every second counts.",
  },
  {
    icon: Pill,
    title: "Pharmacy",
    description: "Fully stocked pharmacy providing prescription medications, patient counseling, and medication therapy management.",
  },
  {
    icon: Scan,
    title: "Radiology",
    description: "Advanced imaging services including MRI, CT, X-ray, and ultrasound for accurate diagnosis and treatment planning.",
  },
  {
    icon: TestTube,
    title: "Laboratory",
    description: "State-of-the-art clinical laboratory services for accurate and timely test results.",
  },
];

import SEO from '@/components/SEO';

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
          <h1 className="text-4xl md-5xl font-serif font-bold text-primary-foreground mb-6 animate-slide-up">
            Our Medical Specialties
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Delivering excellence in healthcare through specialized departments and expert compassionate care.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="healthcare-section">
        <div className="healthcare-container">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Specialties;
