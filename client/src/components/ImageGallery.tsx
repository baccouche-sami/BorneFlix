import React from 'react';
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
    title: "Borne Rapide Premium",
    location: "Résidence Les Oliviers, Paris",
    description: "Installation de 8 bornes de recharge 22kW avec système de gestion intelligente",
    imageUrl: "https://images.unsplash.com/photo-1638248312804-618827a2fe66?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Équipement Résidentiel",
    location: "Immeuble Le Grand Parc, Lyon",
    description: "Mise en place d'une infrastructure pour 25 places avec évolutivité",
    imageUrl: "https://images.unsplash.com/photo-1647165507872-cbbe257ed9ea?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "Borne Connectée Pro",
    location: "Copropriété Les Cèdres, Bordeaux",
    description: "Solution complète avec monitoring et facturation automatique",
    imageUrl: "https://images.unsplash.com/photo-1658896851375-e16223a1e858?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    title: "Station Multi-Véhicules",
    location: "Résidence du Parc, Nantes",
    description: "Borne ultra-rapide avec système de répartition de charge",
    imageUrl: "https://images.unsplash.com/photo-1647404600566-d5e87e158b20?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 5,
    title: "Borne Extérieure Sécurisée",
    location: "Les Jardins de Saint-Cloud, Paris",
    description: "Installation résistante aux intempéries avec protection anti-vandalisme",
    imageUrl: "https://images.unsplash.com/photo-1635598907992-970cbf09fed7?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 6,
    title: "Solution Parking Souterrain",
    location: "Tour Horizon, Marseille",
    description: "Équipement de 15 places avec système de détection d'incendie intégré",
    imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bfac3492d9?w=800&auto=format&fit=crop&q=60"
  },
];

const ImageGallery = () => {
  return (
    <section id="galerie" className="py-24 bg-gradient-to-r from-[#f8fafc] to-gray-100">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade" threshold={0.1} delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-[#8dc63f]/10 text-[#8dc63f] px-6 py-2 rounded-full text-sm font-medium mb-4">
              NOS RÉALISATIONS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#003566]">Nos installations récentes</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Découvrez quelques exemples d'installations de bornes de recharge en copropriété 
              réalisées par notre équipe d'experts pour nos clients.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.map((item, index) => (
            <AnimateOnScroll 
              key={item.id} 
              animation="slide-up" 
              threshold={0.1} 
              delay={0.1 * (index % 3)}
              className="h-full"
            >
              <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                    <span className="text-white/80 text-sm block mb-2">{item.location}</span>
                    <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <span className="text-[#8dc63f] text-sm block mb-2">{item.location}</span>
                  <h3 className="text-xl font-bold text-[#003566] mb-2">{item.title}</h3>
                  <p className="text-gray-600 flex-grow">{item.description}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <a 
                      href="#devis" 
                      className="inline-flex items-center text-[#003566] hover:text-[#8dc63f] transition-colors duration-200 font-medium text-sm"
                    >
                      Découvrir ce projet
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        
        <AnimateOnScroll animation="fade" threshold={0.1} delay={0.3}>
          <div className="text-center mt-12">
            <a 
              href="#devis" 
              className="inline-flex items-center bg-[#003566] text-white hover:bg-[#1a4d85] py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium"
            >
              Demander un devis pour votre copropriété
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ImageGallery;