import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    if (!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile, isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent scrolling when menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  // Clean up the overflow style when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Force close mobile menu when clicking on a link
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      {/* Fixed top header - style inspired by Logivolt.fr */}
      <header className="fixed w-full z-50 top-0">
        {/* Top blue announcement bar */}
        <div className="w-full bg-[#e5e9f0]">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="flex-shrink-0">
                <a href="#" className="flex items-center">
                  <div className="h-8">
                    <span className="text-[#003566] font-bold text-2xl">BORNE<span className="text-[#8dc63f]">FLIX</span></span>
                  </div>
                </a>
              </div>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#solutions" className="text-sm font-medium text-[#003566] hover:text-[#8dc63f] transition-colors">
                  NOS SOLUTIONS
                </a>
                <a href="#operateurs" className="text-sm font-medium text-[#003566] hover:text-[#8dc63f] transition-colors">
                  NOS OPÉRATEURS
                </a>
                <a href="#blog" className="text-sm font-medium text-[#003566] hover:text-[#8dc63f] transition-colors">
                  BLOG
                </a>
                <a href="#presse" className="text-sm font-medium text-[#003566] hover:text-[#8dc63f] transition-colors">
                  PRESSE
                </a>
                <a href="#apropos" className="text-sm font-medium text-[#003566] hover:text-[#8dc63f] transition-colors">
                  À PROPOS
                </a>
                <a href="#vous-etes" className="text-sm font-medium text-[#003566] hover:text-[#8dc63f] transition-colors">
                  VOUS ÊTES
                </a>
                <a href="#devis" className="text-sm font-medium bg-[#8dc63f] hover:bg-[#7db52f] text-white px-4 py-1 rounded transition-colors">
                  CONTACT
                </a>
              </nav>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="focus:outline-none p-2"
                  aria-label="Menu principal"
                  aria-expanded={isMobileMenuOpen}
                >
                  <i className={`${isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'} text-[#003566] text-xl`}></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Alert banner */}
        <div className="w-full bg-[#c21f70] text-white py-3">
          <div className="container mx-auto px-4">
            <p className="text-sm md:text-base font-medium text-center">
              Installer des bornes de recharge pour véhicules électriques en copropriété soulève de nombreuses questions. Nous y répondons dans un webinaire le 22 mai.
            </p>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div 
          className={`md:hidden fixed top-[120px] left-0 right-0 bottom-0 bg-white shadow-lg px-6 pt-6 pb-32 overflow-y-auto transition-transform duration-300 z-40 ${
            isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full pointer-events-none'
          }`}
        >
          <nav className="flex flex-col space-y-5">
            <a 
              href="#solutions" 
              className="flex items-center font-medium text-[#003566] hover:text-[#8dc63f] transition-colors py-2 border-b border-gray-100 pb-3"
              onClick={handleMobileLinkClick}
            >
              <span>NOS SOLUTIONS</span>
            </a>
            <a 
              href="#operateurs" 
              className="flex items-center font-medium text-[#003566] hover:text-[#8dc63f] transition-colors py-2 border-b border-gray-100 pb-3"
              onClick={handleMobileLinkClick}
            >
              <span>NOS OPÉRATEURS</span>
            </a>
            <a 
              href="#blog" 
              className="flex items-center font-medium text-[#003566] hover:text-[#8dc63f] transition-colors py-2 border-b border-gray-100 pb-3"
              onClick={handleMobileLinkClick}
            >
              <span>BLOG</span>
            </a>
            <a 
              href="#presse" 
              className="flex items-center font-medium text-[#003566] hover:text-[#8dc63f] transition-colors py-2 border-b border-gray-100 pb-3"
              onClick={handleMobileLinkClick}
            >
              <span>PRESSE</span>
            </a>
            <a 
              href="#apropos" 
              className="flex items-center font-medium text-[#003566] hover:text-[#8dc63f] transition-colors py-2 border-b border-gray-100 pb-3"
              onClick={handleMobileLinkClick}
            >
              <span>À PROPOS</span>
            </a>
            <a 
              href="#vous-etes" 
              className="flex items-center font-medium text-[#003566] hover:text-[#8dc63f] transition-colors py-2 border-b border-gray-100 pb-3"
              onClick={handleMobileLinkClick}
            >
              <span>VOUS ÊTES</span>
            </a>
          </nav>
          
          <div className="mt-6 pt-4">
            <a 
              href="#devis" 
              className="bg-[#8dc63f] hover:bg-[#7db52f] text-white font-medium py-3 px-6 rounded text-center transition-colors w-full block"
              onClick={handleMobileLinkClick}
            >
              CONTACT
            </a>
          </div>
        </div>
      </header>

      {/* Empty space to offset the fixed header */}
      <div className="h-[120px]"></div>
      
      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default Header;
