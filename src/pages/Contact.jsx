import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["(555) 123-4567", "Emergency: (555) 911-0000"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@healthcare.com", "appointments@healthcare.com"],
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["123 Medical Center Drive", "Healthcare City, HC 12345"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 8am - 8pm", "Emergency: 24/7"],
  },
];

import SEO from '@/components/SEO';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact Us"
        description="Get in touch with Hope Specialist Hospitals (HSH). Book appointments, find our location in Busia, or contact our emergency services."
      />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center">
        <div className="absolute inset-0 w-full h-full">

          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-800/60 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="healthcare-container relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md-6xl font-serif font-bold text-white mb-6 leading-tight animate-slide-up drop-shadow-lg">
              Contact Us
            </h1>
            <p className="text-lg md-xl text-white mb-8 border-l-4 border-teal-300 pl-4 animate-slide-up drop-shadow-md" style={{ animationDelay: "0.2s" }}>
              Get in touch with us for appointments, inquiries, or any healthcare-related questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="healthcare-section">
        <div className="healthcare-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="healthcare-card text-center">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-5">
                  <info.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="healthcare-section bg-muted/50">
        <div className="healthcare-container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Get in Touch</span>
              <h2 className="text-3xl font-serif font-bold text-foreground mt-4 mb-6">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Have a question or need assistance? Fill out the form below and our team 
                will get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <Input placeholder="John" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <Input placeholder="Doe" className="h-12" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input type="email" placeholder="john@example.com" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <Input type="tel" placeholder="+1 (555) 000-0000" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Department</label>
                  <select className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground">
                    <option>General Inquiry</option>
                    <option>Appointments</option>
                    <option>Billing</option>
                    <option>Medical Records</option>
                    <option>Patient Relations</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea placeholder="How can we help you?" className="min-h-32" />
                </div>
                <Button variant="healthcare" size="lg" className="w-full">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map Placeholder & Additional Info */}
            <div>
              <div className="bg-accent rounded-2xl h-80 mb-8 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-accent-foreground opacity-50 mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">123 Medical Center Drive</p>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-healthcare">
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                  Emergency Services
                </h3>
                <p className="text-muted-foreground mb-6">
                  For medical emergencies, please call 911 or visit our Emergency Department, 
                  which is open 24 hours a day, 7 days a week.
                </p>
                <div className="flex items-center gap-4 p-4 bg-destructive/10 rounded-lg">
                  <Phone className="h-8 w-8 text-destructive" />
                  <div>
                    <p className="font-semibold text-foreground">Emergency Hotline</p>
                    <p className="text-lg font-bold text-destructive">+1 (555) 911-0000</p>
                  </div>
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

export default Contact;
