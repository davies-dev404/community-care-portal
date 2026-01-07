import { Phone, Mail, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const doctors = [
  {
    name: 'Dr. Sarah Chen',
    specialty: 'Oncology',
    qualifications: 'MD, PhD, FACP',
    experience: '20+ years',
    bio: 'Renowned oncologist specializing in immunotherapy and personalized cancer treatment protocols.',
  },
  {
    name: 'Dr. Michael Roberts',
    specialty: 'Cardiology',
    qualifications: 'MD, FACC',
    experience: '18 years',
    bio: 'Expert in interventional cardiology with extensive experience in complex cardiac procedures.',
  },
  {
    name: 'Dr. Emily Johnson',
    specialty: 'Pediatrics',
    qualifications: 'MD, FAAP',
    experience: '15 years',
    bio: 'Dedicated pediatrician focusing on childhood development and preventive care.',
  },
  {
    name: 'Dr. James Williams',
    specialty: 'Orthopedics',
    qualifications: 'MD, FAAOS',
    experience: '22 years',
    bio: 'Leading orthopedic surgeon specializing in joint replacements and sports medicine.',
  },
  {
    name: 'Dr. Lisa Martinez',
    specialty: 'Obstetrics & Gynaecology',
    qualifications: 'MD, FACOG',
    experience: '16 years',
    bio: 'Compassionate OB/GYN providing comprehensive women\'s health care and high-risk pregnancy management.',
  },
  {
    name: 'Dr. David Kim',
    specialty: 'Neurology',
    qualifications: 'MD, PhD',
    experience: '14 years',
    bio: 'Neurologist with expertise in movement disorders and neurodegenerative diseases.',
  },
  {
    name: 'Dr. Amanda Foster',
    specialty: 'Dermatology',
    qualifications: 'MD, FAAD',
    experience: '12 years',
    bio: 'Board-certified dermatologist specializing in medical and cosmetic dermatology.',
  },
  {
    name: 'Dr. Richard Thompson',
    specialty: 'General Surgery',
    qualifications: 'MD, FACS',
    experience: '25 years',
    bio: 'Experienced surgeon with expertise in minimally invasive and laparoscopic procedures.',
  },
];

const Doctors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop" 
            alt="Medical Team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-800/60 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="healthcare-container relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight animate-slide-up drop-shadow-lg">
              Our Medical Team
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 border-l-4 border-teal-300 pl-4 animate-slide-up drop-shadow-md" style={{ animationDelay: '0.1s' }}>
              Meet our team of experienced physicians and specialists dedicated to 
              providing exceptional healthcare to our community.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="healthcare-section">
        <div className="healthcare-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Expert Care</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-6">
              You're in Good Hands
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
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 rounded-full bg-accent mx-auto mb-5 flex items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-accent-foreground">
                    {doctor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-1">{doctor.name}</h3>
                <p className="text-primary font-medium text-sm mb-2">{doctor.specialty}</p>
                <p className="text-xs text-muted-foreground mb-3">{doctor.qualifications}</p>
                
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-xs text-muted-foreground">{doctor.experience} experience</span>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {doctor.bio}
                </p>
                
                <div className="flex justify-center gap-2">
                  <button className="w-8 h-8 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Phone className="h-4 w-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
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
          <Button variant="hero" size="lg">
            Book Appointment
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Doctors;
