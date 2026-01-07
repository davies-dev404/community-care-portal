import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';

import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#1a365d] text-white pt-40 pb-8">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg backdrop-blur-sm">
                <img src={logo} alt="St. Elizabeth Specialist Hospital Logo" className="w-full h-full object-contain p-1" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-serif font-bold text-xl leading-tight">
                  St. Elizabeth
                </span>
                 <span className="text-[0.65rem] font-bold text-red-600 uppercase tracking-widest leading-tight whitespace-nowrap">
                Specialist Hospital
              </span>
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
                {/* X Logo */}
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
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
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Press', path: '/newsroom' },
                { label: 'Insurance', path: '/insurance' },
                { label: 'Newsroom', path: '/newsroom' },
                { label: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                { label: 'Surgery', path: '/specialties/surgery' },
                { label: 'Oncology', path: '/specialties/oncology' },
                { label: 'Emergency', path: '/specialties/emergency' },
                { label: 'Critical Care', path: '/specialties/critical-care' },
                { label: 'Maternity', path: '/specialties/maternity' },
                { label: 'Audiology', path: '/specialties/audiology' },
                { label: 'Dentistry', path: '/specialties/dentistry' },
                { label: 'Pharmacy', path: '/specialties/pharmacy' },
                { label: 'Imaging', path: '/specialties/imaging' }
              ].map((service) => (
                <li key={service.label}>
                  <Link to={service.path} className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                    {service.label}
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
            <p>© {new Date().getFullYear()} St. Elizabeth Specialist Hospital. All rights reserved.</p>
              <div className="flex gap-6">
                <Link to="/privacy-policy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
                <Link to="/terms-of-service" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
                <Link to="/accessibility" className="hover:opacity-100 transition-opacity">Accessibility</Link>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
