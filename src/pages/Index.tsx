import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Pill, ShieldCheck, Newspaper, Stethoscope, Activity, Eye, Ambulance, Baby, HeartPulse, Phone, Mail, MapPin, Clock, Quote, Plus, Minus, HeartHandshake, Lightbulb, ScrollText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import * as HealthcareIcons from '@/components/HealthcareIcons';
import heroImage from '../assets/hero.png';
import teamImg from '../assets/team.png';
import facilityImg from '../assets/facility.png';
import careImg from '../assets/care.png';
import { newsItems } from '@/data/newsData';
import nisLogo from '../assets/insurance/nis.png';
import shaLogo from '../assets/insurance/sha.png';
import muaLogo from '../assets/insurance/mua.png';
import mtibaLogo from '../assets/insurance/mtiba.png';
import minetLogo from '../assets/insurance/minet.png';
import liaisonLogo from '../assets/insurance/liaison.png';
import jubileeLogo from '../assets/insurance/jubilee.png';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      {/* --- ORIGINAL SECTIONS --- */}

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0 w-full h-full">
        <img 
          src={heroImage} 
          alt="Modern Hospital Building" 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-800/60 to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/10" />
      </div>
        
        <div className="healthcare-container relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Providing exceptional <br />
              <span className="text-teal-300 drop-shadow-md">healthcare services</span> to <br />
              our community
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 border-l-4 border-teal-300 pl-4 drop-shadow-md">
              Our vision is to be the foremost healthcare provider in the region, recognized for excellence in patient care, medical education, and research.
            </p>
            <div>
              <Link to="/contact">
                <Button size="xl" className="group text-lg px-8">
                  We are here to assist you.
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info Boxes Section - Overlapping Hero */}
      <section className="relative z-20 -mt-16 pb-20">
        <div className="healthcare-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Box 1 */}
            <Link to="/contact" className="group">
              <div className="bg-card hover:bg-primary transition-colors duration-300 p-8 rounded-xl shadow-lg border border-border/50 h-full flex flex-col items-start gap-4 group-hover:transform group-hover:-translate-y-1">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-white/20">
                  <Calendar className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl mb-2 group-hover:text-white">Book Your Next Appointment</h3>
                  <p className="text-muted-foreground group-hover:text-white/90 text-sm">Schedule your visit at St. Elizabeth with ease online.</p>
                </div>
              </div>
            </Link>

            {/* Box 2 */}
            <div className="group">
              <div className="bg-card hover:bg-primary transition-colors duration-300 p-8 rounded-xl shadow-lg border border-border/50 h-full flex flex-col items-start gap-4 group-hover:transform group-hover:-translate-y-1 cursor-pointer">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-white/20">
                  <Pill className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl mb-2 group-hover:text-white">Order Medication Online</h3>
                  <p className="text-muted-foreground group-hover:text-white/90 text-sm">Convenient, safe, and quick online medication orders.</p>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <Link to="/insurance" className="group">
              <div className="bg-card hover:bg-primary transition-colors duration-300 p-8 rounded-xl shadow-lg border border-border/50 h-full flex flex-col items-start gap-4 group-hover:transform group-hover:-translate-y-1">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-white/20">
                  <ShieldCheck className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl mb-2 group-hover:text-white">Trusted Insurance Affiliations</h3>
                  <p className="text-muted-foreground group-hover:text-white/90 text-sm">Seamless coverage with trusted insurance partners at St. Elizabeth.</p>
                </div>
              </div>
            </Link>

            {/* Box 4 */}
            <Link to="/newsroom" className="group">
              <div className="bg-card hover:bg-primary transition-colors duration-300 p-8 rounded-xl shadow-lg border border-border/50 h-full flex flex-col items-start gap-4 group-hover:transform group-hover:-translate-y-1">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-white/20">
                  <Newspaper className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl mb-2 group-hover:text-white">News and Events</h3>
                  <p className="text-muted-foreground group-hover:text-white/90 text-sm">Stay updated on SESH's latest news and health events.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="healthcare-container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Our Commitment</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                Why Choose St. Elizabeth Specialist Hospital- SESH
              </h2>
            </div>
            
            <div className="bg-card rounded-2xl shadow-sm p-8 border border-border/50">
              <Tabs defaultValue="mission" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="mission">Our Mission</TabsTrigger>
                  <TabsTrigger value="vision">Our Vision</TabsTrigger>
                  <TabsTrigger value="values">Our Values</TabsTrigger>
                </TabsList>
                <TabsContent value="mission" className="animate-in fade-in slide-in-from-bottom-2">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To bring healthcare of international standards within the reach of every individual. We are committed to the achievement and maintenance of excellence in healthcare for the benefit of humanity and for prosperity.
                  </p>
                </TabsContent>
                <TabsContent value="vision" className="animate-in fade-in slide-in-from-bottom-2">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our vision is to 'Touch every Life positively'.
                  </p>
                </TabsContent>
                <TabsContent value="values" className="animate-in fade-in slide-in-from-bottom-2">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    ELIZABETH (Excellence, Loyalty, Impartiality, Zealous, Accountability, Benevolent, Trustworthiness, Harmonious). Are the VALUES that our organization uses to fulfil our care mission to provide excellence services to our community.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid with Hover Effects */}
      <section className="py-20">
        <div className="healthcare-container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Expert Medical Team", desc: "Our skilled and compassionate team delivers top-quality care.", image: teamImg, link: "/doctors" },
              { title: "Advanced Facilities", desc: "Equipped with the latest technology for accurate diagnosis and effective treatment.", image: facilityImg, link: "/about" },
              { title: "Patient-Centered Care", desc: "We prioritize each patient's unique needs for a supportive experience.", image: careImg, link: "/about" }
            ].map((item, i) => (
              <Link to={item.link} key={i} className="group relative overflow-hidden rounded-2xl h-[400px] bg-accent block cursor-pointer">
                {/* Image Background */}
                <div className="absolute inset-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <h3 className="text-2xl font-serif font-bold mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">{item.title}</h3>
                  <p className="text-white/90 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                    {item.desc}
                  </p>
                  <Button variant="link" className="text-white p-0 h-auto justify-start mt-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    Read more <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-muted/30">
        <div className="healthcare-container">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Our approach</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
              Empathy-driven solutions<br /> for lasting community impact
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Surgery */}
            <div className="bg-card hover:shadow-healthcare-lg transition-all duration-300 p-8 rounded-2xl border border-border/50 group flex flex-col items-start text-left">
              <div className="w-14 h-14 bg-transparent flex items-center justify-center mb-6 text-primary group-hover:text-primary transition-colors duration-300">
                <HealthcareIcons.SurgeryIcon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Surgery</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                At St. Elizabeth Hospital, our Surgery Department provides comprehensive and specialized surgical care
              </p>
              <div className="mt-auto">
                <Link to="/specialties/surgery">
                  <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 font-semibold uppercase text-xs tracking-wider">
                    Read more
                  </Button>
                </Link>
              </div>
            </div>

            {/* Oncology */}
            <div className="bg-card hover:shadow-healthcare-lg transition-all duration-300 p-8 rounded-2xl border border-border/50 group flex flex-col items-start text-left">
              <div className="w-14 h-14 bg-transparent flex items-center justify-center mb-6 text-primary group-hover:text-primary transition-colors duration-300">
                <HealthcareIcons.OncologyIcon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Oncology</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                St. Elizabeth’s Oncology is a full-fledged oncology care centre, committed to
              </p>
              <div className="mt-auto">
                <Link to="/specialties/oncology">
                  <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 font-semibold uppercase text-xs tracking-wider">
                    Read more
                  </Button>
                </Link>
              </div>
            </div>

            {/* Ophthalmology */}
            <div className="bg-card hover:shadow-healthcare-lg transition-all duration-300 p-8 rounded-2xl border border-border/50 group flex flex-col items-start text-left">
              <div className="w-14 h-14 bg-transparent flex items-center justify-center mb-6 text-primary group-hover:text-primary transition-colors duration-300">
                <HealthcareIcons.OphthalmologyIcon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Ophthalmology</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                Ophthalmology has undergone several advancements in diagnosis and treatment of eye disorders.
              </p>
              <div className="mt-auto">
                <Link to="/specialties/ophthalmology">
                  <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 font-semibold uppercase text-xs tracking-wider">
                    Read more
                  </Button>
                </Link>
              </div>
            </div>

            {/* Critical Care */}
            <div className="bg-card hover:shadow-healthcare-lg transition-all duration-300 p-8 rounded-2xl border border-border/50 group flex flex-col items-start text-left">
              <div className="w-14 h-14 bg-transparent flex items-center justify-center mb-6 text-primary group-hover:text-primary transition-colors duration-300">
                <HealthcareIcons.CriticalCareIcon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Critical Care and I.C.U</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                St. Elizabeth has invested heavily in developing regions’ most competent critical care areas
              </p>
              <div className="mt-auto">
                <Link to="/specialties/critical-care">
                  <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 font-semibold uppercase text-xs tracking-wider">
                    Read more
                  </Button>
                </Link>
              </div>
            </div>

            {/* Accident & Emergency */}
            <div className="bg-card hover:shadow-healthcare-lg transition-all duration-300 p-8 rounded-2xl border border-border/50 group flex flex-col items-start text-left">
              <div className="w-14 h-14 bg-transparent flex items-center justify-center mb-6 text-primary group-hover:text-primary transition-colors duration-300">
                <HealthcareIcons.AccidentEmergencyIcon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Accident & Emergency</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                Our Accident & Emergency (A&E) Department is a critical component of St. Elizabeth Hospital
              </p>
              <div className="mt-auto">
                <Link to="/specialties/emergency">
                  <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 font-semibold uppercase text-xs tracking-wider">
                    Read more
                  </Button>
                </Link>
              </div>
            </div>

            {/* Maternity */}
            <div className="bg-card hover:shadow-healthcare-lg transition-all duration-300 p-8 rounded-2xl border border-border/50 group flex flex-col items-start text-left">
              <div className="w-14 h-14 bg-transparent flex items-center justify-center mb-6 text-primary group-hover:text-primary transition-colors duration-300">
                <HealthcareIcons.MaternityIcon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">Maternity</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                We offer a comprehensive range of maternity services, including antenatal classes to prepare expectant
              </p>
              <div className="mt-auto">
                <Link to="/specialties/maternity">
                  <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 font-semibold uppercase text-xs tracking-wider">
                    Read more
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW DARK THEME SECTIONS APPENDED --- */}

      {/* Insurance Affiliations Section (Dark Green) */}
      <section className="py-16 bg-[#004d40]">
        <div className="healthcare-container">
          <div className="text-center mb-10 overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 whitespace-nowrap">Insurance Affiliations</h2>
            <p className="text-white/80">You're in good hands</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'NIS', logo: nisLogo },
              { name: 'SHA', logo: shaLogo },
              { name: 'MUA', logo: muaLogo },
              { name: 'm-tiba', logo: mtibaLogo },
              { name: 'Minet', logo: minetLogo },
              { name: 'LiB' },
              { name: 'LIAISON GROUP', logo: liaisonLogo },
              { name: 'KENYA REVENUE AUTHORITY' },
              { name: 'KENYAN ALLIANCE' },
              { name: 'kenbright' },
              { name: 'Jubilee', logo: jubileeLogo },
              { name: 'Heritage' },
              { name: 'GA Insurance' },
              { name: 'First Assurance' },
              { name: 'EQUITY' },
              { name: 'KENYA DEFENCE FORCES' },
              { name: 'CIC GROUP' },
              { name: 'Britam' },
              { name: 'africa MEDILINK' },
              { name: 'AAR Insurance' },
              { name: 'TAKAFUL' },
              { name: 'OLDMUTUAL' },
              { name: 'Sedgwick' },
              { name: 'POSTA' },
              { name: 'PARLIAMENT OF KENYA' },
              { name: 'PACIS' },
              { name: 'PACIFIC' },
              { name: 'Sedgwick' }
            ].map((partner, i) => (
              <div key={i} className="bg-white p-4 h-24 rounded flex flex-col items-center justify-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 group hover:scale-105">
                 {partner.logo ? (
                    <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain" />
                 ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-teal-600 opacity-50 group-hover:opacity-100"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                      <span className="text-black font-bold text-center uppercase text-[0.65rem] md:text-xs tracking-wide leading-tight">{partner.name}</span>
                    </>
                 )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Stories / Testimonials (Dark Blue/Purple) */}
      <section className="py-20 bg-[#1e1b4b] text-white">
        <div className="healthcare-container text-center">
            <span className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-2 block">Progress. Hope. Transformation.</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Real Stories of Healing and Hope</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-16">
              Discover the heartfelt stories of our patients who found renewed health, comfort, and confidence through our care.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { 
                  text: "As the Project Manager for St. Elizabeth Specialist Hospital in Busia, I am proud to be part of a transformative project that is steadily taking shape. The hospital is designed to deliver advanced specialized healthcare services to the people of Busia County.",
                  role: "Project Manager"
                },
                { 
                  text: "As the Site Engineer overseeing the ongoing construction of St. Elizabeth Specialist Hospital, I am proud to witness the steady progress of this transformative healthcare project. The development aims to provide modern facilities.",
                  role: "Site Engineer"
                },
                { 
                  text: "As a resident of the Busia community, I am truly impressed by the progress and vision behind the construction of St. Elizabeth Specialist Hospital. This project represents hope for many families.",
                  role: "Community Resident"
                }
              ].map((story, i) => (
                 <div key={i} className="bg-[#2e2a85]/50 p-8 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-colors duration-300">
                    <Quote className="w-8 h-8 text-cyan-400 mb-4 opacity-50" />
                    <p className="text-sm leading-relaxed mb-6 opacity-90">{story.text}</p>
                 </div>
              ))}
            </div>
        </div>
      </section>

      {/* Video Tour Section (Black/Dark) */}
      <section className="py-20 bg-[#121212] text-white">
        <div className="healthcare-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-2 block">Tour Video</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                Tour St. Elizabeth Specialist Hospital- SESH
              </h2>
              <p className="text-xl opacity-80 mb-8 max-w-lg">
                Bringing healthcare of international standards within the reach of every individual.
              </p>
              <Link to="/about">
                <Button size="xl" className="bg-teal-600 hover:bg-teal-700 text-white border-none min-w-[200px]">
                  Check Our Gallery
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <p className="mt-8 text-xs font-bold uppercase tracking-widest text-white/40">The Heartbeat of Community Health.</p>
            </div>
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                {/* Simulated Youtube Embed/Player */}
                <div className="absolute inset-0 flex items-center justify-center bg-black">
                   <img src={heroImage} alt="Video thumbnail" className="w-full h-full object-cover opacity-40" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-[0_0_30px_rgba(20,184,166,0.5)]">
                          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                      </div>
                   </div>
                   <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs font-mono text-white/70">
                      <span>0:14 / 0:14</span>
                      <div className="flex gap-2">
                        <span>HD</span>
                        <span>Full</span>
                      </div>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Quality Care */}
      <section className="py-20 bg-[#121212] text-white border-t border-white/5">
        <div className="healthcare-container">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Commitment to <br/>Quality Care</h2>
                 <div className="space-y-8">
                    <div className="flex gap-6">
                       <div className="w-14 h-14 bg-teal-900/30 rounded-full flex items-center justify-center shrink-0 border border-teal-500/20">
                          <HeartHandshake className="w-7 h-7 text-teal-400" />
                       </div>
                       <div>
                          <h3 className="font-bold text-xl mb-2 text-teal-50">Compassion</h3>
                          <p className="text-white/60 leading-relaxed">Involving local communities to drive grassroots initiatives and sustainable health outcomes.</p>
                       </div>
                    </div>
                    <div className="flex gap-6">
                       <div className="w-14 h-14 bg-teal-900/30 rounded-full flex items-center justify-center shrink-0 border border-teal-500/20">
                          <Lightbulb className="w-7 h-7 text-teal-400" />
                       </div>
                       <div>
                          <h3 className="font-bold text-xl mb-2 text-teal-50">Innovative solutions</h3>
                          <p className="text-white/60 leading-relaxed">Using technology and best practices to address complex health challenges effectively.</p>
                       </div>
                    </div>
                    <div className="flex gap-6">
                       <div className="w-14 h-14 bg-teal-900/30 rounded-full flex items-center justify-center shrink-0 border border-teal-500/20">
                          <ScrollText className="w-7 h-7 text-teal-400" />
                       </div>
                       <div>
                          <h3 className="font-bold text-xl mb-2 text-teal-50">Dedicated team</h3>
                          <p className="text-white/60 leading-relaxed">Passionate professionals committed to making a difference in healthcare delivery.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="flex gap-4 h-[500px]">
                 <div className="w-1/2 h-full rounded-2xl overflow-hidden">
                    <img src={careImg} alt="Doctor" className="w-full h-full object-cover" />
                 </div>
                 <div className="w-1/2 h-full rounded-2xl overflow-hidden">
                    <img src={teamImg} alt="Patient Care" className="w-full h-full object-cover" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0f172a] text-white">
        <div className="healthcare-container">
           <div className="grid lg:grid-cols-2 gap-16">
              <div>
                 <span className="bg-teal-500/10 text-teal-400 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-6 inline-block border border-teal-500/20">FAQs</span>
                 <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Frequently Asked Questions - St. Elizabeth Specialist Hospital (SESH)</h2>
                 <p className="text-white/60 mb-8 leading-relaxed">
                    Find answers to common questions about St. Elizabeth Specialist Hospital (SESH), including services, visiting hours, and insurance policies, to make your experience smooth and informed.
                 </p>
                 <Link to="/contact">
                    <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white min-w-[150px]">Get in touch</Button>
                 </Link>
              </div>
              
              <div>
                 <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="item-1" className="border-none bg-[#1e293b] rounded-lg px-2 data-[state=open]:bg-teal-900/20">
                      <AccordionTrigger className="hover:no-underline px-4 py-4 text-left font-semibold text-teal-50 [&[data-state=open]]:text-teal-400">What services does St. Elizabeth Specialist Hospital provide?</AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 text-white/70">
                        We offer a wide range of specialized healthcare services, including cardiology, oncology, orthopedics, maternity care, pediatrics, surgical services, and emergency care. Our expert team is dedicated to providing advanced, compassionate care to every patient.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border-none bg-[#1e293b] rounded-lg px-2 data-[state=open]:bg-teal-900/20">
                      <AccordionTrigger className="hover:no-underline px-4 py-4 text-left font-semibold text-teal-50 [&[data-state=open]]:text-teal-400">What are the visiting hours at SESH?</AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 text-white/70">
                        Our general visiting hours are from 10:00 AM to 8:00 PM. However, specific units like ICU may have restricted hours. Please contact us for more details.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="border-none bg-[#1e293b] rounded-lg px-2 data-[state=open]:bg-teal-900/20">
                      <AccordionTrigger className="hover:no-underline px-4 py-4 text-left font-semibold text-teal-50 [&[data-state=open]]:text-teal-400">Does SESH accept insurance, and which providers are covered?</AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 text-white/70">
                        Yes, we accept most major insurance providers including NHIF, Jubilee, AAR, and others. Please view our Insurance Affiliations section or contact our billing department to confirm your coverage.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className="border-none bg-[#1e293b] rounded-lg px-2 data-[state=open]:bg-teal-900/20">
                      <AccordionTrigger className="hover:no-underline px-4 py-4 text-left font-semibold text-teal-50 [&[data-state=open]]:text-teal-400">How can I book an appointment with a specialist?</AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 text-white/70">
                        You can book an appointment through our website using the "Book Appointment" button, calling our reception desk, or visiting the hospital in person.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5" className="border-none bg-[#1e293b] rounded-lg px-2 data-[state=open]:bg-teal-900/20">
                      <AccordionTrigger className="hover:no-underline px-4 py-4 text-left font-semibold text-teal-50 [&[data-state=open]]:text-teal-400">Are there any health and wellness programs available at SESH?</AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 text-white/70">
                        Yes, we offer various wellness programs including nutritional counseling, antenatal classes, and regular health screening camps for the community.
                      </AccordionContent>
                    </AccordionItem>
                 </Accordion>
              </div>
           </div>
        </div>
      </section>

      {/* News and Events (Kept from original but styled) */}
      <section className="py-20 bg-[#121212] text-white border-t border-white/5">
        <div className="healthcare-container text-center">
            <span className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-2 block">Latest News</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-12">News and Events</h2>
            <p className="text-white/60 mb-12 max-w-2xl mx-auto">Stay updated with the latest hospital news, events, patient care advancements, and community programs.</p>
            
            <div className="grid md:grid-cols-3 gap-8">
               {newsItems.slice(0, 3).map((item, index) => (
                 <Link to={`/news/${item.id}`} key={index} className="group cursor-pointer text-left block">
                    <div className="overflow-hidden rounded-xl mb-4 aspect-[4/3] relative">
                       <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="text-teal-400 text-xs font-bold mb-2 uppercase tracking-wider">{item.date}</div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-teal-400 transition-colors line-clamp-2">{item.title}</h3>
                    <p className="text-white/60 line-clamp-2 text-sm">{item.excerpt}</p>
                 </Link>
               ))}
            </div>
        </div>
      </section>

      {/* Callback Form Section (Floating Overlap) */}
      <section className="relative z-20 -mb-24">
         <div className="healthcare-container">
            <div className="bg-[#004d40] text-white rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">
               <div className="p-12 lg:p-24 flex flex-col justify-center">
                  <span className="text-xs font-bold uppercase tracking-widest bg-white/10 w-fit px-3 py-1 rounded mb-6">Need some advice from our experts?</span>
                  <h2 className="text-4xl font-serif font-bold mb-4">Request a Call Back<br/>Today</h2>
                  <p className="text-white/70 mb-8 max-w-md">We will make a single attempt to contact you from a withheld number, usually within 24 hours of your request.</p>
                  
                  <form className="space-y-4 max-w-md">
                     <div>
                       <Input placeholder="Name" className="bg-transparent border-white/20 text-white placeholder:text-white/50 h-12 focus-visible:ring-teal-400" />
                     </div>
                     <div>
                       <Input placeholder="Email address" className="bg-transparent border-white/20 text-white placeholder:text-white/50 h-12 focus-visible:ring-teal-400" />
                     </div>
                     <div>
                       <Textarea placeholder="Message" className="bg-transparent border-white/20 text-white placeholder:text-white/50 min-h-[120px] focus-visible:ring-teal-400" />
                     </div>
                     <Button className="w-full bg-teal-500 hover:bg-teal-600 h-12 text-lg mt-2 font-bold text-white">Submit</Button>
                  </form>
                  
               </div>
               <div className="relative h-full min-h-[500px] lg:h-auto group">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" 
                    alt="Doctor" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#004d40]/90 via-[#004d40]/40 to-transparent lg:w-1/3"></div>
                  
                  {/* Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <p className="text-xl md:text-2xl font-bold text-white mb-1 leading-tight">
                      Have questions or need to book an appointment?
                    </p>
                    <p className="text-lg font-medium text-teal-400">
                      We've got you covered.
                    </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
