import { Phone, Mail, Award, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import teamImg from '../assets/team.png';

const doctors = [
  {
    name: "Dr. Achieng Odhiambo",
    specialty: "Cardiology",
    qualifications: "MBChB, MMed, FACC",
    experience: "15+ years",
    education: "University of Nairobi & Harvard Medical School",
    bio: "Specializing in interventional cardiology and heart failure management.",
  },
  {
    name: "Dr. Kamau Njoroge",
    specialty: "Neurology",
    qualifications: "MD, PhD",
    experience: "12+ years",
    education: "Moi University & Johns Hopkins University",
    bio: "Expertise in stroke management and neurodegenerative disorders.",
  },
  {
    name: "Dr. Wanjiku Kimani",
    specialty: "Pediatrics",
    qualifications: "MBChB, FAAP",
    experience: "10+ years",
    education: "Kenyatta University & University of Pennsylvania",
    bio: "Dedicated to comprehensive child healthcare from infancy through adolescence.",
  },
  {
    name: "Dr. Omondi Otieno",
    specialty: "Orthopedics",
    qualifications: "MD, FAAOS",
    experience: "20+ years",
    education: "University of Nairobi & Stanford University",
    bio: "Specialist in sports medicine and joint replacement surgery.",
  },
  {
    name: "Dr. Zainab Ahmed",
    specialty: "Obstetrics & Gynecology",
    qualifications: "MBChB, MMed",
    experience: "14+ years",
    education: "Aga Khan University & Yale School of Medicine",
    bio: "Providing compassionate care for women's health across all life stages.",
  },
  {
    name: "Dr. Juma Wanyama",
    specialty: "General Surgery",
    qualifications: "MD, FACS",
    experience: "18+ years",
    education: "Moi University & Columbia University",
    bio: "Advanced laparoscopic and robotic surgical procedures.",
  },
  {
    name: "Dr. Muthoni Mwangi",
    specialty: "Dermatology",
    qualifications: "MBChB, FAAD",
    experience: "8+ years",
    education: "University of Nairobi & UCSF",
    bio: "Expert diagnosis and treatment of skin, hair, and nail conditions.",
  },
  {
    name: "Dr. Kiprop Koech",
    specialty: "Internal Medicine",
    qualifications: "MD, FACP",
    experience: "11+ years",
    education: "Egerton University & Baylor College of Medicine",
    bio: "Focusing on preventive care and complex disease management.",
  },
];

const Doctors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={teamImg} 
            alt="Medical Team" 
            fetchPriority="high"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-800/75 to-transparent/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="healthcare-container relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight animate-slide-up drop-shadow-lg">
              Our Medical Team
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 border-l-4 border-teal-300 pl-4 animate-slide-up drop-shadow-md" style={{ animationDelay: '0.1s' }}>
              Meet the dedicated professionals committed to your health and well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="healthcare-section">
        <div className="healthcare-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Expert Care</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-6">
              You&apos;re in Good Hands
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our physicians are board-certified specialists with years of experience and a shared 
              commitment to patient-centered care. Each member of our medical team brings unique 
              expertise and a compassionate approach to healing.
            </p>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="healthcare-section bg-muted/50">
        <div className="healthcare-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor, index) => (
              <div 
                key={index} 
                className="healthcare-card text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-24 h-24 rounded-full bg-accent mx-auto mb-5 flex items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-accent-foreground">
                    {doctor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-1">{doctor.name}</h3>
                <p className="text-primary font-medium text-sm mb-2">{doctor.specialty}</p>
                <p className="text-xs text-muted-foreground mb-3">{doctor.qualifications}</p>
                
                <div className="flex items-center justify-center gap-4 mb-4 flex-wrap">
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-accent/50 rounded text-xs text-muted-foreground">
                    <GraduationCap className="h-3.5 w-3.5" />
                    <span>{doctor.education}</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-accent/50 rounded text-xs text-muted-foreground">
                    <Award className="h-3.5 w-3.5 text-primary" />
                    <span>{doctor.experience}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {doctor.bio}
                </p>
                
                <div className="flex justify-center gap-2">
                  <button className="w-8 h-8 rounded-full bg-accent flex items-center justify-center hover:text-primary hover:bg-accent/80 transition-colors">
                    <Phone className="h-4 w-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-accent flex items-center justify-center hover:text-primary hover:bg-accent/80 transition-colors">
                    <Mail className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="healthcare-hero-gradient py-16">
        <div className="healthcare-container text-center">
          <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
            Schedule a Consultation
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Ready to meet with one of our specialists? Book an appointment today.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Book Appointment</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Doctors;
