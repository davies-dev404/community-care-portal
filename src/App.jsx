
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Doctors from "./pages/Doctors.jsx";
import Specialties from "./pages/Specialties.jsx";
import Insurance from "./pages/Insurance.jsx";
import Newsroom from "./pages/Newsroom.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import SpecialtyDetail from "./pages/SpecialtyDetail.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import Accessibility from "./pages/Accessibility.jsx";

import NewsDetail from "./pages/NewsDetail.jsx";
import Gallery from "./pages/Gallery.jsx";

import Analytics from "@/components/Analytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Analytics />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/specialties/:slug" element={<SpecialtyDetail />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/newsroom" element={<Newsroom />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
