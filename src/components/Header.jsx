import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Clock, ChevronDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { specialtiesData } from "@/data/specialtiesData";
import logo from '../assets/logo.png';

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
      <div className="bg-[#1e3a8a] text-white">
        <div className="healthcare-container">
          <div className="flex items-center justify-between py-2 text-sm font-medium">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                 <Clock size={16} />
                 <span className="font-medium">OPENING SOON.</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white/80 transition-colors"
              >
                <Phone size={16} />
                <span className="hidden sm:inline">Support Chat</span>
              </a>
              <a
                href="mailto:jobs@HOPEspecialisthospital.org"
                className="flex items-center gap-2 hover:text-white/80 transition-colors"
              >
                <Mail size={16} />
                <span>Apply Here</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="healthcare-container">
        <div className="flex items-center justify-start gap-16 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <img src={logo} alt="Hope Specialist Hospitals Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col items-start justify-center">
              <span className="text-xl font-serif font-bold tracking-tight text-[#1e3a8a] leading-none whitespace-nowrap">
                HOPE
              </span>
              <span className="text-[0.65rem] font-bold text-red-600 uppercase tracking-widest leading-tight whitespace-nowrap">
                Specialist Hospital
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Home */}
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                location.pathname === "/"
                  ? "bg-accent text-accent-foreground"
                  : "text-foreground hover:text-primary"
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
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors flex items-center gap-1 whitespace-nowrap ${
                  location.pathname === "/about" ||
                  location.pathname === "/doctors"
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground hover:text-primary"
                }`}
              >
                Who we are
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    whoWeAreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {whoWeAreOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-card rounded-xl shadow-healthcare-lg border border-border py-2 z-50 animate-fade-in">
                  <Link
                    to="/about"
                    className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent hover:bg-accent-foreground transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/doctors"
                    className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent hover:bg-accent-foreground transition-colors"
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
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors flex items-center gap-1 whitespace-nowrap ${
                  location.pathname === "/specialties"
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground hover:text-primary"
                }`}
              >
                Our Specialties
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    specialtiesOpen ? "rotate-180" : ""
                  }`}
                />
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
                    {specialtiesData.map((specialty) => (
                      <Link
                        key={specialty.id}
                        to={`/specialties/${specialty.id}`}
                        className="block px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-accent rounded transition-colors flex items-center gap-2"
                      >
                        <specialty.icon className="w-4 h-4" />
                        {specialty.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Insurance */}
            <Link
              to="/insurance"
              className={`px-4 py-1 rounded-lg text-sm font-bold transition-colors leading-tight ${
                location.pathname === "/insurance"
                  ? "bg-accent text-accent-foreground"
                  : "text-[#06b6d4] hover-[#06b6d4]/80"
              }`}
            >
              <span className="block">Insurance</span>
              <span className="block">Affiliations</span>
            </Link>

            {/* Newsroom */}
            <Link
              to="/newsroom"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === "/newsroom"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              Newsroom
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === "/contact"
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4 ml-auto">
            <Link to="/contact">
              <Button className="bg-teal-500 hover-teal-600 text-white font-bold h-12 px-8 text-base">
                Book Appointment
              </Button>
            </Link>
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
                  location.pathname === "/"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
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
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      mobileWhoWeAreOpen ? "rotate-180" : ""
                    }`}
                  />
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
                  onClick={() =>
                    setMobileSpecialtiesOpen(!mobileSpecialtiesOpen)
                  }
                  className="w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors text-muted-foreground hover:text-foreground hover:bg-muted flex items-center justify-between"
                >
                  Our Specialties
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      mobileSpecialtiesOpen ? "rotate-180" : ""
                    }`}
                  />
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
                    {specialtiesData.slice(0, 10).map((specialty) => (
                      <Link
                        key={specialty.id}
                        to={`/specialties/${specialty.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                      >
                        <specialty.icon className="w-4 h-4" />
                        {specialty.title}
                      </Link>
                    ))}
                    {specialtiesData.length > 10 && (
                      <span className="block py-1.5 text-xs text-primary">
                        + {specialtiesData.length - 10} more...
                      </span>
                    )}
                  </div>
                )}
              </div>

              <Link
                to="/insurance"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === "/insurance"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                Insurance Affiliations
              </Link>

              <Link
                to="/newsroom"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === "/newsroom"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                Newsroom
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === "/contact"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                Contact
              </Link>
              
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="healthcare" className="mt-4 w-full" size="lg">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
