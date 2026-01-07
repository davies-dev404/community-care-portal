import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Clock, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const specialties = [
  'Accident & Emergency',
  'Aesthetic',
  'Allergy and Immunology',
  'Anaesthesiology',
  'Ambulance',
  'Audiology',
  'Bariatric Surgery',
  'Cardiac Sciences',
  'Child Development Department',
  'Critical Care and I.C.U',
  'Dentistry',
  'Dermatology',
  'Dietetics and Nutrition',
  'Endocrinology, Diabetology and Metabolic Disorders',
  'ENT, Head and Neck Surgery',
  'Family Medicine',
  'Foetal Medicine',
  'Gastroenterology',
  'Gastrointestinal Surgery',
  'General and Laparoscopic Surgery',
  'General Medicine',
  'Haematology',
  'Imaging',
  'Internal Medicine',
  'Lactation Services',
  'Maternity',
  'Midwifery Services',
  'Neonatology',
  'Nephrology',
  'NICU',
  'Obstetrics & Gynaecology',
  'Occupational Medicine',
  'Oncology',
  'Ophthalmology',
  'Oral and Maxillofacial Surgery',
  'Orthopaedics',
  'P.I.C.U',
  'Paediatrics',
  'Pathology & Lab Medicine',
  'Pharmacy',
  'Physiotherapy',
  'Psychiatry',
  'Psychology',
  'Pulmonology',
  'Radiology and Imaging',
  'Renal/Dialysis',
  'Rheumatology',
  'Surgery',
  'Urgent Care',
  'Urology and Andrology',
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [whoWeAreOpen, setWhoWeAreOpen] = useState(false);
  const [specialtiesOpen, setSpecialtiesOpen] = useState(false);
  const [mobileWhoWeAreOpen, setMobileWhoWeAreOpen] = useState(false);
  const [mobileSpecialtiesOpen, setMobileSpecialtiesOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary">
        <div className="healthcare-container">
          <div className="flex items-center justify-between py-2 text-sm text-primary-foreground">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Emergency: +1 (555) 123-4567</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>24/7 Emergency Services</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span>Caring for our community since 1985</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="healthcare-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl healthcare-hero-gradient flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">H</span>
            </div>
            <div>
              <h1 className="text-xl font-serif font-semibold text-foreground">HealthCare</h1>
              <p className="text-xs text-muted-foreground">Regional Medical Center</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Home */}
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/'
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              Home
            </Link>

            {/* Who We Are Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setWhoWeAreOpen(true)}
              onMouseLeave={() => setWhoWeAreOpen(false)}
            >
              <button
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                  location.pathname === '/about' || location.pathname === '/doctors'
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                Who We Are
                <ChevronDown className={`h-4 w-4 transition-transform ${whoWeAreOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {whoWeAreOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-card rounded-xl shadow-healthcare-lg border border-border py-2 z-50 animate-fade-in">
                  <Link
                    to="/about"
                    className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/doctors"
                    className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Our Doctors
                  </Link>
                </div>
              )}
            </div>

            {/* Our Specialties Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setSpecialtiesOpen(true)}
              onMouseLeave={() => setSpecialtiesOpen(false)}
            >
              <button
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                  location.pathname === '/specialties'
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                Our Specialties
                <ChevronDown className={`h-4 w-4 transition-transform ${specialtiesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {specialtiesOpen && (
                <div className="absolute top-full left-0 mt-1 w-[600px] bg-card rounded-xl shadow-healthcare-lg border border-border py-4 px-4 z-50 animate-fade-in">
                  <Link
                    to="/specialties"
                    className="block px-3 py-2 text-sm font-semibold text-primary hover:bg-accent rounded-lg transition-colors mb-2"
                  >
                    View All Specialties →
                  </Link>
                  <div className="grid grid-cols-3 gap-1 max-h-80 overflow-y-auto">
                    {specialties.map((specialty) => (
                      <Link
                        key={specialty}
                        to="/specialties"
                        className="block px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-accent rounded transition-colors"
                      >
                        {specialty}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Insurance */}
            <Link
              to="/insurance"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/insurance'
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              Insurance Affiliations
            </Link>

            {/* Newsroom */}
            <Link
              to="/newsroom"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/newsroom'
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              Newsroom
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/contact'
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="healthcare" size="lg">
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === '/'
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                Home
              </Link>

              {/* Mobile Who We Are */}
              <div>
                <button
                  onClick={() => setMobileWhoWeAreOpen(!mobileWhoWeAreOpen)}
                  className="w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors text-muted-foreground hover:text-foreground hover:bg-muted flex items-center justify-between"
                >
                  Who We Are
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileWhoWeAreOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileWhoWeAreOpen && (
                  <div className="ml-4 border-l-2 border-border pl-4 py-2 space-y-1">
                    <Link
                      to="/about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/doctors"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Our Doctors
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Specialties */}
              <div>
                <button
                  onClick={() => setMobileSpecialtiesOpen(!mobileSpecialtiesOpen)}
                  className="w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors text-muted-foreground hover:text-foreground hover:bg-muted flex items-center justify-between"
                >
                  Our Specialties
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileSpecialtiesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileSpecialtiesOpen && (
                  <div className="ml-4 border-l-2 border-border pl-4 py-2 max-h-60 overflow-y-auto space-y-1">
                    <Link
                      to="/specialties"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm font-medium text-primary transition-colors"
                    >
                      View All Specialties
                    </Link>
                    {specialties.slice(0, 10).map((specialty) => (
                      <Link
                        key={specialty}
                        to="/specialties"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {specialty}
                      </Link>
                    ))}
                    <span className="block py-1.5 text-xs text-primary">+ {specialties.length - 10} more...</span>
                  </div>
                )}
              </div>

              <Link
                to="/insurance"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === '/insurance'
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                Insurance Affiliations
              </Link>

              <Link
                to="/newsroom"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === '/newsroom'
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                Newsroom
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === '/contact'
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                Contact
              </Link>

              <Button variant="healthcare" className="mt-4" size="lg">
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
