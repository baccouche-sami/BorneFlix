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
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
      style={{ 
        backgroundColor: isScrolled || isMobileMenuOpen ? 'white' : '#003566',
        boxShadow: isScrolled || isMobileMenuOpen ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="w-auto h-8 md:h-10 bg-white rounded-full p-1">
                <img src={logo} alt="BorneFlix Logo" className="h-full w-auto" />
              </div>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="focus:outline-none flex items-center space-x-2 px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
              aria-label="Menu principal"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="text-sm font-medium text-white">Menu</span>
              <i className={`${isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'} text-xl text-white`}></i>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a 
              href="#solutions" 
              className="font-medium text-white hover:text-secondary transition-colors"
            >
              Solutions
            </a>
            <a 
              href="#avantages" 
              className="font-medium text-white hover:text-secondary transition-colors"
            >
              Avantages
            </a>
            <a 
              href="#processus" 
              className="font-medium text-white hover:text-secondary transition-colors"
            >
              Processus
            </a>
            <a 
              href="#temoignages" 
              className="font-medium text-white hover:text-secondary transition-colors"
            >
              Témoignages
            </a>
            <a 
              href="#contact" 
              className="font-medium text-white hover:text-secondary transition-colors"
            >
              Contact
            </a>
            
            <div className="border-l border-white h-6 mx-1 lg:mx-2"></div>
            
            <div className="flex items-center">
              <a 
                href="tel:0123456789" 
                className="flex items-center text-white hover:text-secondary transition-colors"
              >
                <i className="fas fa-phone-alt mr-2 text-secondary"></i>
                <span className="text-sm font-medium">01 23 45 67 89</span>
              </a>
            </div>
            
            <a href="#devis">
              <Button className="bg-secondary hover:bg-green-600 text-white font-medium px-6 py-2.5 whitespace-nowrap rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                Demander un devis
              </Button>
            </a>
          </nav>
        </div>
        
        {/* Mobile Navigation Dropdown */}
        <div 
          className={`md:hidden fixed top-[61px] left-0 right-0 bottom-0 bg-white shadow-lg px-6 pt-6 pb-32 overflow-y-auto transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full pointer-events-none'
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-xl text-primary">Navigation</h3>
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-gray-700 p-2"
              aria-label="Fermer le menu"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          
          <nav className="flex flex-col space-y-5">
            <a 
              href="#solutions" 
              className="flex items-center font-medium text-gray-700 hover:text-secondary transition-colors py-2"
              onClick={handleMobileLinkClick}
            >
              <i className="fas fa-plug text-secondary w-8 mr-3 text-center"></i>
              <span>Solutions</span>
            </a>
            <a 
              href="#avantages" 
              className="flex items-center font-medium text-gray-700 hover:text-secondary transition-colors py-2"
              onClick={handleMobileLinkClick}
            >
              <i className="fas fa-award text-secondary w-8 mr-3 text-center"></i>
              <span>Avantages</span>
            </a>
            <a 
              href="#processus" 
              className="flex items-center font-medium text-gray-700 hover:text-secondary transition-colors py-2"
              onClick={handleMobileLinkClick}
            >
              <i className="fas fa-tasks text-secondary w-8 mr-3 text-center"></i>
              <span>Processus</span>
            </a>
            <a 
              href="#temoignages" 
              className="flex items-center font-medium text-gray-700 hover:text-secondary transition-colors py-2"
              onClick={handleMobileLinkClick}
            >
              <i className="fas fa-comment-alt text-secondary w-8 mr-3 text-center"></i>
              <span>Témoignages</span>
            </a>
            <a 
              href="#contact" 
              className="flex items-center font-medium text-gray-700 hover:text-secondary transition-colors py-2"
              onClick={handleMobileLinkClick}
            >
              <i className="fas fa-envelope text-secondary w-8 mr-3 text-center"></i>
              <span>Contact</span>
            </a>
            
            <div className="pt-6 border-t border-gray-100 mt-4">
              <a 
                href="tel:0123456789" 
                className="flex items-center font-medium text-gray-700 hover:text-secondary transition-colors py-2"
              >
                <i className="fas fa-phone-alt text-secondary w-8 mr-3 text-center"></i>
                <span>01 23 45 67 89</span>
              </a>
            </div>
          </nav>
          
          <div className="mt-10 pt-6 border-t border-gray-100">
            <a 
              href="#devis" 
              className="bg-secondary hover:bg-green-600 text-white font-medium py-4 px-6 rounded-lg text-center transition-colors w-full block"
              onClick={handleMobileLinkClick}
            >
              Demander un devis gratuit
            </a>
          </div>
        </div>
      </div>
      
      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
};

export default Header;
