import React from 'react';
import { motion } from 'framer-motion';

// Importation des images
const chargingStation1 = import.meta.env.DEV ? '/attached_assets/pexels-kindelmedia-9800030.jpg' : '/images/reelles/pexels-kindelmedia-9800030.jpg';
const chargingStation3 = import.meta.env.DEV ? '/attached_assets/images-1.png' : '/images/reelles/images-1.png';
const chargingStation4 = import.meta.env.DEV ? '/attached_assets/images-4.png' : '/images/reelles/images-4.png';
const chargingStation5 = import.meta.env.DEV ? '/attached_assets/images-13.png' : '/images/reelles/images-13.png';
const chargingStation6 = import.meta.env.DEV ? '/attached_assets/image-newsletter-ok.jpeg' : '/images/reelles/image-newsletter-ok.jpeg';
const chargingStation7 = import.meta.env.DEV ? '/attached_assets/screenshot-1747485121313.png' : '/images/reelles/screenshot-1747485121313.png';

interface ImageProps {
  src: string;
  alt: string;
  description: string;
  location: string;
}

const images: ImageProps[] = [
  {
    src: chargingStation1,
    alt: "Station de recharge pour véhicule électrique",
    description: "Station moderne pour recharge rapide",
    location: "Résidence Les Oliviers"
  },
  {
    src: chargingStation3,
    alt: "Borne de recharge intégrée dans un parking souterrain",
    description: "Installation complète en sous-sol",
    location: "Immeuble Le Parc"
  },
  {
    src: chargingStation4,
    alt: "Station de recharge multiple en extérieur",
    description: "Solution pour parkings collectifs",
    location: "Copropriété Saint-Michel"
  },
  {
    src: chargingStation5,
    alt: "Borne avec système de paiement intégré",
    description: "Technologie de pointe avec supervision à distance",
    location: "Résidence du Grand Chêne"
  },
  {
    src: chargingStation6,
    alt: "Installation d'une borne par un technicien",
    description: "Techniciens certifiés IRVE",
    location: "Domaine des Pins"
  },
  {
    src: chargingStation7,
    alt: "Voiture électrique en charge",
    description: "Recharge rapide adaptée à tous véhicules",
    location: "Les Jardins de Mérignac"
  }
];

const ImageGallery = () => {
  return (
    <section id="galerie" className="py-24 bg-gradient-to-r from-[#f8fafc] to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#8dc63f]/10 text-[#8dc63f] px-6 py-2 rounded-full text-sm font-medium mb-4">
            DÉCOUVREZ NOS RÉALISATIONS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#003566]">Galerie photo</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Découvrez nos installations de bornes de recharge en copropriété à travers 
            notre galerie photo. Des solutions adaptées à tous types d'immeubles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold text-xl mb-1">{image.location}</h3>
                  <p className="text-white/90 text-sm">{image.description}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-[#003566] group-hover:text-[#8dc63f] transition-colors duration-300">{image.location}</h3>
                <p className="text-gray-600 text-sm">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#devis" 
            className="inline-flex items-center bg-[#003566] text-white hover:bg-[#1a4d85] py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium"
          >
            Demander un devis pour votre copropriété
            <i className="fas fa-arrow-right ml-3"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;