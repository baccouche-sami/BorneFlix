import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

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
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <h1 className="text-2xl font-bold">
                <span className={`transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>
                  Borne
                </span>
                <span className="text-secondary">
                  Flix
                </span>
              </h1>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="focus:outline-none"
            >
              <i className={`fas fa-bars text-2xl transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}></i>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
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
          </nav>
          
          <div className="hidden md:block">
            <a href="#devis">
              <Button className="bg-secondary hover:bg-green-600 text-white font-medium px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                Demander un devis
              </Button>
            </a>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          className={`md:hidden absolute left-0 right-0 bg-white shadow-md px-4 py-5 mt-2 transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col space-y-4">
            <a href="#solutions" className="font-medium text-gray-700 hover:text-secondary transition-colors">Solutions</a>
            <a href="#avantages" className="font-medium text-gray-700 hover:text-secondary transition-colors">Avantages</a>
            <a href="#processus" className="font-medium text-gray-700 hover:text-secondary transition-colors">Processus</a>
            <a href="#temoignages" className="font-medium text-gray-700 hover:text-secondary transition-colors">Témoignages</a>
            <a href="#contact" className="font-medium text-gray-700 hover:text-secondary transition-colors">Contact</a>
            <a href="#devis" className="bg-secondary hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg text-center transition-colors mt-3">
              Demander un devis
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
