import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="healthcare-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">H</span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold">HealthCare</h3>
                <p className="text-sm opacity-70">Regional Medical Center</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-6 max-w-md">
              We are committed to providing exceptional healthcare services and promoting 
              the well-being of our community. With state-of-the-art facilities and a 
              compassionate team, we deliver care you can trust.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Press', 'Insurance', 'Newsroom', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Surgery', 'Oncology', 'Emergency', 'Critical Care', 'Maternity', 'Audiology', 'Dentistry', 'Pharmacy', 'Imaging'].map((service) => (
                <li key={service}>
                  <Link to="/specialties" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Company */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 opacity-70" />
                <span className="text-sm opacity-80">123 Medical Center Drive, Healthcare City, HC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 opacity-70" />
                <span className="text-sm opacity-80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 opacity-70" />
                <span className="text-sm opacity-80">info@healthcare.com</span>
              </li>
            </ul>
            
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {['Careers', 'Tenders', 'Public Notices'].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="healthcare-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-70">
            <p>© 2024 HealthCare Regional Medical Center. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="#" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
              <Link to="#" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
              <Link to="#" className="hover:opacity-100 transition-opacity">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
