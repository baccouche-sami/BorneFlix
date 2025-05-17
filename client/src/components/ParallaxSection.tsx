import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  
  return (
    <section ref={ref} className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
      {/* Image de fond avec effet parallaxe */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="/images/gallery/pexels-kindelmedia-9800030.jpg"
          alt="Station de recharge de véhicules électriques" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Contenu centré */}
      <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-20">
        <motion.div 
          className="text-center text-white max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Prêt à électrifier votre copropriété ?
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Le futur de la mobilité est électrique. Préparez votre copropriété dès aujourd'hui.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#devis" 
              className="bg-[#8dc63f] hover:bg-[#7ab42f] text-white py-3 px-8 rounded-full shadow-lg transition-all duration-300 font-medium"
            >
              Obtenir un devis gratuit
            </a>
            <a 
              href="#contact" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white py-3 px-8 rounded-full shadow-lg transition-all duration-300 font-medium"
            >
              Parler à un expert
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Séparateur de forme */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-20 text-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="white" opacity="0.5"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="white" opacity="0.8"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
};

export default ParallaxSection;