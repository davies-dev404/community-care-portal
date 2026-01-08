import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';

import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#64748b] text-white pt-48 pb-8 font-sans relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-md">
                <img src={logo} alt="Hope Specialist Hospitals Logo" className="w-full h-full object-contain p-1" />
              </div>
              <div className="flex flex-col">
                 <span className="font-serif font-bold text-lg leading-tight">
                  HOPE
                </span>
                 <span className="text-[0.6rem] font-bold text-red-200 uppercase tracking-widest leading-tight whitespace-nowrap">
                Specialist Hospital
              </span>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed max-w-xs">
              We are committed to providing exceptional healthcare services and promoting the well-being of our community. With state-of-the-art facilities and a compassionate team, we deliver care you can trust.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                 {/* X Logo */}
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white/90">Quick Links</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li><Link to="/" className="hover:text-white hover:opacity-100 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white hover:opacity-100 transition-colors">About Us</Link></li>
              <li><Link to="/newsroom" className="hover:text-white hover:opacity-100 transition-colors">Press</Link></li>
              <li><Link to="/insurance" className="hover:text-white hover:opacity-100 transition-colors">Insurance</Link></li>
              <li><Link to="/newsroom" className="hover:text-white hover:opacity-100 transition-colors">Newsroom</Link></li>
              <li><Link to="/contact" className="hover:text-white hover:opacity-100 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white/90">Our Services</h4>
            <ul className="space-y-3 text-sm opacity-80">
               <li><Link to="/specialties/surgery" className="hover:text-white hover:opacity-100 transition-colors">Surgery</Link></li>
               <li><Link to="/specialties/oncology" className="hover:text-white hover:opacity-100 transition-colors">Oncology</Link></li>
               <li><Link to="/specialties/emergency" className="hover:text-white hover:opacity-100 transition-colors">Emergency</Link></li>
               <li><Link to="/specialties/critical-care" className="hover:text-white hover:opacity-100 transition-colors">Critical Care</Link></li>
               <li><Link to="/specialties/maternity" className="hover:text-white hover:opacity-100 transition-colors">Maternity</Link></li>
               <li><Link to="/specialties/haematology" className="hover:text-white hover:opacity-100 transition-colors">Haematology</Link></li>
               <li><Link to="/specialties/ophthalmology" className="hover:text-white hover:opacity-100 transition-colors">Ophthalmology</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Company */}
          <div className="space-y-8">
            {/* Contact Us */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white/90">Contact Us</h4>
              <ul className="space-y-4 text-sm opacity-80">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Busia, Kenya</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span>0758 230 000</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span className="break-all">info@HOPEspecialisthospital.org</span>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-white/90">Company</h4>
              <ul className="space-y-3 text-sm opacity-80">
                <li><Link to="/careers" className="hover:text-white hover:opacity-100 transition-colors">Careers</Link></li>
                <li><Link to="/tenders" className="hover:text-white hover:opacity-100 transition-colors">Tenders</Link></li>
                <li><Link to="/public-notice" className="hover:text-white hover:opacity-100 transition-colors">Public Notices</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-70 gap-4">
          <p>© {new Date().getFullYear()} Hope Specialist Hospitals. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:opacity-100 hover:text-white transition-all">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:opacity-100 hover:text-white transition-all">Terms of Service</Link>
            <Link to="/accessibility" className="hover:opacity-100 hover:text-white transition-all">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
