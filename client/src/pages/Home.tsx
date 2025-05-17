import HeroSection from "@/components/HeroSection";
import Introduction from "@/components/Introduction";
import Solutions from "@/components/Solutions";
import Advantages from "@/components/Advantages";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import QuoteForm from "@/components/QuoteForm";
import Gallery from "@/components/GalleryImages";
import Contact from "@/components/Contact";
import ReadyToPlug from "@/components/ReadyToPlug";
import { useEffect } from "react";

const Home = () => {
  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash && target.hash !== '#') {
        e.preventDefault();
        
        const targetElement = document.querySelector(target.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Adjust for fixed header
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <main>
      <HeroSection />
      <Introduction />
      <Solutions />
      <ReadyToPlug />
      <Advantages />
      <Process />
      <Testimonials />
      <CTA />
      <FAQ />
      <QuoteForm />
      <Gallery />
      <Contact />
    </main>
  );
};

export default Home;
