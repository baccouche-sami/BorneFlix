import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="w-auto h-10">
                <img src={logo} alt="BorneFlix Logo" className="h-full w-auto" />
              </div>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="focus:outline-none flex items-center space-x-2"
              aria-label="Menu principal"
            >
              <span className={`text-sm font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-600' : 'text-white'}`}>Menu</span>
              <i className={`fas fa-bars text-xl transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}></i>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#solutions" 
              className={`font-medium hover:text-secondary transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Solutions
            </a>
            <a 
              href="#avantages" 
              className={`font-medium hover:text-secondary transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Avantages
            </a>
            <a 
              href="#processus" 
              className={`font-medium hover:text-secondary transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Processus
            </a>
            <a 
              href="#temoignages" 
              className={`font-medium hover:text-secondary transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Témoignages
            </a>
            <a 
              href="#contact" 
              className={`font-medium hover:text-secondary transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contact
            </a>
            
            <div className="border-l border-gray-300 dark:border-gray-700 h-6 mx-2"></div>
            
            <div className="flex items-center space-x-2">
              <a 
                href="tel:0123456789" 
                className={`flex items-center hover:text-secondary transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <i className="fas fa-phone-alt mr-2 text-secondary"></i>
                <span className="text-sm font-medium">01 23 45 67 89</span>
              </a>
            </div>
            
            <a href="#devis">
              <Button className="bg-secondary hover:bg-green-600 text-white font-medium px-6 py-5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                Demander un devis
              </Button>
            </a>
          </nav>
        </div>
        
        {/* Mobile Navigation Dropdown */}
        <div 
          className={`md:hidden absolute left-0 right-0 bg-white shadow-md px-6 py-6 mt-3 transition-all duration-300 z-50 ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-xl text-primary">Menu</h3>
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Fermer le menu"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          
          <nav className="flex flex-col space-y-5">
            <a href="#solutions" className="flex items-center font-medium text-gray-700 hover:text-secondary transition-colors">
              <i className="fas fa-plug text-secondary w-6 mr-3"></i>
              <span>Solutions</span>
            </a>
            <a href="#avantages" className="flex items-center font-medium text-gray-700 hover:text-secondary transition-colors">
              <i className="fas fa-award text-secondary w-6 mr-3"></i>
              <span>Avantages</span>
            </a>
            <a href="#processus" className="flex items-center font-medium text-gray-700 hover:text-secondary transition-colors">
              <i className="fas fa-tasks text-secondary w-6 mr-3"></i>
              <span>Processus</span>
            </a>
            <a href="#temoignages" className="flex items-center font-medium text-gray-700 hover:text-secondary transition-colors">
              <i className="fas fa-comment-alt text-secondary w-6 mr-3"></i>
              <span>Témoignages</span>
            </a>
            <a href="#contact" className="flex items-center font-medium text-gray-700 hover:text-secondary transition-colors">
              <i className="fas fa-envelope text-secondary w-6 mr-3"></i>
              <span>Contact</span>
            </a>
            
            <div className="pt-4 border-t border-gray-100">
              <a href="tel:0123456789" className="flex items-center font-medium text-gray-700 hover:text-secondary transition-colors">
                <i className="fas fa-phone-alt text-secondary w-6 mr-3"></i>
                <span>01 23 45 67 89</span>
              </a>
            </div>
          </nav>
          
          <div className="mt-6 pt-6 border-t border-gray-100">
            <a href="#devis" className="bg-secondary hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg text-center transition-colors w-full block">
              Demander un devis gratuit
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
