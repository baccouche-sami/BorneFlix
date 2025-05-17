import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import ChargingStationAnimation from "./ChargingStationAnimation";
import { motion } from "framer-motion";
// Utilisation des images SVG existantes dans le projet
import evchargingImage from "@/assets/evcharging.svg";
import heroImage from "@/assets/hero.svg";
import readyToPlugImage from "@/assets/readytoplug.svg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* La bannière de notification est maintenant dans le header */}
      
      <div className="bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="container mx-auto px-4 pt-20 pb-24 md:pt-24 md:pb-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left content column */}
            <div className="lg:col-span-6">
              <div className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-6">
                Solutions de recharge pour copropriétés
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-[#003566]">
                Vous êtes <span className="text-primary">syndic</span> ou <span className="text-primary">copropriétaire</span>?
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
                Équipez sereinement le parking de votre immeuble en <span className="text-[#8dc63f]">bornes de recharge</span>
              </h2>
              
              <p className="text-lg mb-8 text-gray-600">
                <span className="seo-highlight">BorneFlix</span> vous accompagne dans l'installation de <span className="seo-highlight">bornes de recharge pour véhicules électriques</span> adaptées aux besoins spécifiques de votre copropriété, avec des solutions de financement dédiées et un accompagnement complet.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <a href="#devis" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-secondary hover:bg-green-600 text-white font-medium py-6 px-8 rounded-full shadow-lg shadow-secondary/30 transition-all duration-300 hover:translate-y-[-2px]">
                    Demander un devis gratuit
                  </Button>
                </a>
                <a href="#solutions" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-primary hover:bg-primary hover:text-white text-primary font-medium py-6 px-8 rounded-full transition-all duration-300">
                    Nos solutions
                  </Button>
                </a>
              </div>
              
              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                  <div className="text-secondary mr-2"><i className="fas fa-certificate"></i></div>
                  <span className="text-sm font-medium">IRVE certifié</span>
                </div>
                <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                  <div className="text-secondary mr-2"><i className="fas fa-euro-sign"></i></div>
                  <span className="text-sm font-medium">Aides financières</span>
                </div>
                <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-sm">
                  <div className="text-secondary mr-2"><i className="fas fa-tools"></i></div>
                  <span className="text-sm font-medium">Maintenance incluse</span>
                </div>
              </div>
            </div>
            
            {/* Right column with 3D model and image */}
            <div className="lg:col-span-6 relative flex justify-center">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* Animation interactive pour tous les appareils */}
                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                  <ChargingStationAnimation />
                </div>
                
                {/* Floating elements with animations */}
                <motion.div 
                  className="absolute -bottom-6 -left-6 w-32 h-32 rounded-xl overflow-hidden border-4 border-white shadow-lg bg-primary/10 flex items-center justify-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center"
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  >
                    <i className="fas fa-leaf text-secondary text-2xl"></i>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="absolute -top-6 -right-6 w-32 h-32 rounded-xl overflow-hidden border-4 border-white shadow-lg bg-accent/10 flex items-center justify-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center"
                    animate={{ 
                      boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0)", "0 0 0 10px rgba(59, 130, 246, 0.3)", "0 0 0 0 rgba(59, 130, 246, 0)"] 
                    }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  >
                    <i className="fas fa-plug text-accent text-2xl"></i>
                  </motion.div>
                </motion.div>
                
                {/* Certification badge with animation */}
                <motion.div 
                  className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                  <div className="bg-accent text-white font-bold text-base p-4 rounded-lg shadow-lg">
                    <i className="fas fa-check-circle mr-2"></i> ADVENIR
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Bottom info boxes */}
        <div className="container mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-xl p-6 border border-green-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4 text-secondary text-xl">
                  <i className="fas fa-leaf"></i>
                </div>
                <h3 className="font-bold text-lg text-gray-800">Solution durable</h3>
              </div>
              <p className="text-gray-600">
                Réduisez l'empreinte carbone de votre copropriété tout en valorisant votre patrimoine immobilier.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 text-primary text-xl">
                  <i className="fas fa-bolt"></i>
                </div>
                <h3 className="font-bold text-lg text-gray-800">Installation sur-mesure</h3>
              </div>
              <p className="text-gray-600">
                Solutions adaptées aux spécificités de votre copropriété, qu'elle soit neuve ou ancienne.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mr-4 text-purple-500 text-xl">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3 className="font-bold text-lg text-gray-800">Expertise certifiée</h3>
              </div>
              <p className="text-gray-600">
                Nos électriciens sont qualifiés IRVE et assurent une installation conforme et sécurisée.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
