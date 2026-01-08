import { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { specialtiesData } from '@/data/specialtiesData';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const SpecialtyDetail = () => {
  const { slug } = useParams();
  const specialty = specialtiesData.find(s => s.id === slug);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!specialty) {
    return <Navigate to="/specialties" replace />;
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <SEO 
        title={specialty.title}
        description={specialty.shortDescription || `Specialized ${specialty.title} care services at Hope Specialist Hospitals.`}
      />
      <Header />

      {/* Breadcrumb Section - Custom styled to match theme */}
      <div className="bg-muted/30 py-4 border-b">
        <div className="healthcare-container">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-primary hover-primary/80">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/specialties" className="text-primary hover-primary/80">Our Specialties</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{specialty.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="healthcare-container py-12 lg-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content - Left Column (2/3) */}
          <div className="lg:col-span-2">
            {/* Title Section */}
            <div className="mb-8">
              <span className="text-primary font-medium uppercase tracking-wider text-sm mb-2 block">Our Specialties</span>
              <h1 className="text-4xl font-serif font-bold text-foreground mb-4">{specialty.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are dedicated to providing exceptional healthcare services to our community.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover-primary/90 text-white font-semibold px-8 h-12 rounded-lg">
                  Book an Appointment
                </Button>
              </Link>
              <a href="tel:+254700000000">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 h-12 rounded-lg gap-2">
                  <Phone className="w-4 h-4" />
                  Talk to us
                </Button>
              </a>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden mb-12 shadow-healthcare-lg relative min-h-[300px] bg-muted">
              {!imageLoaded && (
                <Skeleton className="absolute inset-0 w-full h-full" />
              )}
              <img 
                src={specialty.image} 
                alt={specialty.title} 
                className={`w-full h-auto object-cover max-h-[500px] transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>

            {/* Full Description Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings-serif prose-headings-foreground prose-p-muted-foreground prose-a-primary mb-16"
              dangerouslySetInnerHTML={{ __html: specialty.fullDescription }}
            />

            {/* Benefits Section */}
            <div className="bg-muted/30 rounded-3xl p-8 md-12 mb-12">
              <div className="mb-10">
                <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block border-l-4 border-primary pl-3">
                  Our Benefits
                </span>
                <h2 className="text-3xl font-serif font-bold text-foreground mt-4">
                  Hope Specialist Hospitals <br /> Advantages
                </h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {specialty.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-background rounded-xl shadow-sm hover-md transition-shadow duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                      {benefit.description && (
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Right Column (1/3) */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Services List Widget */}
            <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-serif font-bold mb-6 pb-4 border-b relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-primary">
                Services
              </h3>
              <ul className="space-y-3">
                {specialtiesData.map((spec) => (
                  <li key={spec.id}>
                    <Link 
                      to={`/specialties/${spec.id}`}
                      className={`flex items-center justify-between p-3 rounded-lg transition-colors duration-200 ${slug === spec.id ? 'bg-primary text-white font-medium' : 'hover-muted text-muted-foreground hover-foreground'}`}
                    >
                      <span className="flex items-center gap-3">
                        {/* Smaller icon for list */}
                        <spec.icon className="w-4 h-4" />
                        {spec.title}
                      </span>
                      <ArrowRight className="w-4 h-4 opacity-50" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources / Contact Widget */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
               <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 blur-2xl"></div>
               
               <h3 className="text-xl font-serif font-bold mb-6 pb-4 border-b border-white/20">
                 Resources
               </h3>
               <ul className="space-y-6 relative z-10">
                 <li className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                     <Phone className="w-5 h-5" />
                   </div>
                   <div>
                     <span className="block text-sm opacity-80 mb-1">Make appointment</span>
                     <p className="font-semibold text-lg">0758 230 000</p>
                   </div>
                 </li>
                 <li className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                     <Mail className="w-5 h-5" />
                   </div>
                   <div>
                     <span className="block text-sm opacity-80 mb-1">Email us</span>
                     <p className="font-semibold break-all">info@HOPEspecialisthospital.org</p>
                   </div>
                 </li>
                 <li className="flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                     <MapPin className="w-5 h-5" />
                   </div>
                   <div>
                     <span className="block text-sm opacity-80 mb-1">How to Find us</span>
                     <p className="font-semibold">Busia, Kenya</p>
                   </div>
                 </li>
               </ul>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SpecialtyDetail;
