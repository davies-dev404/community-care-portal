import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import facilityImg from '../assets/facility.png';
import surgeryImg from '../assets/specialties/laparoscopic_surgery.png';
import cathLabImg from '../assets/specialties/cardiac.png';
import mriImg from '../assets/specialties/imaging.png';
import teamImg from '../assets/team.png';
import pediatricsImg from '../assets/specialties/pediatrics.png';
import careImg from '../assets/care.png';
import labImg from '../assets/specialties/haematology.png';
import familyImg from '../assets/specialties/family_medicine.png';

const galleryCategories = [
  { id: 'all', label: 'All Photos' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'team', label: 'Our Team' },
  { id: 'events', label: 'Events & Community' },
  { id: 'equipment', label: 'Equipment' }
];

const galleryImages = [
  {
    src: facilityImg,
    category: "facilities",
    title: "Hospital Building",
    description: "Modern exterior of St. Elizabeth Specialist Hospital."
  },
  {
    src: surgeryImg,
    category: "team",
    title: "Surgical Team",
    description: "Our expert surgeons performing a complex procedure."
  },
  {
    src: cathLabImg,
    category: "facilities",
    title: "Cath Lab",
    description: "State-of-the-art Catheterization Laboratory."
  },
  {
    src: mriImg,
    category: "equipment",
    title: "MRI Scanner",
    description: "Advanced 3.0T MRI Scanner for precise imaging."
  },
  {
    src: teamImg,
    category: "events",
    title: "Medical Camp",
    description: "Serving the community at our annual free health camp."
  },
  {
    src: pediatricsImg,
    category: "team",
    title: "Pediatric Care",
    description: "Compassionate care for our youngest patients."
  },
  {
    src: careImg,
    category: "facilities",
    title: "Patient Room",
    description: "Comfortable and private recovery rooms."
  },
  {
    src: labImg,
    category: "equipment",
    title: "Laboratory",
    description: "Fully equipped pathology laboratory."
  },
  {
    src: familyImg,
    category: "events",
    title: "Health Education",
    description: "Teaching the community about preventative health."
  }
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredImages = activeTab === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1e3a8a] mb-6">Our Gallery</h1>
            <p className="text-xl text-slate-600">
              A glimpse into our facilities, our people, and our commitment to care.
            </p>
            <div className="w-24 h-1 bg-[#06b6d4] mx-auto rounded-full mt-6"></div>
          </div>

          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12">
              <TabsList className="bg-white/50 backdrop-blur-sm p-1 rounded-full border border-slate-200">
                {galleryCategories.map(cat => (
                  <TabsTrigger 
                    key={cat.id} 
                    value={cat.id}
                    className="rounded-full px-6 py-2.5 data-[state=active]:bg-[#06b6d4] data-[state=active]:text-white transition-all"
                  >
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-0 animate-in fade-in zoom-in-95 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredImages.map((image, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={image.src} 
                        alt={image.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <span className="text-[#06b6d4] text-xs font-bold uppercase tracking-wider mb-2">
                          {galleryCategories.find(c => c.id === image.category)?.label}
                        </span>
                        <h3 className="text-white font-bold text-xl mb-1">{image.title}</h3>
                        <p className="text-white/80 text-sm">{image.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {filteredImages.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              <p>No images found in this category.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
