import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Insurance Logos
import nisLogo from '../assets/insurance/nis.png';
import shaLogo from '../assets/insurance/sha.png';
import muaLogo from '../assets/insurance/mua.png';
import mtibaLogo from '../assets/insurance/mtiba.png';
import minetLogo from '../assets/insurance/minet.png';
import liaisonLogo from '../assets/insurance/liaison.png';
import jubileeLogo from '../assets/insurance/jubilee.png';
import libLogo from '../assets/insurance/lib.png';
import kraLogo from '../assets/insurance/kra.png';
import kenbrightLogo from '../assets/insurance/kenbright.png';
import heritageLogo from '../assets/insurance/heritage.png';
import gaLogo from '../assets/insurance/ga.png';
import firstAssuranceLogo from '../assets/insurance/first_assurance.png';
import equityLogo from '../assets/insurance/equity.png';
import licLogo from '../assets/insurance/lic.png';
import britamLogo from '../assets/insurance/britam.png';
import pacisLogo from '../assets/insurance/pacis.png';
import pacificLogo from '../assets/insurance/pacific.png';
import cicLogo from '../assets/insurance/cic.png';
import takafulLogo from '../assets/insurance/takaful.png';
import glmLogo from '../assets/insurance/glm.png';
import sedgwickLogo from '../assets/insurance/sedgwick.png';
import postaLogo from '../assets/insurance/posta.png';

const insurancePartners = [
  { name: "NIS", logo: nisLogo },
  { name: "SHA", logo: shaLogo },
  { name: "MUA", logo: muaLogo },
  { name: "m-tiba", logo: mtibaLogo },
  { name: "Minet", logo: minetLogo },
  { name: "LIB", logo: libLogo },
  { name: "LIAISON GROUP", logo: liaisonLogo },
  { name: "KENYA REVENUE AUTHORITY", logo: kraLogo },
  { name: "Find Acrome" },
  { name: "Kenbright", logo: kenbrightLogo },
  { name: "Jubilee", logo: jubileeLogo },
  { name: "Heritage", logo: heritageLogo },
  { name: "GA Insurance", logo: gaLogo },
  { name: "First Assurance", logo: firstAssuranceLogo },
  { name: "EQUITY", logo: equityLogo },
  { name: "LIC GROUP", logo: licLogo },
  { name: "Britam", logo: britamLogo },
  { name: "CIC Group", logo: cicLogo },
  { name: "Takaful", logo: takafulLogo },
  { name: "GLM Mutual", logo: glmLogo },
  { name: "Sedgwick", logo: sedgwickLogo },
  { name: "Posta", logo: postaLogo },

  { name: "PACIS", logo: pacisLogo },
  { name: "PACIFIC", logo: pacificLogo }
];

import SEO from '@/components/SEO';

const Insurance = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <SEO 
        title="Insurance Partners"
        description="View our accepted insurance partners at Hope Specialist Hospitals. We work with NHIF, Jubilee, AAR, and many others to ensure seamless coverage."
      />
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">Insurance Affiliations</h1>
            <p className="text-xl text-slate-600 mb-8">
              You&apos;re in good hands. We advocate for our patients to ensure seamless coverage.
            </p>
            <div className="w-24 h-1 bg-[#06b6d4] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {insurancePartners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center border border-slate-100 min-h-[120px] group hover:-translate-y-1"
              >
                {partner.logo ? (
                   <img 
                     src={partner.logo} 
                     alt={partner.name} 
                     className="max-w-full max-h-20 object-contain transition-all duration-300"
                   />
                ) : (
                   <span className="text-slate-700 font-semibold text-center text-sm md:text-base px-2">
                     {partner.name}
                   </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#1e3a8a] text-white p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Don&apos;t see your insurance provider?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              We are constantly expanding our network of insurance partners. Please contact our billing department to verify your coverage directly.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-[#06b6d4] hover:bg-[#06b6d4]/90 text-white font-semibold rounded-lg transition-colors"
            >
              Contact Us for Verification
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Insurance;
