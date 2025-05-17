import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              Borne<span className="text-secondary">Flix</span>
            </h1>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="focus:outline-none"
            >
              <i className="fas fa-bars text-2xl text-primary"></i>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#solutions" className="font-medium text-primary hover:text-secondary transition-colors">Solutions</a>
            <a href="#avantages" className="font-medium text-primary hover:text-secondary transition-colors">Avantages</a>
            <a href="#processus" className="font-medium text-primary hover:text-secondary transition-colors">Processus</a>
            <a href="#temoignages" className="font-medium text-primary hover:text-secondary transition-colors">Témoignages</a>
            <a href="#contact" className="font-medium text-primary hover:text-secondary transition-colors">Contact</a>
          </nav>
          
          <div className="hidden md:block">
            <a href="#devis">
              <Button className="bg-secondary hover:bg-green-600 text-white font-medium px-6 rounded-full">
                Demander un devis
              </Button>
            </a>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} mt-4 pb-2`}>
          <nav className="flex flex-col space-y-3">
            <a href="#solutions" className="font-medium text-primary hover:text-secondary transition-colors">Solutions</a>
            <a href="#avantages" className="font-medium text-primary hover:text-secondary transition-colors">Avantages</a>
            <a href="#processus" className="font-medium text-primary hover:text-secondary transition-colors">Processus</a>
            <a href="#temoignages" className="font-medium text-primary hover:text-secondary transition-colors">Témoignages</a>
            <a href="#contact" className="font-medium text-primary hover:text-secondary transition-colors">Contact</a>
            <a href="#devis" className="bg-secondary hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg text-center transition-colors">
              Demander un devis
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
