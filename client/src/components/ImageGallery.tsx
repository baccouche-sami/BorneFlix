import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimateOnScroll } from './ui/animate-on-scroll';

interface GalleryImage {
  id: number;
  title: string;
  location: string;
  description: string;
  imageUrl: string;
}

const galleryData: GalleryImage[] = [
  {
    id: 1,
    title: "Borne Solaire Premium",
    location: "Centre Commercial Éco-Park, Montpellier",
    description: "Installation de stations solaires pour recharge écologique et autonome",
    imageUrl: "/images/gallery/pexels-kindelmedia-9800030.jpg"
  },
  {
    id: 2,
    title: "Partenariat et Installation",
    location: "Résidence Les Terrasses, Nantes",
    description: "Accompagnement complet depuis l'étude technique jusqu'à la livraison finale",
    imageUrl: "/images/gallery/images-13.png"
  },
  {
    id: 3,
    title: "Borne Connectée Pro",
    location: "Copropriété Les Cèdres, Bordeaux",
    description: "Solution française avec affichage 'Roulez Électrique' et connectivité avancée",
    imageUrl: "/images/gallery/images-4.png"
  },
  {
    id: 4,
    title: "Gestion Financière",
    location: "Immeuble Le Phare, Lille",
    description: "Solutions de financement adaptées et optimisation des coûts pour les copropriétés",
    imageUrl: "/images/gallery/images-1.png"
  },
  {
    id: 5,
    title: "Installation Express",
    location: "Résidence Grand Angle, Lyon",
    description: "Mise en service rapide avec raccordement aux standards européens",
    imageUrl: "/images/gallery/recharge-img01.jpeg"
  },
  {
    id: 6,
    title: "Solution Collective",
    location: "Les Jardins Connectés, Paris",
    description: "Infrastructure multi-bornes pour grandes copropriétés avec gestion intelligente",
    imageUrl: "/images/gallery/recharge-img02.jpeg"
  },
];

const ImageGallery = () => {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  
  const handleImageHover = (id: number) => {
    setActiveImage(id);
  };
  
  const handleImageLeave = () => {
    setActiveImage(null);
  };
  
  return (
    <section id="galerie" className="py-24 bg-gradient-to-br from-[#f8fafc] via-white to-gray-50 relative overflow-hidden">
      {/* Cercles décoratifs en arrière-plan */}
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-[#8dc63f]/5 blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-[#003566]/5 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#8dc63f]/10 opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block bg-[#8dc63f]/10 text-[#8dc63f] px-6 py-2 rounded-full text-sm font-medium mb-4">
            NOS RÉALISATIONS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#003566]">Nos installations récentes</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Découvrez quelques exemples d'installations de bornes de recharge en copropriété 
            réalisées par notre équipe d'experts certifiés IRVE pour nos clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {galleryData.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
              onHoverStart={() => handleImageHover(item.id)}
              onHoverEnd={handleImageLeave}
              className="h-full"
            >
              <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 h-full flex flex-col transform hover:-translate-y-2">
                <div className="relative h-72 overflow-hidden">
                  {/* Overlay gradient */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t from-[#003566]/80 via-transparent to-transparent z-10 transition-opacity duration-700 ${
                      activeImage === item.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  
                  {/* Border lumineux animé */}
                  <motion.div 
                    className={`absolute inset-0 z-20 border-2 border-transparent rounded-t-2xl transition-all duration-500 ${
                      activeImage === item.id ? 'border-[#8dc63f]/50' : ''
                    }`}
                    animate={
                      activeImage === item.id 
                        ? { 
                            boxShadow: ['0 0 0px 0px rgba(141, 198, 63, 0)', '0 0 20px 2px rgba(141, 198, 63, 0.3)', '0 0 0px 0px rgba(141, 198, 63, 0)'] 
                          } 
                        : {}
                    }
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Image principale */}
                  <motion.img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full h-full object-cover" 
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  
                  {/* Contenu au survol */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-6 z-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: activeImage === item.id ? 1 : 0,
                      y: activeImage === item.id ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white/80 text-sm font-medium inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full mb-3">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      {item.location}
                    </span>
                    <h3 className="text-white font-bold text-2xl mb-2">{item.title}</h3>
                    <p className="text-white/90">{item.description}</p>
                  </motion.div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-[#003566]">{item.title}</h3>
                    <span className="bg-[#003566]/10 text-[#003566] text-xs font-medium px-2 py-1 rounded-full">
                      Installation {2023 - index}
                    </span>
                  </div>
                  <p className="text-gray-600 flex-grow">
                    {item.description}
                  </p>
                  <div className="mt-5 pt-5 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-[#8dc63f] text-sm">
                      <i className="fas fa-check-circle mr-2"></i>
                      Installation certifiée
                    </span>
                    <motion.a 
                      href="#devis" 
                      className="inline-flex items-center text-[#003566] font-medium text-sm group/link"
                      whileHover={{ x: 5 }}
                    >
                      En savoir plus
                      <motion.span 
                        initial={{ x: 0 }} 
                        whileHover={{ x: 5 }}
                        className="ml-2 text-[#8dc63f]"
                      >
                        <i className="fas fa-arrow-right"></i>
                      </motion.span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-white px-8 py-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-[#003566] mb-3">Vous souhaitez équiper votre copropriété ?</h3>
            <p className="text-gray-600 mb-5">Obtenez une étude personnalisée et un devis gratuit</p>
            <a 
              href="#devis" 
              className="inline-flex items-center bg-[#003566] text-white hover:bg-[#1a4d85] py-3 px-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 font-medium"
            >
              Demander un devis
              <i className="fas fa-arrow-right ml-3"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageGallery;